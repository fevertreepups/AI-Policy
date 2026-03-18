const express = require('express');
const router = express.Router();

const billsData = require('../data/bills');
const impactData = require('../data/impacts');
const politicianData = require('../data/politicians');
const lobbyistData = require('../data/lobbyists');
const calendarEvents = require('../data/calendar');

// Build knowledge base context for the AI
function buildContext() {
    return {
        billsSummary: billsData.map(b => `${b.name} (${b.bill}) - ${b.level} - ${b.status}: ${b.summary}`).join('\n'),
        personas: Object.keys(impactData),
        politiciansSummary: politicianData.map(p => `${p.name} (${p.party}-${p.state}) - ${p.stance}: ${p.desc}`).join('\n'),
        lobbyistsSummary: lobbyistData.map(l => `${l.company} - ${l.spend2025} lobbying spend, ${l.lobbyistCount} lobbyists: ${l.stance}`).join('\n'),
        upcomingEvents: calendarEvents.slice(0, 5).map(e => `${e.date}: ${e.title} - ${e.desc}`).join('\n'),
    };
}

// Simple keyword-based AI response system (no external API needed)
function generateResponse(message) {
    const msg = message.toLowerCase();
    const context = buildContext();

    // Bill-specific queries
    if (msg.includes('kosa') || msg.includes('kids online safety')) {
        const bill = billsData.find(b => b.name.includes('KOSA'));
        return {
            text: `**${bill.name}** (${bill.bill})\n\n${bill.summary}\n\n**Status:** ${bill.status} | **Level:** ${bill.level}\n\n[Read the full bill text](${bill.url})`,
            sources: [{ title: bill.name, url: bill.url }],
            relatedBills: billsData.filter(b => b.category === bill.category && b.id !== bill.id).slice(0, 3)
        };
    }

    if (msg.includes('coppa')) {
        const bill = billsData.find(b => b.name.includes('COPPA'));
        return {
            text: `**${bill.name}** (${bill.bill})\n\n${bill.summary}\n\n**Status:** ${bill.status}\n\n[More info](${bill.url})`,
            sources: [{ title: bill.name, url: bill.url }],
            relatedBills: billsData.filter(b => b.category === 'Age Verification').slice(0, 3)
        };
    }

    if (msg.includes('deepfake')) {
        const bill = billsData.find(b => b.name.includes('Deepfake'));
        return {
            text: `**${bill.name}** (${bill.bill})\n\n${bill.summary}\n\n**Status:** ${bill.status}\n\nThis is part of broader AI Safety regulation efforts. The TAKE IT DOWN Act also addresses non-consensual synthetic media.\n\n[Read the bill](${bill.url})`,
            sources: [{ title: bill.name, url: bill.url }],
            relatedBills: billsData.filter(b => b.name.includes('TAKE IT DOWN') || b.name.includes('AI Labeling')).slice(0, 3)
        };
    }

    if (msg.includes('eu') && (msg.includes('ai act') || msg.includes('regulation'))) {
        const bill = billsData.find(b => b.name === 'EU AI Act');
        return {
            text: `**${bill.name}**\n\n${bill.summary}\n\nThe EU AI Act is the world's first comprehensive AI law. It uses a risk-based approach:\n- **Unacceptable risk:** Banned (social scoring, real-time biometric surveillance)\n- **High risk:** Strict requirements (hiring AI, credit scoring)\n- **Limited risk:** Transparency obligations\n- **Minimal risk:** No restrictions\n\nPhase 2 enforcement begins April 1, 2026.\n\n[Official EU AI Act](${bill.url})`,
            sources: [{ title: bill.name, url: bill.url }],
            relatedBills: billsData.filter(b => b.level === 'International').slice(0, 3)
        };
    }

    // Persona queries
    const personaMap = {
        'parent': 'parent', 'teen': 'teen', 'teenager': 'teen',
        'teacher': 'teacher', 'educator': 'teacher',
        'business': 'business', 'entrepreneur': 'business',
        'creator': 'creator', 'content creator': 'creator',
        'healthcare': 'healthcare', 'doctor': 'healthcare', 'nurse': 'healthcare',
        'journalist': 'journalist', 'reporter': 'journalist',
        'developer': 'developer', 'programmer': 'developer', 'engineer': 'developer',
        'privacy': 'privacy',
        'job seeker': 'jobseeker', 'jobseeker': 'jobseeker', 'job': 'jobseeker',
        'social media': 'socialuser', 'social user': 'socialuser',
        'senior': 'senior', 'elderly': 'senior', 'retired': 'senior',
        'civil rights': 'rights', 'rights': 'rights',
    };

    for (const [keyword, persona] of Object.entries(personaMap)) {
        if (msg.includes(keyword) && (msg.includes('how') || msg.includes('affect') || msg.includes('impact') || msg.includes('matter'))) {
            const impacts = impactData[persona];
            if (impacts) {
                const impactText = impacts.map(i => {
                    const icon = i.severity === 'positive' ? '+' : i.severity === 'high' ? '!' : '-';
                    return `[${icon}] **${i.title}**: ${i.desc}`;
                }).join('\n\n');

                return {
                    text: `Here's how AI policy affects **${persona}s**:\n\n${impactText}`,
                    sources: impacts.map(i => ({ title: i.title, url: i.url })),
                };
            }
        }
    }

    // Lobbying queries
    if (msg.includes('lobby') || msg.includes('lobbying') || msg.includes('corporate influence') || msg.includes('money')) {
        const totalSpend = lobbyistData.reduce((sum, l) => sum + l.spendNum, 0);
        const topSpender = lobbyistData.reduce((max, l) => l.spendNum > max.spendNum ? l : max);
        const companyList = lobbyistData.map(l => `- **${l.company}**: ${l.spend2025} (${l.lobbyistCount} lobbyists) — ${l.stance}`).join('\n');

        return {
            text: `**AI Lobbying Overview (2025)**\n\nTotal tracked spending: **$${(totalSpend / 1000000).toFixed(1)}M**\nTop spender: **${topSpender.company}** at ${topSpender.spend2025}\n\n${companyList}\n\nKey trend: Tech companies spent more on AI lobbying in Q1 2025 than the entire AI safety research field received in grants.`,
            sources: lobbyistData.map(l => ({ title: l.company + ' (OpenSecrets)', url: l.url })),
        };
    }

    // Politician queries
    if (msg.includes('politician') || msg.includes('senator') || msg.includes('congress') || msg.includes('representative') || msg.includes('who supports') || msg.includes('who opposes')) {
        const byStance = {};
        politicianData.forEach(p => {
            if (!byStance[p.stance]) byStance[p.stance] = [];
            byStance[p.stance].push(p);
        });

        let text = '**Key Politicians on AI Policy**\n\n';
        for (const [stance, pols] of Object.entries(byStance)) {
            const label = stance.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase());
            text += `**${label}:**\n`;
            pols.forEach(p => {
                text += `- ${p.name} (${p.party}-${p.state}) — ${p.bills.join(', ')}\n`;
            });
            text += '\n';
        }

        return {
            text,
            sources: politicianData.map(p => ({ title: p.name, url: p.url })),
        };
    }

    // Calendar/upcoming queries
    if (msg.includes('upcoming') || msg.includes('calendar') || msg.includes('schedule') || msg.includes('next') || msg.includes('when') || msg.includes('deadline')) {
        const now = new Date().toISOString().split('T')[0];
        const upcoming = calendarEvents
            .filter(e => e.date >= now)
            .sort((a, b) => a.date.localeCompare(b.date))
            .slice(0, 5);

        const eventText = upcoming.map(e => {
            const typeIcon = { federal: 'F', state: 'S', comment: 'C', international: 'G' };
            return `**${e.date}** [${typeIcon[e.type] || '?'}] ${e.title}\n${e.desc}`;
        }).join('\n\n');

        return {
            text: `**Upcoming AI Policy Events**\n\n${eventText}`,
            sources: [],
        };
    }

    // Bill search
    if (msg.includes('bill') || msg.includes('law') || msg.includes('regulation') || msg.includes('legislation')) {
        // Try to find specific bills mentioned
        const matchedBills = billsData.filter(b =>
            msg.includes(b.bill.toLowerCase()) ||
            msg.includes(b.name.toLowerCase().split('(')[0].trim())
        );

        if (matchedBills.length > 0) {
            const billText = matchedBills.map(b =>
                `**${b.name}** (${b.bill}) — ${b.level} | ${b.status}\n${b.summary}\n[Read more](${b.url})`
            ).join('\n\n');
            return {
                text: billText,
                sources: matchedBills.map(b => ({ title: b.name, url: b.url })),
            };
        }

        // General bill overview
        const stats = { Federal: 0, State: 0, International: 0 };
        billsData.forEach(b => stats[b.level] = (stats[b.level] || 0) + 1);

        return {
            text: `**AI Policy Bill Tracker**\n\nWe're tracking **${billsData.length} active bills**:\n- **Federal:** ${stats.Federal} bills\n- **State:** ${stats.State} bills\n- **International:** ${stats.International} bills\n\nCategories include Age Verification, AI Safety, and Biometric privacy. Ask me about specific bills, or how they affect your role (e.g., "How does AI policy affect teachers?")`,
            sources: [{ title: 'Congress.gov', url: 'https://www.congress.gov/' }],
        };
    }

    // Biometric queries
    if (msg.includes('biometric') || msg.includes('facial recognition') || msg.includes('bipa')) {
        const biometricBills = billsData.filter(b => b.category === 'Biometric');
        const billText = biometricBills.map(b => `- **${b.name}** (${b.bill}) — ${b.level} | ${b.status}`).join('\n');

        return {
            text: `**Biometric Privacy Laws**\n\nWe're tracking ${biometricBills.length} biometric-related bills:\n\n${billText}\n\nIllinois' BIPA remains the gold standard, with other states (NY, TX, MA, WA) following suit. The EU AI Act also bans real-time biometric surveillance in public spaces.`,
            sources: biometricBills.map(b => ({ title: b.name, url: b.url })),
        };
    }

    // Age verification
    if (msg.includes('age verification') || msg.includes('children') || msg.includes('kids') || msg.includes('minors')) {
        const ageBills = billsData.filter(b => b.category === 'Age Verification');
        const billText = ageBills.map(b => `- **${b.name}** (${b.bill}) — ${b.level} | ${b.status}`).join('\n');

        return {
            text: `**Age Verification & Children's Safety**\n\n${ageBills.length} bills address online safety for minors:\n\n${billText}\n\n15+ states now require some form of age verification for social media. The federal KOSA bill is the most comprehensive, requiring platforms to prevent harm to minors.`,
            sources: ageBills.map(b => ({ title: b.name, url: b.url })),
        };
    }

    // Default response with helpful suggestions
    return {
        text: `I can help you understand AI policy! Here are some things you can ask me:\n\n- **"How does AI policy affect [role]?"** — Get personalized impact analysis for parents, teachers, developers, etc.\n- **"Tell me about KOSA"** — Learn about specific bills\n- **"Who's lobbying for AI?"** — See corporate influence data\n- **"Which politicians support AI regulation?"** — View congressional stances\n- **"What's coming up?"** — See upcoming legislative events\n- **"What are the biometric privacy laws?"** — Explore by topic\n- **"Tell me about the EU AI Act"** — International regulation\n\nWe track **${billsData.length} active bills**, **${politicianData.length} key politicians**, and **${lobbyistData.length} major lobbying firms**.`,
        sources: [],
    };
}

// POST /api/chat
router.post('/', (req, res) => {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
    }

    if (message.length > 500) {
        return res.status(400).json({ error: 'Message too long (max 500 characters)' });
    }

    const response = generateResponse(message.trim());

    res.json({
        reply: response.text,
        sources: response.sources || [],
        relatedBills: response.relatedBills || [],
        timestamp: new Date().toISOString(),
    });
});

module.exports = router;
