const db = require('../config/db');
const calculateEndDate = require('../utils/dateUtil')
const { format } = require('date-fns');

const addMember = (req, res) => {
    const { name, age, package, startDate, gender, mobile, payment } = req.body
    const endDate = calculateEndDate(startDate, Number(package))
    const sql = 'INSERT INTO `members` (`name`, `age`, `gender`, `mobile`, `package`, `startDate`, `endDate`,`paymentMethod`, `delete_flag`) VALUES (?, ?, ?, ?, ?, ?, ? ,?, 0) '
    db.query(sql, [name, age, gender, mobile, package, startDate, endDate, payment], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        else {
            const newMemberId = data.insertId;

            return res.json({ message: "Success", memberId: newMemberId });
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
    const sql = `SELECT 
    m.id, 
    m.name, 
    m.age, 
    m.gender, 
    DATE_FORMAT(m.endDate, '%d-%M-%Y') AS endDate,
    m.mobile, 
    DATE_FORMAT(m.startDate, '%d-%M-%Y') AS startDate1,
    DATE_FORMAT(m.startDate, '%Y-%m-%d') AS startDate,
    m.paymentMethod, 
    m.package,
    t.transaction_id, 
    t.transaction_package_amount, 
    t.transaction_amount_paid, 
    t.transaction_amount_due 
FROM 
    members m
JOIN 
    transaction t ON m.id = t.transaction_person_name
WHERE 
    m.Delete_flag != '1'
ORDER BY 
    m.member_time_stamp DESC `

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
    const sql = 'UPDATE `members` SET `name` = ?, `age` = ?, `gender` = ?, `mobile` = ?, `package` = ?, `startDate` = ?, `endDate` = ?, `paymentMethod` = ?, `delete_flag` = 0 WHERE `id` = ?';
    db.query(sql, [name, age, gender, mobile, package, startDate, endDate, payment, id], (err, data) => {
        if (err) {
            return res.json("Error");
        } else {
            return res.json("Success");
        }
    });


}

const packageEnding = (req, res) => {
    const sql =
        `SELECT 
    m.name, 
    m.mobile, 
    DATE_FORMAT(m.endDate, '%d-%M-%Y') AS endDate,
    DATEDIFF(m.endDate, NOW()) AS days_left,
    t.transaction_amount_due
FROM 
    members m
JOIN 
    transaction t ON m.id = t.transaction_person_name
WHERE 
    DATEDIFF(m.endDate, NOW()) <= 7 
    AND DATEDIFF(m.endDate, NOW()) > 0
    AND m.Delete_flag != '1'`

    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        else {
            return res.json(data);
        }
    })
}


const packageExpired = (req, res) => {
    const sql = `SELECT 
    m.name, 
    m.mobile, 
    DATE_FORMAT(m.endDate, '%d-%M-%Y') AS endDate,
    DATEDIFF(m.endDate, NOW()) AS days_left,
    t.transaction_amount_due
FROM 
    members m
JOIN 
    transaction t ON m.id = t.transaction_person_name
WHERE 
    DATEDIFF(m.endDate, NOW()) <= 0 
    AND m.Delete_flag != '1';`
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        else {
            return res.json(data);
        }
    })
}



const getOnlyMember = (req, res) => {
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

module.exports = { addMember, deleteMember, getMember, updateMember, packageEnding, packageExpired, getOnlyMember }