const db = require('../config/db');
const calculateEndDate = require('../utils/dateUtil')
const { format } = require('date-fns');

const addMember = (req, res) => {
    const { name, age, package, startDate, gender, mobile } = req.body

    console.log('name:' + name, age, package, startDate, gender)

    const endDate = calculateEndDate(startDate, Number(package))

    const sql = 'INSERT INTO `members` (`name`, `age`, `gender`, `mobile`, `package`, `startDate`, `endDate`, `status`, `delete_flag`) VALUES (?, ?, ?, ?, ?, ?, ?, 0 , 0) '

    db.query(sql, [name, age, gender, mobile, package, startDate, endDate], (err, data) => {
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
    const sql = `SELECT id, name, age, gender, DATE_FORMAT(endDate, '%d-%M-%Y') as endDate
    FROM members 
    WHERE Delete_flag != '1'`
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        else {
            return res.json(data);
        }
    })
}

module.exports = {addMember,deleteMember,getMember}