const politicianData = [
    {
        name: "Sen. Chuck Schumer",
        party: "D", state: "NY",
        role: "Senate Minority Leader",
        stance: "pro-regulation",
        bills: ["SAFE Innovation Framework", "AI Insight Forums"],
        desc: "Led bipartisan AI Insight Forums bringing together tech leaders, civil society, and policymakers. Championed the SAFE Innovation Framework for comprehensive AI governance.",
        url: "https://www.schumer.senate.gov/"
    },
    {
        name: "Sen. Josh Hawley",
        party: "R", state: "MO",
        role: "Senate Commerce Committee",
        stance: "pro-regulation",
        bills: ["AI LEAD Act", "GUARD Act"],
        desc: "Co-sponsored the bipartisan AI LEAD Act with Sen. Durbin to establish product liability for AI systems. Led the GUARD Act requiring age verification for AI chatbots.",
        url: "https://www.hawley.senate.gov/"
    },
    {
        name: "Sen. Richard Blumenthal",
        party: "D", state: "CT",
        role: "Senate Judiciary Subcommittee on Privacy",
        stance: "pro-regulation",
        bills: ["GUARD Act", "No Fakes Act"],
        desc: "Co-led the GUARD Act with Sen. Hawley. Chaired key AI oversight hearings in the Senate Judiciary Committee and pushed for comprehensive AI licensing frameworks.",
        url: "https://www.blumenthal.senate.gov/"
    },
    {
        name: "Sen. Edward Markey",
        party: "D", state: "MA",
        role: "Senate Commerce Committee",
        stance: "pro-regulation",
        bills: ["AI Civil Rights Act", "COPPA 2.0"],
        desc: "Lead sponsor of the AI Civil Rights Act to eliminate algorithmic discrimination. Long-standing advocate for children's online privacy through COPPA 2.0 updates.",
        url: "https://www.markey.senate.gov/"
    },
    {
        name: "Sen. Ted Cruz",
        party: "R", state: "TX",
        role: "Senate Commerce Committee Chair",
        stance: "mixed",
        bills: ["TAKE IT DOWN Act"],
        desc: "Sponsored the bipartisan TAKE IT DOWN Act — the first federal law criminalizing AI-generated nonconsensual intimate images, signed into law May 2025. Generally favors lighter regulatory touch on AI innovation.",
        url: "https://www.cruz.senate.gov/"
    },
    {
        name: "Sen. Amy Klobuchar",
        party: "D", state: "MN",
        role: "Senate Judiciary Committee",
        stance: "pro-regulation",
        bills: ["TAKE IT DOWN Act", "AI in Elections Act"],
        desc: "Co-sponsored TAKE IT DOWN Act targeting deepfake intimate images. Introduced the AI in Elections Act to require disclosure of AI-generated political ads.",
        url: "https://www.klobuchar.senate.gov/"
    },
    {
        name: "Rep. Pramila Jayapal",
        party: "D", state: "WA-07",
        role: "House Progressive Caucus Chair",
        stance: "pro-regulation",
        bills: ["AI Civil Rights Act"],
        desc: "Co-lead of the AI Civil Rights Act in the House, focusing on eliminating AI discrimination in housing, employment, credit, and criminal justice decisions.",
        url: "https://jayapal.house.gov/"
    },
    {
        name: "Rep. Yvette Clarke",
        party: "D", state: "NY-09",
        role: "Congressional Black Caucus",
        stance: "pro-regulation",
        bills: ["AI Civil Rights Act", "DEEPFAKES Accountability Act"],
        desc: "Co-lead of the AI Civil Rights Act. Introduced the DEEPFAKES Accountability Act requiring watermarking and disclosure of AI-generated content.",
        url: "https://clarke.house.gov/"
    },
    {
        name: "Sen. Dick Durbin",
        party: "D", state: "IL",
        role: "Senate Judiciary Committee",
        stance: "pro-regulation",
        bills: ["AI LEAD Act"],
        desc: "Co-sponsored the AI LEAD Act establishing product liability for AI. Used Judiciary Committee to hold multiple hearings on AI risks and accountability.",
        url: "https://www.durbin.senate.gov/"
    },
    {
        name: "Sen. Todd Young",
        party: "R", state: "IN",
        role: "Senate AI Caucus Co-Chair",
        stance: "balanced",
        bills: ["SAFE Innovation Framework", "CREATE AI Act"],
        desc: "Co-founded the bipartisan Senate AI Caucus. Advocates for balanced approach supporting AI innovation while establishing safety guardrails through the CREATE AI Act.",
        url: "https://www.young.senate.gov/"
    },
    {
        name: "Sen. Martin Heinrich",
        party: "D", state: "NM",
        role: "Senate AI Caucus Co-Chair",
        stance: "balanced",
        bills: ["SAFE Innovation Framework", "AI Research Resource"],
        desc: "Co-founded the Senate AI Caucus with Sen. Young. Champions the National AI Research Resource to democratize access to AI computing power for researchers.",
        url: "https://www.heinrich.senate.gov/"
    },
    {
        name: "Sen. Elizabeth Warren",
        party: "D", state: "MA",
        role: "Senate Banking Committee",
        stance: "pro-regulation",
        bills: ["AI Civil Rights Act", "Stop Wall Street AI Act"],
        desc: "Co-sponsor of the AI Civil Rights Act. Introduced legislation to prevent AI-driven market manipulation and algorithmic trading abuses in financial markets.",
        url: "https://www.warren.senate.gov/"
    },
    {
        name: "Sen. Scott Wiener",
        party: "D", state: "CA",
        role: "California State Senate",
        stance: "pro-regulation",
        bills: ["SB 1047 (Vetoed)", "SB 53 (TFAIA)"],
        desc: "Authored California's SB 1047 (vetoed 2024) and then SB 53, the Transparency in Frontier AI Act — the first-in-nation frontier AI safety law signed into law Sep 2025. Leading voice on state-level AI governance.",
        url: "https://sd11.senate.ca.gov/"
    },
    {
        name: "Gov. Jared Polis",
        party: "D", state: "CO",
        role: "Governor of Colorado",
        stance: "balanced",
        bills: ["Colorado AI Act (SB 24-205)", "SB 25B-004"],
        desc: "Signed the Colorado AI Act but pushed to delay implementation to June 2026. Convened working group that reached March 2026 consensus on reworking the law. Balances innovation concerns with consumer protection.",
        url: "https://www.colorado.gov/governor"
    }
];

module.exports = politicianData;
