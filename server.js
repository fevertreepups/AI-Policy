const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api', require('./routes/api'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/congress', require('./routes/congress'));

// Catch-all for SPA
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`AI Policy Tracker running on port ${PORT}`);
    console.log(`API: http://localhost:${PORT}/api/bills`);
    console.log(`Chat: http://localhost:${PORT}/api/chat`);
    console.log(`Congress: http://localhost:${PORT}/api/congress/status`);
});
