const db = require('../config/db');


const addTransaction = (req, res) => {
    const { transaction_person_name, transaction_package_amount, transaction_amount_paid, transaction_amount_due } = req.body;
    const sql = `INSERT INTO transaction 
    (transaction_person_name, transaction_package_amount, transaction_amount_paid, transaction_amount_due) VALUES (?, ?, ?, ?)`;
    db.query(sql, [transaction_person_name, transaction_package_amount, transaction_amount_paid, transaction_amount_due], (err, data) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json("Success");
        }
    });
}

const getTransaction = (req, res) => {
    sql = `SELECT 
    t.transaction_id, 
    t.transaction_person_name,
    t.transaction_package_amount,
    t.transaction_amount_paid,
    t.transaction_amount_due,
    DATE_FORMAT(t.transaction_time_stamp, '%Y-%m-%d %H:%i:%s') AS transaction_time_stamp,
    m.name AS member_name,
    m.package AS member_package ,
    DATE_FORMAT(m.endDate, '%d-%M-%Y') AS endDate
FROM 
    transaction t
JOIN 
    members m 
ON 
    t.transaction_person_name = m.id
ORDER BY 
	t.transaction_time_stamp DESC;;`

    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        else {
            return res.json(data);
        }
    })
}

const getCountTrans = (req, res) => {
    sql = `SELECT 
    SUM(t.transaction_amount_paid) AS total_amount_paid, 
    SUM(t.transaction_amount_due) AS total_amount_due, 
    SUM(t.transaction_package_amount) AS total_package_amount
FROM 
    transaction t`

    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        else {
            return res.json(data);
        }
    })
}
const updateTransaction = (req, res) => {
    const id = req.params.id;
    const { transaction_amount_paid, transaction_amount_due } = req.body;

    const sql = `UPDATE transaction 
                 SET transaction_amount_paid = ?, 
                     transaction_amount_due = ? 
                 WHERE transaction_id = ?`;

    db.query(sql, [transaction_amount_paid, transaction_amount_due, id], (err, result) => {
        if (err) {
            return res.json("Error");
        } else {
            return res.json("Success");
        }
    });
}

const updateTransactionMember = (req, res) => {
    const { transaction_id, transaction_paid, package_amount, transaction_amount_due } = req.body

    const sql = `UPDATE transaction 
    SET transaction_amount_paid = ?, 
        transaction_amount_due = ? ,
        transaction_package_amount= ?
    WHERE transaction_id = ?`;

    db.query(sql, [transaction_paid, transaction_amount_due, package_amount, transaction_id], (err, result) => {
        if (err) {
            return res.json("Error");
        } else {
            return res.json("Success");
        }
    });
}

module.exports = { addTransaction, getTransaction, getCountTrans, updateTransaction, updateTransactionMember };

