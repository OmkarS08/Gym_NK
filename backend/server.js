const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const authRoutes = require('./routes/authRoutes');
const memberRoutes = require('./routes/memberRoutes');
const activityLog  = require('./routes/activityRoutes');
const dashboard = require('./routes/dashboardRoutes');
const staffMember = require('./routes/staffMemberRoutes');
const steamBath = require('./routes/steamBathRoutes');
const package = require('./routes/packageRoutes');
const app = express();
app.use(cors());
app.use(express.json());



// Routes
app.use('/auth', authRoutes);
app.use('/members', memberRoutes);
app.use('/activityLog',activityLog);
app.use('/dashboard',dashboard)
app.use('/staffMember',staffMember);
app.use('/steamBath',steamBath);
// app.use('/transaction',Money);
app.use('/package',package);
// Start server
app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
