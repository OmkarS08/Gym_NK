const db = require('../config/db');

const memberCount = (req, res) => {
    const sql = `SELECT 
    gender, 
    COUNT(*) AS gender_count 
FROM 
    members 
WHERE 
    delete_flag != 1 
GROUP BY 
    gender 

UNION ALL 

SELECT 
    'Total' AS gender, 
    COUNT(*) AS gender_count 
FROM 
    members 
WHERE 
    delete_flag != 1;
 `

    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error in Backend");
        }
        else {
            return res.json(data);
        }
    })
}

const BarChart = (req, res) => {
    const sql = `SELECT 
    DATE_FORMAT(startDate, '%Y') AS year, 
     DATE_FORMAT(startDate, '%M') AS month, 
    COUNT(*) AS member_count 
FROM 
    members 
WHERE 
    delete_flag != 1  
GROUP BY 
    month 
ORDER BY 
    month`
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error in Backend");
        }
        else {
            return res.json(data);
        }
    })
}

const PieChart = (req, res) => {
    sql = `SELECT package, COUNT(*) as package_count
    FROM members
    WHERE Delete_flag = 0 
    GROUP BY package;`
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error in Backend");
        }
        else {
            return res.json(data);
        }
    })
}


module.exports = { memberCount, BarChart,PieChart }