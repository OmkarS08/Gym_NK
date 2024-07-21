const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const { addMonths, parseISO, format } = require('date-fns');
const app = express();
app.use(cors());
app.use(express.json());

function formatSql(query, values) {
    return mysql.format(query, values);
    // const formattedQuery = formatSql(sql, [name, age, gender,9156788998, package, startDate, endDate]);
      
    // console.log(`Executing Query: ${formattedQuery}`);
  }
  function calculateEndDate(startDate, numberOfMonths) {
    // Parse the start date if it's in string format
    const parsedStartDate = parseISO(startDate);
    
    // Add the number of months to the start date
    const endDate = addMonths(parsedStartDate, numberOfMonths);
    
    // Format the end date as a string (optional, adjust format as needed)
    return format(endDate, 'yyyy-MM-dd');
  }
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"nk"
})

app.post('/login',(req,res)=>{
    console.log(req.body.username,req.body.password)
    const sql = "SELECT * FROM login WHERE `username` = ? AND `password` = ?";
    db.query(sql, [req.body.username,req.body.password], (err,data)=>{
        if(err){
            return res.json("Error");
        }
       if(data.length > 0)
       {
        return res.json("Success");
       }
       else {
        return res.json("Fail");
       }

    })
})


app.post('/AddMember',(req,res)=>{
    const {name,age,package,startDate,gender} = req.body
    console.log('name:'+name,age,package,startDate,gender)

   
       const endDate = calculateEndDate(startDate,Number(package))

    const sql = 'INSERT INTO `members` (`name`, `age`, `gender`, `mobile`, `package`, `startDate`, `endDate`, `status`) VALUES (?, ?, ?, ?, ?, ?, ?, NULL) '
    
    db.query(sql,[name,age,gender,915623867,package,startDate,endDate],(err,data)=>{
        if(err){
            return res.json("Error");
        }
       else {
        return res.json("Success");
       }

    })
})

app.get('/getMemeber',(req,res)=>{
    const sql = 'SELECT name ,age ,gender, `endDate` FROM members'
    db.query(sql,(err,data)=>{
        if(err){
            return res.json("Error");
        }
       else {
        return res.json(data);
       }
    })
})

app.listen(8081, ()=>{
    console.log("listening");
})
