const express = require('express');
const { addMember, deleteMember, getMember,updateMember } = require('../controllers/memberController');

const router = express.Router();

router.post('/AddMember', addMember);
router.post('/deleteMember/:id', deleteMember);
router.get('/getMember', getMember);
router.post('/updateMember/:id',updateMember)
module.exports = router;
