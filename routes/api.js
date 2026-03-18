const express = require('express');
const router = express.Router();

const billsData = require('../data/bills');
const impactData = require('../data/impacts');
const politicianData = require('../data/politicians');
const lobbyistData = require('../data/lobbyists');
const calendarEvents = require('../data/calendar');

// GET /api/bills - all bills with optional filters
router.get('/bills', (req, res) => {
    let results = [...billsData];
    const { level, category, status, search } = req.query;

    if (level && level !== 'all') {
        results = results.filter(b => b.level.toLowerCase() === level.toLowerCase());
    }
    if (category && category !== 'all') {
        results = results.filter(b => b.category.toLowerCase() === category.toLowerCase());
    }
    if (status && status !== 'all') {
        results = results.filter(b => b.status.toLowerCase() === status.toLowerCase());
    }
    if (search) {
        const q = search.toLowerCase();
        results = results.filter(b =>
            b.name.toLowerCase().includes(q) ||
            b.bill.toLowerCase().includes(q) ||
            b.summary.toLowerCase().includes(q)
        );
    }

    res.json({ count: results.length, bills: results });
});

// GET /api/bills/:id
router.get('/bills/:id', (req, res) => {
    const bill = billsData.find(b => b.id === parseInt(req.params.id));
    if (!bill) return res.status(404).json({ error: 'Bill not found' });
    res.json(bill);
});

// GET /api/bills/stats
router.get('/bills/stats', (req, res) => {
    const stats = {
        total: billsData.length,
        byLevel: {},
        byCategory: {},
        byStatus: {},
    };
    billsData.forEach(b => {
        stats.byLevel[b.level] = (stats.byLevel[b.level] || 0) + 1;
        stats.byCategory[b.category] = (stats.byCategory[b.category] || 0) + 1;
        stats.byStatus[b.status] = (stats.byStatus[b.status] || 0) + 1;
    });
    res.json(stats);
});

// GET /api/impacts/:persona
router.get('/impacts/:persona', (req, res) => {
    const persona = req.params.persona.toLowerCase();
    const impacts = impactData[persona];
    if (!impacts) {
        return res.status(404).json({
            error: 'Persona not found',
            available: Object.keys(impactData)
        });
    }
    res.json({ persona, impacts });
});

// GET /api/impacts - all personas
router.get('/impacts', (req, res) => {
    res.json({
        personas: Object.keys(impactData),
        data: impactData
    });
});

// GET /api/politicians
router.get('/politicians', (req, res) => {
    let results = [...politicianData];
    const { party, stance } = req.query;

    if (party) {
        results = results.filter(p => p.party === party.toUpperCase());
    }
    if (stance) {
        results = results.filter(p => p.stance === stance.toLowerCase());
    }

    res.json({ count: results.length, politicians: results });
});

// GET /api/lobbyists
router.get('/lobbyists', (req, res) => {
    const { sort } = req.query;
    let results = [...lobbyistData];

    if (sort === 'spend') {
        results.sort((a, b) => b.spendNum - a.spendNum);
    } else if (sort === 'lobbyists') {
        results.sort((a, b) => b.lobbyistCount - a.lobbyistCount);
    }

    res.json({
        count: results.length,
        totalSpend: results.reduce((sum, l) => sum + l.spendNum, 0),
        lobbyists: results
    });
});

// GET /api/calendar
router.get('/calendar', (req, res) => {
    let results = [...calendarEvents];
    const { month, year, type } = req.query;

    if (month && year) {
        const monthStr = String(month).padStart(2, '0');
        results = results.filter(e => e.date.startsWith(`${year}-${monthStr}`));
    }
    if (type && type !== 'all') {
        results = results.filter(e => e.type === type.toLowerCase());
    }

    results.sort((a, b) => a.date.localeCompare(b.date));
    res.json({ count: results.length, events: results });
});

// GET /api/search - unified search across all data
router.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q || q.length < 2) {
        return res.status(400).json({ error: 'Query must be at least 2 characters' });
    }

    const query = q.toLowerCase();
    const results = {
        bills: billsData.filter(b =>
            b.name.toLowerCase().includes(query) ||
            b.summary.toLowerCase().includes(query)
        ).slice(0, 5),
        politicians: politicianData.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.desc.toLowerCase().includes(query)
        ).slice(0, 5),
        lobbyists: lobbyistData.filter(l =>
            l.company.toLowerCase().includes(query) ||
            l.stance.toLowerCase().includes(query)
        ).slice(0, 5),
    };

    res.json(results);
});

module.exports = router;
