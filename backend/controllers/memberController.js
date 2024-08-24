const db = require('../config/db');
const calculateEndDate = require('../utils/dateUtil')
const { format } = require('date-fns');

const addMember = (req, res) => {
    const { name, age, package, startDate, gender, mobile, payment } = req.body
    console.log('name:' + name, age, package, startDate, gender)
    const endDate = calculateEndDate(startDate, Number(package))
    const sql = 'INSERT INTO `members` (`name`, `age`, `gender`, `mobile`, `package`, `startDate`, `endDate`, `status`,`paymentMethod`, `delete_flag`) VALUES (?, ?, ?, ?, ?, ?, ?, 0 ,?, 0) '
    db.query(sql, [name, age, gender, mobile, package, startDate, endDate, payment], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        else {
            return res.json("Success");
        }
    })
}

const deleteMember = (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE members SET delete_flag = '1' WHERE id =${id}`;
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json("Success");
    });
}

const getMember = (req, res) => {
    const sql = `SELECT id, name, age, gender, DATE_FORMAT(endDate, '%d-%M-%Y') as endDate ,mobile,DATE_FORMAT(startDate, '%Y-%m-%d') as startDate, paymentMethod ,package
    FROM members 
    WHERE Delete_flag != '1'
    ORDER BY member_time_stamp DESC `

    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        else {
            return res.json(data);
        }
    })
}

const updateMember = (req, res) => {
    const id = req.params.id;
    const { name, age, package, startDate, gender, mobile, payment } = req.body
    const endDate = calculateEndDate(startDate, Number(package))
    const sql = 'UPDATE `members` SET `name` = ?, `age` = ?, `gender` = ?, `mobile` = ?, `package` = ?, `startDate` = ?, `endDate` = ?, `status` = 0, `paymentMethod` = ?, `delete_flag` = 0 WHERE `id` = ?';
    db.query(sql, [name, age, gender, mobile, package, startDate, endDate, payment, id], (err, data) => {
        if (err) {
            return res.json("Error");
        } else {
            return res.json("Success");
        }
    });


}

const packageEnding = (req , res) =>{
    const sql = `
        SELECT 
            name, 
            mobile, 
            DATE_FORMAT(endDate, '%d-%M-%Y') as endDate,
            DATEDIFF(endDate, NOW()) AS days_left
        FROM 
            members
        WHERE 
            DATEDIFF(endDate, NOW()) <= 7 
            AND DATEDIFF(endDate, NOW()) > 0
            AND Delete_flag != '1'
    `
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        else {
            return res.json(data);
        }
    })
}


const packageExpired = (req,res) =>{
    const sql = `SELECT 
            name, 
            mobile, 
            DATE_FORMAT(endDate, '%d-%M-%Y') as endDate,
            DATEDIFF(endDate, NOW()) AS days_left
        FROM 
            members
        WHERE 
            DATEDIFF(endDate, NOW()) <= 0 
            AND Delete_flag != '1'`
            db.query(sql, (err, data) => {
                if (err) {
                    return res.json("Error");
                }
                else {
                    return res.json(data);
                }
            })
}

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

const getOnlyMember = (req,res) =>{
    const sql = `SELECT name as value, name as label  FROM members WHERE Delete_flag != '1'`
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        else {
            return res.json(data);
        }
    })
}

module.exports = { addMember, deleteMember, getMember, updateMember,packageEnding,packageExpired,staffMember,getOnlyMember }