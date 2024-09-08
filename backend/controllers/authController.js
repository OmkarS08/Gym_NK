const db = require('../config/db');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const login = (req, res) => {
    const sql = "SELECT * FROM login WHERE `username` = ? AND delete_flag_login != '1' ";

    db.query(sql, [req.body.username], (err, data) => {
        if (err) {
            return res.json({ status: 'error', message: 'Database error' });
        }
        if (data.length > 0) {
            const user = data[0];


            // Compare the provided password with the stored hashed password
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err) {
                    console.log('Error comparing passwords:', err);
                    return res.json({ status: 'error', message: 'Error comparing passwords' });
                }
                if (isMatch) {
                    console.log('Passwords match');
                    return res.json({
                        status: 'success',
                        userId: user.id,
                        message: 'Login successful',
                        userName: user.username,
                        admin: user.admin
                    });
                } else {
                    return res.json({ status: 'error', message: 'Invalid credentials Password Did Not Match' });
                }
            });
        } else {
            return res.json({ status: 'error', message: 'Invalid credentials User Not Found' });
        }
    });
};


module.exports = { login };
