const db = require('../config/db');

const getPackage = (req,res)=>{

    sql ='SELECT * FROM package '
    db.query(sql,(err,data)=>{
        if (err) {
           return res.json(`Error in Backend + ${err}`);
       }
       else {
           return res.json(data);
       }
     })
}

const updatePackage = (req,res) =>{
    const { package_id, amount } = req.body;
    const sql = `UPDATE package SET packagePrice = ? WHERE package_id = ?`;
  
    db.query(sql, [amount, package_id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server Error');
      } else {
        res.status(200).send('Success');
      }
    });

}

const getPackageAmount = (req,res)=>{
    const packageMonth = req.params.month;
    const sql = `SELECT packagePrice FROM package WHERE packageMonth = ${packageMonth}`;
    db.query(sql, (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Server Error');
        } else {
          res.status(200).json(data);
        }
      });
}


module.exports = {getPackage,updatePackage,getPackageAmount};