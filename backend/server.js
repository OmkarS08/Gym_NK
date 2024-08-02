const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const memberRoutes = require('./routes/memberRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/members', memberRoutes);

// Start server
app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
