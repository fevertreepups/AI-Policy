const impactData = {
    parent: [
        { title: 'Age Verification Laws Expanding', desc: 'Bills like KOSA and 15+ state laws restrict kids\' access to social media. The TAKE IT DOWN Act (signed May 2025) criminalizes AI-generated intimate images of minors.', severity: 'high', url: 'https://www.congress.gov/bill/118th-congress/senate-bill/1693' },
        { title: 'COPPA 2.0 Protections', desc: 'Stricter children\'s online privacy rules mean better data protection for kids under 13.', severity: 'positive', url: 'https://www.ftc.gov/news-events/news/2024/01/ftc-seeks-updates-childrens-online-privacy-protection-rule' },
        { title: 'Platform Removal Rights', desc: 'Under the TAKE IT DOWN Act, platforms must remove flagged nonconsensual intimate images within 48 hours. Full platform compliance required by May 19, 2026.', severity: 'positive', url: 'https://www.congress.gov/bill/119th-congress/senate-bill/21' },
        { title: 'Algorithmic Recommendation Limits', desc: 'CA SB 764 restricts addictive recommendation algorithms targeting minors. TX RAIGA adds healthcare AI disclosure requirements.', severity: 'positive', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB764' },
    ],
    teen: [
        { title: 'Age Verification Friction', desc: 'Multiple state laws (TX, FL, UT, OH) require age verification, making social media access harder.', severity: 'high', url: 'https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB4127' },
        { title: 'Deepfake Protection', desc: 'The TAKE IT DOWN Act now makes it a federal crime (up to 2 years) to create or share AI-generated intimate images without consent. Extra penalties for content depicting minors.', severity: 'positive', url: 'https://www.congress.gov/bill/119th-congress/senate-bill/21' },
        { title: 'Reduced Addictive Features', desc: 'Regulations limiting notifications, autoplay, and infinite scroll improve digital wellbeing.', severity: 'positive', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB764' },
        { title: 'Data Access Rights', desc: 'Can request data companies hold about you under new transparency laws. Colorado AI Act adds algorithmic discrimination protections.', severity: 'positive', url: 'https://leg.colorado.gov/bills/sb24-205' },
    ],
    teacher: [
        { title: 'Student Data Privacy', desc: 'COPPA 2.0 and state laws increase protections for student data in educational tech.', severity: 'positive', url: 'https://www.ftc.gov/news-events/news/2024/01/ftc-seeks-updates-childrens-online-privacy-protection-rule' },
        { title: 'AI in Grading Systems', desc: 'New regulations (IL wellness act, CA TFAIA) require transparency if AI grades student work. Texas RAIGA requires healthcare AI disclosure.', severity: 'medium', url: 'https://www.ilga.gov/legislation/publicacts/fulltext.asp?Name=103-0808' },
        { title: 'Facial Recognition in Schools', desc: 'Washington and Massachusetts laws restrict facial recognition in education settings.', severity: 'positive', url: 'https://app.leg.wa.gov/billsummary?BillNumber=1071&Initiative=false&Year=2019' },
        { title: 'Algorithmic Bias Requirements', desc: 'Schools must audit algorithms for discrimination under new state laws. Colorado AI Act (effective June 2026) adds impact assessment requirements.', severity: 'medium', url: 'https://www.congress.gov/bill/117th-congress/house-bill/6570' },
    ],
    business: [
        { title: 'Federal vs State Regulatory Conflict', desc: 'Dec 2025 Executive Order aims to preempt state AI laws, but DOJ challenges pending. Companies face conflicting federal innovation-first and state consumer-protection approaches.', severity: 'high', url: 'https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/' },
        { title: 'State Compliance Patchwork', desc: 'CA TFAIA, TX RAIGA, and CO AI Act all effective in 2026 with different requirements. 38 states passed AI legislation in 2025.', severity: 'high', url: 'https://leg.colorado.gov/bills/sb24-205' },
        { title: 'TAKE IT DOWN Act Compliance', desc: 'Platforms must establish NCII notice-and-removal processes by May 19, 2026. FTC enforcement for non-compliance.', severity: 'medium', url: 'https://www.congress.gov/bill/119th-congress/senate-bill/21' },
        { title: 'BIPA Liability Risk', desc: 'Illinois BIPA and similar laws create major liability for facial recognition or biometric collection.', severity: 'high', url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3004' },
    ],
    creator: [
        { title: 'AI-Generated Content Disclosure', desc: 'New laws require clear labeling of AI-generated content you publish. CA TFAIA requires frontier model transparency.', severity: 'medium', url: 'https://www.congress.gov/bill/118th-congress/house-bill/4349' },
        { title: 'Deepfake Protections Strengthened', desc: 'TAKE IT DOWN Act (federal law) criminalizes nonconsensual AI deepfakes. Platforms must remove within 48 hours.', severity: 'positive', url: 'https://www.congress.gov/bill/119th-congress/senate-bill/21' },
        { title: 'Platform Liability Changes', desc: 'Federal preemption push may change state-by-state content rules. FCC considering federal AI disclosure standard.', severity: 'medium', url: 'https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/' },
        { title: 'Algorithm Access Reduced', desc: 'Net impact of state laws means less algorithmic reach and recommendation visibility.', severity: 'high', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB764' },
    ],
    healthcare: [
        { title: 'AI Healthcare Transparency Required', desc: 'Illinois wellness act and Texas RAIGA require informed consent and disclosure for AI in medical decisions.', severity: 'positive', url: 'https://www.ilga.gov/legislation/publicacts/fulltext.asp?Name=103-0808' },
        { title: 'Algorithmic Bias Audits', desc: 'Healthcare providers must audit AI systems for discrimination. Colorado AI Act (June 2026) adds high-risk AI impact assessments.', severity: 'positive', url: 'https://www.congress.gov/bill/117th-congress/house-bill/6570' },
        { title: 'Patient Data Rights', desc: 'HIPAA plus new state laws strengthen patient data privacy protections.', severity: 'positive', url: 'https://www.hhs.gov/hipaa/index.html' },
        { title: 'Federal vs State Tension', desc: 'White House EO 14281 targets disparate-impact liability while state laws build algorithmic discrimination frameworks. Creates compliance uncertainty.', severity: 'medium', url: 'https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/' },
    ],
    journalist: [
        { title: 'Deepfake Accountability', desc: 'TAKE IT DOWN Act (federal law, May 2025) establishes criminal liability for nonconsensual synthetic media. Protects against AI-generated fake news attribution.', severity: 'positive', url: 'https://www.congress.gov/bill/119th-congress/senate-bill/21' },
        { title: 'Frontier AI Transparency', desc: 'CA TFAIA requires frontier developers to publish safety frameworks and report incidents. Enables better journalism on AI risks.', severity: 'positive', url: 'https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB53' },
        { title: 'Platform Moderation Rules', desc: 'KOSA and state laws may limit misinformation tools and fact-checking reach. Federal preemption adds uncertainty.', severity: 'medium', url: 'https://www.congress.gov/bill/118th-congress/senate-bill/1693' },
        { title: 'AI Training Data Access', desc: 'Debates on copyright for AI training affect journalism archives and data access.', severity: 'medium', url: 'https://githubcopilotlitigation.com/' },
    ],
    developer: [
        { title: 'Multi-State Compliance Burden', desc: 'CA TFAIA (frontier models), TX RAIGA (all AI), CO AI Act (high-risk) create different compliance frameworks across states. 38 states passed AI laws in 2025.', severity: 'high', url: 'https://leg.colorado.gov/bills/sb24-205' },
        { title: 'Federal Preemption Uncertainty', desc: 'Dec 2025 EO aims to override state AI laws but faces legal challenges from 20+ state AGs. Creates uncertainty about which rules apply.', severity: 'high', url: 'https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/' },
        { title: 'Frontier Model Requirements', desc: 'CA TFAIA requires safety frameworks, incident reporting, and whistleblower protections for models >10^26 operations. Up to $1M per violation.', severity: 'medium', url: 'https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB53' },
        { title: 'Biometric Tool Restrictions', desc: 'BIPA and similar laws make facial recognition development risky without explicit consent. TX RAIGA adds biometric identifier limitations.', severity: 'high', url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3004' },
    ],
    privacy: [
        { title: 'BIPA Momentum Growing', desc: 'Illinois BIPA model expanding to NY, PA, others; biometric privacy becoming standard.', severity: 'positive', url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3004' },
        { title: 'State vs Federal Battle', desc: 'Dec 2025 EO creates DOJ AI Litigation Task Force to challenge state AI privacy laws. 20+ state AGs pushing back. Outcome determines privacy landscape.', severity: 'high', url: 'https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/' },
        { title: 'Lobbying Influence Massive', desc: 'Big Tech spent $50M+ on federal lobbying in first 9 months of 2025. Super PACs (Leading the Future, ATEP) spending $100M+ to oppose regulation.', severity: 'high', url: 'https://www.opensecrets.org/dark-money' },
        { title: 'EU Model Spreading', desc: 'GDPR and EU AI Act emerging as global standards. Phase 2 enforcement begins April 2026. US may face pressure to harmonize.', severity: 'positive', url: 'https://ec.europa.eu/info/law/artificial-intelligence-act-ai-act_en' },
    ],
    jobseeker: [
        { title: 'AI Hiring Discrimination', desc: 'Illinois law prohibits algorithmic hiring discrimination, gives you audit rights. Colorado AI Act (June 2026) adds high-risk AI protections for employment decisions.', severity: 'positive', url: 'https://www.ilga.gov/legislation/publicacts/fulltext.asp?Name=103-0804' },
        { title: 'Resume AI Screening', desc: 'No federal right yet to know if AI screened your resume. Some state laws emerging but federal preemption push adds uncertainty.', severity: 'high', url: 'https://www.eeoc.gov/laws/guidance/select-issues-assessing-adverse-impact-software-algorithms-and-artificial' },
        { title: 'Wage Theft via AI', desc: 'Emerging regulations on algorithmic wage and scheduling systems (gig economy).', severity: 'medium', url: 'https://www.dol.gov/agencies/whd/ai' },
        { title: 'Job Loss Notification', desc: 'NY law requires companies notify you if AI will replace your position.', severity: 'positive', url: 'https://www.nysenate.gov/legislation/bills/2023/S7623' },
    ],
    socialuser: [
        { title: 'Addictive Feature Limits', desc: 'Age-Appropriate Design Code (CA SB 764) and similar laws reduce recommendation algorithms.', severity: 'positive', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB764' },
        { title: 'Deepfake Removal Rights', desc: 'TAKE IT DOWN Act gives you the right to request removal of AI-generated intimate images from any platform within 48 hours.', severity: 'positive', url: 'https://www.congress.gov/bill/119th-congress/senate-bill/21' },
        { title: 'Age Verification Expanding', desc: '15+ states now require age verification for social media. Federal preemption could either unify or weaken protections.', severity: 'medium', url: 'https://www.ncsl.org/technology-and-communication/social-media-and-children' },
        { title: 'Content Moderation Transparency', desc: 'Algorithmic Accountability Act and CA TFAIA give right to understand content suppression and AI model behavior.', severity: 'positive', url: 'https://www.congress.gov/bill/117th-congress/house-bill/6570' },
    ],
    senior: [
        { title: 'Deepfake Scam Protection', desc: 'TAKE IT DOWN Act criminalizes AI deepfakes used for extortion or intimidation. Federal law protects against AI-generated scam calls and impersonation.', severity: 'positive', url: 'https://www.congress.gov/bill/119th-congress/senate-bill/21' },
        { title: 'Healthcare AI Transparency', desc: 'If using digital health, new laws (IL, TX RAIGA) require transparency about AI systems used in treatment.', severity: 'positive', url: 'https://www.ilga.gov/legislation/publicacts/fulltext.asp?Name=103-0808' },
        { title: 'Limited Digital Literacy Support', desc: 'Age verification and new tech requirements assume digital literacy that may challenge seniors.', severity: 'high', url: 'https://www.congress.gov/bill/118th-congress/house-bill/1060' },
        { title: 'Privacy Protection Growing', desc: 'State AI laws and Colorado AI Act provide algorithmic discrimination protections. EU model spreading globally.', severity: 'positive', url: 'https://leg.colorado.gov/bills/sb24-205' },
    ],
    rights: [
        { title: 'Federal-State Showdown', desc: 'Dec 2025 EO targets state AI consumer protections. DOJ AI Litigation Task Force challenges anti-discrimination laws. 20+ state AGs fighting back — could reach Supreme Court.', severity: 'high', url: 'https://www.whitehouse.gov/presidential-actions/2025/12/eliminating-state-law-obstruction-of-national-artificial-intelligence-policy/' },
        { title: 'Biometric Ban Progress', desc: 'EU bans government facial recognition; US states following; ACLU litigation winning. But federal preemption may undermine state protections.', severity: 'positive', url: 'https://artificialintelligenceact.eu/' },
        { title: 'Industry Capture Risk High', desc: 'Big Tech spent $50M+ on lobbying in 9 months of 2025. Super PACs spending $100M+ to shape AI policy. Leading the Future (a16z, OpenAI) and ATEP (Meta) targeting state elections.', severity: 'high', url: 'https://www.opensecrets.org/dark-money' },
        { title: 'Disparate Impact Under Threat', desc: 'EO 14281 directs agencies to deemphasize disparate-impact liability. Colorado AI Act built on preventing algorithmic discrimination faces direct conflict.', severity: 'high', url: 'https://leg.colorado.gov/bills/sb24-205' },
    ],
};

module.exports = impactData;
