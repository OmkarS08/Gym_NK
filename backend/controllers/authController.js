const db = require('../config/db');
const bodyParser = require('body-parser');

const login = (req, res) => {
    console.log(req.body.username, req.body.password)
    const sql = "SELECT * FROM login WHERE `username` = ? AND `password` = ?";
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) {
            return res.json({ status: 'error', message: 'Database error' });
        }
        if (data.length > 0) {
            return res.json({ status: 'success', userId: data[0].id, message: 'Login successful' ,userName :data[0].username });
        } else {
            return res.json({ status: 'error', message: 'Invalid credentials' });
        }
    });
}

module.exports = { login };
