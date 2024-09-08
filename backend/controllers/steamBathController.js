const db = require('../config/db');


const addSteamBath = (req, res) => {
   const { members, date, time } = req.body;
 
   // Join the members array into a single string separated by commas or any delimiter
   const membersString = members.join(', ');
 
   // Insert the membersString into the database along with the date and time
   const sql = `INSERT INTO steam (Steam_members, Steam_date, Steam_time) VALUES (?, ?, ?)`;
   db.query(sql, [membersString, date, time], (err, data) => {
     if (err) {
       console.error("Error inserting data:", err);
       return res.status(500).json(`Error in Backend: ${err}`);
     } else {
       return res.json("Success");
     }
   });
 };
 

const getSteamData = (req,res)=>{

   const sql = `SELECT steam_id, Steam_members, DATE_FORMAT(Steam_date, '%d-%M-%Y') as Steam_date, Steam_time FROM steam WHERE steam_delete_flag!= 1
      ORDER BY Steam_date ASC`;

   db.query(sql,(err,data)=>{
      if (err) {
         return res.json(`Error in Backend + ${err}`);
     }
     else {
         return res.json(data);
     }
   })
}

const deleteSteam = (req,res)=>{
   const id = req.params.id;
   const sql = `UPDATE steam SET steam_delete_flag = '1' WHERE steam_id =${id}`;
   db.query(sql, (err, data) => {
       if (err) {
           return res.json("Error in backedn");
       }
       else {
           return res.json(data);
       }
   })
}

module.exports={addSteamBath,getSteamData,deleteSteam};