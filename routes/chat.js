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

    // Executive order queries
    if (msg.includes('executive order') || msg.includes('preemption') || msg.includes('federal framework') || (msg.includes('trump') && msg.includes('ai'))) {
        const eoJan = billsData.find(b => b.bill === 'EO Jan 2025');
        const eoDec = billsData.find(b => b.bill === 'EO Dec 2025');
        const actionPlan = billsData.find(b => b.bill === 'AI Action Plan');
        return {
            text: `**US AI Executive Orders (2025)**\n\n**1. Removing Barriers to AI Leadership** (Jan 23, 2025)\n${eoJan.summary}\n\n**2. America's AI Action Plan** (July 2025)\n${actionPlan.summary}\n\n**3. National AI Policy Framework** (Dec 11, 2025)\n${eoDec.summary}\n\nThe December EO is the most significant — it creates a DOJ task force to challenge state AI laws and threatens federal funding for non-compliant states. 20+ state attorneys general are pushing back.\n\n[Jan 2025 EO](${eoJan.url}) | [Dec 2025 EO](${eoDec.url})`,
            sources: [
                { title: 'Jan 2025 Executive Order', url: eoJan.url },
                { title: 'Dec 2025 Executive Order', url: eoDec.url },
                { title: "America's AI Action Plan", url: actionPlan.url }
            ],
        };
    }

    // TAKE IT DOWN Act queries
    if (msg.includes('take it down')) {
        const bill = billsData.find(b => b.name.includes('TAKE IT DOWN'));
        return {
            text: `**${bill.name}** — Signed Into Law May 19, 2025\n\n${bill.summary}\n\n**Key provisions:**\n- Criminalizes publishing nonconsensual intimate images (real or AI-generated)\n- Up to 2 years imprisonment; harsher penalties for content depicting minors\n- Platforms must remove flagged content within 48 hours\n- Platform compliance deadline: **May 19, 2026**\n- FTC enforcement for non-compliant platforms\n- First federal law to regulate AI-generated content\n\nSponsored by Sen. Ted Cruz (R-TX) and Sen. Amy Klobuchar (D-MN). Passed Senate unanimously and House 409-2.\n\n[Read the full law](${bill.url})`,
            sources: [{ title: bill.name, url: bill.url }],
            relatedBills: billsData.filter(b => b.name.includes('Deepfake') || b.name.includes('AI Labeling')).slice(0, 3)
        };
    }

    // California TFAIA queries
    if ((msg.includes('california') || msg.includes('tfaia') || msg.includes('sb 53')) && (msg.includes('ai') || msg.includes('frontier') || msg.includes('safety') || msg.includes('tfaia') || msg.includes('sb 53'))) {
        const bill = billsData.find(b => b.name.includes('TFAIA'));
        return {
            text: `**${bill.name}** — Effective Jan 1, 2026\n\n${bill.summary}\n\n**Key requirements:**\n- Applies to "frontier developers" training models with >10^26 operations\n- Large frontier developers (>$500M revenue) must publish safety frameworks\n- Report critical safety incidents within 15 days\n- Whistleblower protections for covered employees\n- Up to $1M civil penalty per violation\n- AG enforcement only\n\nAuthored by Sen. Scott Wiener after SB 1047 was vetoed.\n\n[Read the bill](${bill.url})`,
            sources: [{ title: bill.name, url: bill.url }],
            relatedBills: billsData.filter(b => b.name.includes('SB 1047') || b.name.includes('RAIGA')).slice(0, 3)
        };
    }

    // Texas RAIGA queries
    if ((msg.includes('texas') || msg.includes('raiga') || msg.includes('traiga')) && (msg.includes('ai') || msg.includes('law') || msg.includes('raiga') || msg.includes('traiga'))) {
        const bill = billsData.find(b => b.name.includes('RAIGA'));
        return {
            text: `**${bill.name}** — Effective Jan 1, 2026\n\n${bill.summary}\n\n**Key provisions:**\n- Prohibits AI for restricted purposes (self-harm, CSAM, unlawful deepfakes, impersonating minors)\n- Healthcare providers must disclose AI use\n- Biometric identifier limitations\n- Developers/deployers not liable for end-user misuse\n- Affirmative defenses for red-teaming, self-detection, following guidelines\n- Texas AG enforcement via civil investigative demands\n\nSigned by Governor Abbott, June 22, 2025.\n\n[Read the law](${bill.url})`,
            sources: [{ title: bill.name, url: bill.url }],
            relatedBills: billsData.filter(b => b.name.includes('TFAIA') || b.name.includes('Colorado')).slice(0, 3)
        };
    }

    // Colorado AI Act queries
    if (msg.includes('colorado') && (msg.includes('ai') || msg.includes('act') || msg.includes('law'))) {
        const bill = billsData.find(b => b.name.includes('Colorado AI Act'));
        return {
            text: `**${bill.name}** — Takes Effect June 30, 2026\n\n${bill.summary}\n\n**Timeline:**\n- Original: Feb 1, 2026 effective date\n- Aug 2025: SB 25B-004 delayed implementation to June 30, 2026\n- Mar 17, 2026: Working group reached consensus on framework rework\n\n**Key requirements (when effective):**\n- Impact assessments for high-risk AI systems\n- Reasonable care to prevent algorithmic discrimination\n- AG-only enforcement with 90-day cure period\n- No private right of action\n- Developer/deployer fault allocation\n- AG rules due by Dec 31, 2026\n\n[Read the bill](${bill.url})`,
            sources: [{ title: bill.name, url: bill.url }],
        };
    }

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
        const takeItDown = billsData.find(b => b.name.includes('TAKE IT DOWN'));
        return {
            text: `**Deepfake Regulation**\n\n**${takeItDown.name}** — ${takeItDown.status}\n${takeItDown.summary}\n\n**${bill.name}** (${bill.bill}) — ${bill.status}\n${bill.summary}\n\nThe TAKE IT DOWN Act (signed May 2025) is the first federal law addressing AI deepfakes. The Deepfake Accountability Act would add additional requirements.\n\n[TAKE IT DOWN Act](${takeItDown.url}) | [Deepfake Accountability Act](${bill.url})`,
            sources: [{ title: takeItDown.name, url: takeItDown.url }, { title: bill.name, url: bill.url }],
            relatedBills: billsData.filter(b => b.name.includes('AI Labeling')).slice(0, 3)
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
    if (msg.includes('lobby') || msg.includes('lobbying') || msg.includes('corporate influence') || msg.includes('money') || msg.includes('super pac') || msg.includes('spending')) {
        const totalSpend = lobbyistData.reduce((sum, l) => sum + l.spendNum, 0);
        const topSpender = lobbyistData.reduce((max, l) => l.spendNum > max.spendNum ? l : max);
        const companyList = lobbyistData.map(l => `- **${l.company}**: ${l.spend2025} (${l.lobbyistCount} lobbyists) — ${l.stance}`).join('\n');

        return {
            text: `**AI Lobbying Overview (2025)**\n\nTotal tracked spending: **$${(totalSpend / 1000000).toFixed(1)}M**\nTop spender: **${topSpender.company}** at ${topSpender.spend2025}\n\n${companyList}\n\n**Key trends:**\n- 7 largest tech companies spent $50M+ on federal lobbying in 9 months of 2025\n- OpenAI co-funded Leading the Future super PAC ($100M with a16z)\n- Meta launched American Technology Excellence Project super PAC\n- Big Tech pushed for 10-year state AI law preemption in Trump spending bill`,
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
            text: `**AI Policy Bill Tracker**\n\nWe're tracking **${billsData.length} active bills**:\n- **Federal:** ${stats.Federal} bills\n- **State:** ${stats.State} bills\n- **International:** ${stats.International} bills\n\nCategories include Age Verification, AI Safety, and Biometric privacy.\n\n**Key 2025-2026 developments:**\n- TAKE IT DOWN Act signed into law (May 2025)\n- 3 major executive orders reshaping federal AI policy\n- CA TFAIA and TX RAIGA effective Jan 1, 2026\n- CO AI Act takes effect June 30, 2026\n- Federal preemption battle with 20+ state AGs\n\nAsk me about specific bills, executive orders, or how they affect your role!`,
            sources: [{ title: 'Congress.gov', url: 'https://www.congress.gov/' }],
        };
    }

    // Biometric queries
    if (msg.includes('biometric') || msg.includes('facial recognition') || msg.includes('bipa')) {
        const biometricBills = billsData.filter(b => b.category === 'Biometric');
        const billText = biometricBills.map(b => `- **${b.name}** (${b.bill}) — ${b.level} | ${b.status}`).join('\n');

        return {
            text: `**Biometric Privacy Laws**\n\nWe're tracking ${biometricBills.length} biometric-related bills:\n\n${billText}\n\nIllinois' BIPA remains the gold standard, with other states (NY, TX, MA, WA) following suit. The EU AI Act also bans real-time biometric surveillance in public spaces. Texas RAIGA adds biometric identifier limitations.`,
            sources: biometricBills.map(b => ({ title: b.name, url: b.url })),
        };
    }

    // Age verification
    if (msg.includes('age verification') || msg.includes('children') || msg.includes('kids') || msg.includes('minors')) {
        const ageBills = billsData.filter(b => b.category === 'Age Verification');
        const billText = ageBills.map(b => `- **${b.name}** (${b.bill}) — ${b.level} | ${b.status}`).join('\n');

        return {
            text: `**Age Verification & Children's Safety**\n\n${ageBills.length} bills address online safety for minors:\n\n${billText}\n\n15+ states now require some form of age verification for social media. The federal KOSA bill is the most comprehensive. The TAKE IT DOWN Act (signed May 2025) adds criminal penalties for AI deepfakes of minors.`,
            sources: ageBills.map(b => ({ title: b.name, url: b.url })),
        };
    }

    // Default response with helpful suggestions
    return {
        text: `I can help you understand AI policy! Here are some things you can ask me:\n\n- **"Tell me about the executive orders"** — 2025 federal AI policy shifts\n- **"What is the TAKE IT DOWN Act?"** — First federal AI content law\n- **"Tell me about California TFAIA"** — Frontier AI safety law\n- **"Tell me about Texas RAIGA"** — Texas AI governance\n- **"What about the Colorado AI Act?"** — High-risk AI regulation\n- **"How does AI policy affect [role]?"** — Personalized impact for parents, teachers, developers, etc.\n- **"Who's lobbying for AI?"** — Corporate influence and super PAC data\n- **"Which politicians support AI regulation?"** — Congressional stances\n- **"What's coming up?"** — Upcoming legislative events and deadlines\n- **"Tell me about the EU AI Act"** — International regulation\n\nWe track **${billsData.length} active bills**, **${politicianData.length} key politicians**, and **${lobbyistData.length} major lobbying firms**.`,
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
