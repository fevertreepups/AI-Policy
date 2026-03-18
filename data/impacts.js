const impactData = {
    parent: [
        { title: 'Age Verification Laws', desc: 'Bills like KOSA and state laws restrict kids access to social media, limiting screen time but raising privacy concerns.', severity: 'high', url: 'https://www.congress.gov/bill/118th-congress/senate-bill/1693' },
        { title: 'COPPA 2.0 Protections', desc: 'Stricter children\'s online privacy rules mean better data protection for kids under 13.', severity: 'positive', url: 'https://www.ftc.gov/news-events/news/2024/01/ftc-seeks-updates-childrens-online-privacy-protection-rule' },
        { title: 'Parental Controls Required', desc: 'Platform design requirements now mandate better parental monitoring tools.', severity: 'positive', url: 'https://www.congress.gov/bill/117th-congress/house-bill/7845' },
        { title: 'Algorithmic Recommendation Limits', desc: 'CA SB 764 restricts addictive recommendation algorithms targeting minors.', severity: 'positive', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB764' },
    ],
    teen: [
        { title: 'Age Verification Friction', desc: 'Multiple state laws (TX, FL, UT, OH) require age verification, making social media access harder.', severity: 'high', url: 'https://capitol.texas.gov/BillLookup/History.aspx?LegSess=88R&Bill=HB4127' },
        { title: 'Digital Privacy Rights', desc: 'New laws give you more control over personal data and algorithmic recommendations.', severity: 'positive', url: 'https://leg.colorado.gov/bills/sb23-202' },
        { title: 'Reduced Addictive Features', desc: 'Regulations limiting notifications, autoplay, and infinite scroll improve digital wellbeing.', severity: 'positive', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB764' },
        { title: 'Data Access Rights', desc: 'Can request data companies hold about you under new transparency laws.', severity: 'positive', url: 'https://leg.colorado.gov/bills/sb24-205' },
    ],
    teacher: [
        { title: 'Student Data Privacy', desc: 'COPPA 2.0 and state laws increase protections for student data in educational tech.', severity: 'positive', url: 'https://www.ftc.gov/news-events/news/2024/01/ftc-seeks-updates-childrens-online-privacy-protection-rule' },
        { title: 'AI in Grading Systems', desc: 'New regulations (IL wellness act, SB 1047) require transparency if AI grades student work.', severity: 'medium', url: 'https://www.ilga.gov/legislation/publicacts/fulltext.asp?Name=103-0808' },
        { title: 'Facial Recognition in Schools', desc: 'Washington and Massachusetts laws restrict facial recognition in education settings.', severity: 'positive', url: 'https://app.leg.wa.gov/billsummary?BillNumber=1071&Initiative=false&Year=2019' },
        { title: 'Algorithmic Bias Requirements', desc: 'Schools must audit algorithms for discrimination under new state laws.', severity: 'medium', url: 'https://www.congress.gov/bill/117th-congress/house-bill/6570' },
    ],
    business: [
        { title: 'Compliance Costs Increasing', desc: 'Age verification, algorithmic accountability, and biometric laws create significant compliance burden.', severity: 'high', url: 'https://www.congress.gov/bill/117th-congress/house-bill/6570' },
        { title: 'BIPA Liability Risk', desc: 'Illinois BIPA and similar laws create major liability for facial recognition or biometric collection.', severity: 'high', url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3004' },
        { title: 'Data Practice Restrictions', desc: 'COPPA 2.0 and state laws restrict what data you can collect from minors.', severity: 'medium', url: 'https://www.ftc.gov/news-events/news/2024/01/ftc-seeks-updates-childrens-online-privacy-protection-rule' },
        { title: 'Algorithm Disclosure Required', desc: 'Algorithmic Accountability Act and state laws require impact assessments and disclosure.', severity: 'medium', url: 'https://www.congress.gov/bill/117th-congress/house-bill/6570' },
    ],
    creator: [
        { title: 'AI-Generated Content Disclosure', desc: 'New laws require clear labeling of AI-generated content you publish.', severity: 'medium', url: 'https://www.congress.gov/bill/118th-congress/house-bill/4349' },
        { title: 'Algorithm Access Reduced', desc: 'Net impact of state laws means less algorithmic reach and recommendation visibility.', severity: 'high', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB764' },
        { title: 'Platform Liability Changes', desc: 'KOSA limits platform liability but doesn\'t directly affect creators.', severity: 'low', url: 'https://www.congress.gov/bill/118th-congress/senate-bill/1693' },
        { title: 'Deepfake Protections', desc: 'New deepfake laws protect you if someone uses AI to create synthetic versions of your work.', severity: 'positive', url: 'https://www.congress.gov/bill/118th-congress/senate-bill/833' },
    ],
    healthcare: [
        { title: 'AI Healthcare Transparency Required', desc: 'Illinois wellness act and new laws require informed consent for AI in medical decisions.', severity: 'positive', url: 'https://www.ilga.gov/legislation/publicacts/fulltext.asp?Name=103-0808' },
        { title: 'Algorithmic Bias Audits', desc: 'Healthcare providers must audit AI systems for discrimination by protected class.', severity: 'positive', url: 'https://www.congress.gov/bill/117th-congress/house-bill/6570' },
        { title: 'Patient Data Rights', desc: 'HIPAA+new laws strengthen patient data privacy protections.', severity: 'positive', url: 'https://www.hhs.gov/hipaa/index.html' },
        { title: 'AI Tool Liability', desc: "Debates ongoing about medical AI liability; unclear who's responsible if AI system errs.", severity: 'medium', url: 'https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/' },
    ],
    journalist: [
        { title: 'Deepfake Accountability', desc: 'New laws establish liability for non-consensual deepfakes, protecting you from synthetic news.', severity: 'positive', url: 'https://www.congress.gov/bill/118th-congress/senate-bill/833' },
        { title: 'Algorithmic Transparency', desc: 'Algorithmic Accountability Act gives you right to understand why content is suppressed.', severity: 'positive', url: 'https://www.congress.gov/bill/117th-congress/house-bill/6570' },
        { title: 'Platform Moderation Rules', desc: 'KOSA and state laws may limit misinformation tools and fact-checking reach.', severity: 'medium', url: 'https://www.congress.gov/bill/118th-congress/senate-bill/1693' },
        { title: 'AI Training Data Access', desc: 'Debates on copyright for AI training affect journalism archives and data access.', severity: 'medium', url: 'https://githubcopilotlitigation.com/' },
    ],
    developer: [
        { title: 'Compliance Burden Major', desc: 'Age verification, algorithmic accountability, biometric laws create significant dev/testing requirements.', severity: 'high', url: 'https://www.congress.gov/bill/117th-congress/house-bill/6570' },
        { title: 'AI Training Restrictions', desc: 'Copyright uncertainty on AI training data affects model development and open source.', severity: 'medium', url: 'https://githubcopilotlitigation.com/' },
        { title: 'Transparency Requirements', desc: 'Must disclose algorithmic systems, impact assessments, and audit trails under new laws.', severity: 'medium', url: 'https://cga.ct.gov/2024/TOB/SB/2024SB-00002-R01-SB.htm' },
        { title: 'Biometric Tool Restrictions', desc: 'BIPA and similar laws make facial recognition development risky without explicit consent.', severity: 'high', url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3004' },
    ],
    privacy: [
        { title: 'BIPA Momentum Growing', desc: 'Illinois BIPA model expanding to NY, PA, others; biometric privacy becoming standard.', severity: 'positive', url: 'https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3004' },
        { title: 'Dark Money Investigation', desc: 'March 2026 $2B lobbying study reveals industry influence over privacy regulations.', severity: 'positive', url: 'https://www.opensecrets.org/dark-money' },
        { title: 'Data Broker Expansion Risk', desc: 'Data brokers still largely unregulated; selling training data to AI companies.', severity: 'high', url: 'https://www.ftc.gov/legal-library/browse/cases-proceedings?search_api_fulltext=data+broker' },
        { title: 'EU Model Spreading', desc: 'GDPR and EU AI Act emerging as global standards; US may adopt similar scope.', severity: 'positive', url: 'https://ec.europa.eu/info/law/artificial-intelligence-act-ai-act_en' },
    ],
    jobseeker: [
        { title: 'AI Hiring Discrimination', desc: 'Illinois law prohibits algorithmic hiring discrimination, gives you audit rights.', severity: 'positive', url: 'https://www.ilga.gov/legislation/publicacts/fulltext.asp?Name=103-0804' },
        { title: 'Resume AI Screening', desc: 'No legal right yet to know if AI screened your resume or why you were rejected.', severity: 'high', url: 'https://www.eeoc.gov/laws/guidance/select-issues-assessing-adverse-impact-software-algorithms-and-artificial' },
        { title: 'Wage Theft via AI', desc: 'Emerging regulations on algorithmic wage and scheduling systems (gig economy).', severity: 'medium', url: 'https://www.dol.gov/agencies/whd/ai' },
        { title: 'Job Loss Notification', desc: 'NY law requires companies notify you if AI will replace your position.', severity: 'positive', url: 'https://www.nysenate.gov/legislation/bills/2023/S7623' },
    ],
    socialuser: [
        { title: 'Addictive Feature Limits', desc: 'Age-Appropriate Design Code (CA SB 764) and similar laws reduce recommendation algorithms.', severity: 'positive', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB764' },
        { title: 'Data Collection Restrictions', desc: 'COPPA 2.0 and new laws limit what platforms can collect about your behavior.', severity: 'positive', url: 'https://www.ftc.gov/news-events/news/2024/01/ftc-seeks-updates-childrens-online-privacy-protection-rule' },
        { title: 'Age Verification Expanding', desc: '15+ states now require age verification; identity/privacy tradeoff unknown.', severity: 'medium', url: 'https://www.ncsl.org/technology-and-communication/social-media-and-children' },
        { title: 'Content Moderation Transparency', desc: 'Algorithmic Accountability Act gives right to understand content suppression.', severity: 'positive', url: 'https://www.congress.gov/bill/117th-congress/house-bill/6570' },
    ],
    senior: [
        { title: 'Scam Protection Emerging', desc: 'Some states considering AI deepfake regulations to protect against scams.', severity: 'positive', url: 'https://www.congress.gov/bill/118th-congress/senate-bill/833' },
        { title: 'Healthcare AI Transparency', desc: 'If using digital health, new laws require transparency about AI systems used.', severity: 'positive', url: 'https://www.ilga.gov/legislation/publicacts/fulltext.asp?Name=103-0808' },
        { title: 'Limited Digital Literacy Support', desc: 'Age verification and new tech requirements assume digital literacy that may challenge seniors.', severity: 'high', url: 'https://www.congress.gov/bill/118th-congress/house-bill/1060' },
        { title: 'Privacy Protection Strong', desc: 'GDPR-like laws emerging; better data protection overall.', severity: 'positive', url: 'https://leg.colorado.gov/bills/sb24-205' },
    ],
    rights: [
        { title: 'Algorithmic Discrimination Now Illegal', desc: 'Algorithmic Accountability Act (H.R.6570) creates federal prohibition on algorithmic discrimination.', severity: 'positive', url: 'https://www.congress.gov/bill/117th-congress/house-bill/6570' },
        { title: 'Biometric Ban Progress', desc: 'EU bans government facial recognition; US states following; ACLU litigation winning.', severity: 'positive', url: 'https://artificialintelligenceact.eu/' },
        { title: 'Industry Capture Risk High', desc: 'March 2026 study reveals $2B in dark money lobbying by tech companies shaping regulations.', severity: 'high', url: 'https://www.opensecrets.org/dark-money' },
        { title: 'Enforcement Authority Weak', desc: 'Many laws lack sufficient enforcement resources; FTC underfunded for AI oversight.', severity: 'high', url: 'https://www.ftc.gov/about-ftc/bureaus-offices/office-technology' },
    ],
};

module.exports = impactData;
