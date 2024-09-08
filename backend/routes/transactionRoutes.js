const express = require('express');
const { addTransaction ,getTransaction,getCountTrans ,updateTransaction,updateTransactionMember} = require('../controllers/transacationController');
const router = express.Router();


router.post('/addTranscation' , addTransaction);
router.post('/updateTransaction/:id', updateTransaction);
router.post('/updateTransactionMember',updateTransactionMember)
router.get('/getTransaction', getTransaction );

router.get('/getCountTrans',getCountTrans);

module.exports = router;
