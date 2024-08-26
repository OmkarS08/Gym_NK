const express = require('express');
const router = express.Router();
const {staffMember, addStaffMember,deleteStaffMember,updateStaff} = require('../controllers/staffMemberController')

router.get('/getStaffMember',staffMember);

router.post('/addStaffMember',addStaffMember);
router.post('/deleteStaffMember/:id',deleteStaffMember)
router.post('/updateStaff/:id',updateStaff)


module.exports = router;