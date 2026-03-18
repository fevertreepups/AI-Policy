const express = require('express');
const router = express.Router();

const API_BASE = 'https://api.congress.gov/v3';
const API_KEY = process.env.CONGRESS_API_KEY || '';

// Simple in-memory cache (5 minute TTL)
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000;

function getCached(key) {
    const entry = cache.get(key);
    if (entry && Date.now() - entry.time < CACHE_TTL) {
        return entry.data;
    }
    cache.delete(key);
    return null;
}

function setCache(key, data) {
    cache.set(key, { data, time: Date.now() });
    // Prune old entries
    if (cache.size > 100) {
        const oldest = [...cache.entries()].sort((a, b) => a[1].time - b[1].time)[0];
        cache.delete(oldest[0]);
    }
}

async function fetchCongress(endpoint) {
    if (!API_KEY) {
        return { error: 'Congress.gov API key not configured. Set CONGRESS_API_KEY environment variable.', demo: true };
    }

    const cacheKey = endpoint;
    const cached = getCached(cacheKey);
    if (cached) return cached;

    const url = `${API_BASE}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${API_KEY}&format=json`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Congress.gov API error: ${response.status}`);
    }

    const data = await response.json();
    setCache(cacheKey, data);
    return data;
}

// GET /api/congress/bill/:congress/:type/:number
router.get('/bill/:congress/:type/:number', async (req, res) => {
    try {
        const { congress, type, number } = req.params;
        const data = await fetchCongress(`/bill/${congress}/${type}/${number}`);

        if (data.demo) {
            return res.json({
                demo: true,
                message: data.error,
                hint: 'Get a free API key at https://api.congress.gov/sign-up/'
            });
        }

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/congress/bills/recent - recent AI-related bills
router.get('/bills/recent', async (req, res) => {
    try {
        const data = await fetchCongress('/bill?limit=20&sort=updateDate+desc');

        if (data.demo) {
            return res.json({
                demo: true,
                message: data.error,
                recentUpdates: [
                    { date: '2026-03-17', bill: 'S.1693', title: 'KOSA Markup Hearing scheduled', type: 'hearing' },
                    { date: '2026-03-15', bill: 'H.R.5765', title: 'NDAA AI provisions implementation update', type: 'update' },
                    { date: '2026-03-12', bill: 'S.833', title: 'Deepfake Accountability Act co-sponsors added', type: 'cosponsor' },
                    { date: '2026-03-10', bill: 'H.R.6570', title: 'Algorithmic Accountability Act committee report filed', type: 'report' },
                    { date: '2026-03-08', bill: 'S.1207', title: 'TAKE IT DOWN Act implementation guidance released', type: 'guidance' },
                ]
            });
        }

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/congress/member/:bioguideId
router.get('/member/:bioguideId', async (req, res) => {
    try {
        const data = await fetchCongress(`/member/${req.params.bioguideId}`);
        if (data.demo) {
            return res.json({ demo: true, message: data.error });
        }
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/congress/status - API health check
router.get('/status', (req, res) => {
    res.json({
        apiKeyConfigured: !!API_KEY,
        cacheSize: cache.size,
        endpoint: API_BASE,
        note: API_KEY
            ? 'Congress.gov API is configured and ready'
            : 'Set CONGRESS_API_KEY env var to enable live data. Get a free key at https://api.congress.gov/sign-up/'
    });
});

module.exports = router;
