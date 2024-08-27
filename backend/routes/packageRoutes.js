const express = require('express');
const router = express.Router();
const {getPackage,updatePackage,getPackageAmount} = require('../controllers/packageController')

router.get('/getPackage',getPackage)
router.get('/getPackageAmount/:month',getPackageAmount)
router.post('/updateAmount',updatePackage);



module.exports = router;