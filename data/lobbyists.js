const lobbyistData = [
    {
        company: "Meta",
        logo: "M",
        color: "#1877F2",
        spend2025: "$26.3M",
        spendNum: 26300000,
        lobbyistCount: 87,
        aiLobbyistCount: 55,
        keyPeople: [
            { name: "Joel Kaplan", role: "Chief Global Affairs Officer", note: "Former Bush WH Deputy Chief of Staff" },
            { name: "James Hines", role: "State Policy — Texas", note: "State-level AI policy strategy" },
            { name: "Mona Pasquil Rogers", role: "Director, California Public Policy", note: "State-level AI regulation engagement" }
        ],
        keyInitiatives: ["American Technology Excellence Project (ATEP) — multistate super PAC to elect pro-tech candidates", "Largest corporate employer of AI-focused lobbyists after U.S. Chamber of Commerce"],
        stance: "Opposes strict state-level AI regulation; supports federal preemption",
        url: "https://www.opensecrets.org/federal-lobbying/clients/summary?id=D000033563"
    },
    {
        company: "Amazon",
        logo: "A",
        color: "#FF9900",
        spend2025: "$18.4M",
        spendNum: 18400000,
        lobbyistCount: 48,
        aiLobbyistCount: 48,
        keyPeople: [
            { name: "Brian Huseman", role: "VP of Public Policy", note: "Leads Amazon's DC policy team" },
            { name: "Jonathan Sutherland Ferro", role: "Federal Lobbyist", note: "Former House Judiciary Committee Chief Counsel" },
            { name: "Jay Carney", role: "Former SVP Global Affairs", note: "Former WH Press Secretary (now at Airbnb)" }
        ],
        keyInitiatives: ["Lobbying for CREATE AI Act (H.R. 2385) — national AI research resource", "Data Center Coalition member — lobbying for AI infrastructure expansion", "AI Infrastructure Coalition co-founder"],
        stance: "Supports innovation-friendly regulation; backs public AI research access",
        url: "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000023883"
    },
    {
        company: "Google / Alphabet",
        logo: "G",
        color: "#4285F4",
        spend2025: "$13.1M",
        spendNum: 13100000,
        lobbyistCount: 63,
        aiLobbyistCount: 63,
        keyPeople: [
            { name: "Kent Walker", role: "President of Global Affairs & CLO", note: "Reports directly to Google CEO; oversees all policy" },
            { name: "Karan Bhatia", role: "VP, Government Affairs & Public Policy", note: "Former GE executive; leads engagement in 100+ countries" },
            { name: "Halimah DeLaine Prado", role: "General Counsel", note: "Supports legal strategy on AI regulation" }
        ],
        keyInitiatives: ["Lobbied for federal preemption of state AI laws — backed 10-year state ban proposal", "AI Infrastructure Coalition co-founder", "Spent more on Q1 2025 lobbying than entire AI safety research field received in grants"],
        stance: "Supports innovation-first federal framework; opposes fragmented state regulation",
        url: "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000067823"
    },
    {
        company: "TikTok / ByteDance",
        logo: "T",
        color: "#010101",
        spend2025: "$8.3M",
        spendNum: 8330000,
        lobbyistCount: 41,
        aiLobbyistCount: 18,
        keyPeople: [
            { name: "Michael Beckerman", role: "VP & Head of Public Policy, Americas", note: "Former Internet Association CEO" },
            { name: "Fmr. Sen. Trent Lott (R-MS)", role: "Outside Lobbyist — Crossroads Strategies", note: "Former Senate Majority Leader" },
            { name: "Fmr. Sen. John Breaux (D-LA)", role: "Outside Lobbyist — Crossroads Strategies", note: "Bipartisan lobbying duo with Lott" },
            { name: "Fmr. Rep. Jeff Denham (R-CA)", role: "Outside Lobbyist — K&L Gates", note: "Former House member" }
        ],
        keyInitiatives: ["Employs 41 lobbyists — one for every 13 members of Congress", "Hired bipartisan former lawmakers including ex-Senate Majority Leader", "Primary focus on countering divestiture/ban legislation alongside AI content policy"],
        stance: "Focused on platform survival; supports self-regulation of AI content moderation",
        url: "https://www.opensecrets.org/federal-lobbying/clients/summary?id=D000073174"
    },
    {
        company: "OpenAI",
        logo: "O",
        color: "#10A37F",
        spend2025: "$3.5M",
        spendNum: 3500000,
        lobbyistCount: 12,
        aiLobbyistCount: 12,
        keyPeople: [
            { name: "Chris Lehane", role: "Head of Global Policy", note: "Veteran Democratic political operative" },
            { name: "Chan Park", role: "Head of Government Relations", note: "Former Senate Judiciary counsel & Microsoft lobbyist" },
            { name: "Reginald Babin", role: "Federal Lobbyist", note: "Former legal counsel to Sen. Schumer" },
            { name: "Matthew Rimkunas", role: "Federal Lobbyist", note: "Former aide to Sen. Lindsey Graham (16 years)" }
        ],
        keyInitiatives: ["Hired DLA Piper and Akin Gump Strauss Hauer & Feld as outside lobbying firms", "Lobbying spend increased 7x from 2023 to 2024", "Data Center Coalition & AI Infrastructure Coalition member"],
        stance: "Supports targeted AI safety regulation; opposes open-source mandates",
        url: "https://www.opensecrets.org/federal-lobbying/clients/summary?id=D000084252"
    },
    {
        company: "Anthropic",
        logo: "An",
        color: "#D4A574",
        spend2025: "$3.1M",
        spendNum: 3130000,
        lobbyistCount: 8,
        aiLobbyistCount: 8,
        keyPeople: [
            { name: "Jack Clark", role: "Co-founder & Head of Policy", note: "Co-authored the AI Index report at Stanford" },
            { name: "Avenue Solutions", role: "Outside Lobbying Firm", note: "Hired Dec 2025; primarily health care clients" }
        ],
        keyInitiatives: ["Lobbied White House and DOE on data center infrastructure", "Data Center Coalition member", "Advocated for responsible scaling policies and AI safety standards"],
        stance: "Supports strong AI safety requirements; favors responsible scaling frameworks",
        url: "https://www.opensecrets.org/federal-lobbying/clients/summary?cycle=2025&id=D000106114"
    }
];

module.exports = lobbyistData;
