const express = require('express');
const { addMember, deleteMember, getMember } = require('../controllers/memberController');

const router = express.Router();

router.post('/AddMember', addMember);
router.post('/deleteMember/:id', deleteMember);
router.get('/getMember', getMember);

module.exports = router;
