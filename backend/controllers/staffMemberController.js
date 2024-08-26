const db = require('../config/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const staffMember  = (req,res)=>{
    const sql = `SELECT id , username ,admin FROM login WHERE delete_flag_login != 1`
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        else {
            return res.json(data);
        }
    })
}

const addStaffMember = (req, res) => {
    const { name, password, role } = req.body;

    if (!name || !password || !role) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Hash the password before storing it
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ error: 'Error hashing password' });
        }

        const query = 'INSERT INTO login (username, password, admin) VALUES (?, ?, ?)';
        db.query(query, [name, hashedPassword, role], (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }
            res.status(200).json({ message: 'Staff member added successfully' });
        });
    });
};

const updateStaff = (req,res) =>{
    const id = req.params.id;
    const sql = `UPDATE login SET admin = '1' WHERE id =${id}`;
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error in backedn");
        }
        else {
            return res.json(data);
        }
    })
}

const deleteStaffMember =(req,res) =>{
    const id = req.params.id;

    const sql = `UPDATE login SET delete_flag_login = '1' WHERE id =${id}`;
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error in backedn");
        }
        else {
            return res.json(data);
        }
    })
}

module.exports = { staffMember, addStaffMember,deleteStaffMember,updateStaff }