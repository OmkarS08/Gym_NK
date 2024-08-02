const db = require('../config/db');

const login = (req, res) => {
    console.log(req.body.username, req.body.password)
    const sql = "SELECT * FROM login WHERE `username` = ? AND `password` = ?";
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        }
        else {
            return res.json("Fail");
        }

    })
}

module.exports = { login };