const db = require('../config/db');

const Activity = (req,res) =>{
   
    const { user_id, activity } = req.body;

    const sql = 'INSERT INTO activitylog (activity_user_id, activity) VALUES (?, ?)';
    db.query(sql, [user_id, activity], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).send('Activity logged successfully');
    });
}

const getActivity = (req,res) =>{
    const sql = `SELECT activity_id,activity, DATE_FORMAT(activitylog.time_stamp, '%Y-%m-%d %H:%i:%s') as time_stamp,login.username 
    FROM activitylog JOIN login ON activitylog.activity_user_id = login.id 
    ORDER BY activitylog.time_stamp DESC`
    db.query(sql,(err,result)=>{
        if(err) return res.status(500).send(err);
        res.status(200).send(result);
    })
}


module.exports = {Activity, getActivity}