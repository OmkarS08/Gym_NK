const express = require('express');
const { addMember, deleteMember, getMember,updateMember,packageEnding } = require('../controllers/memberController');

const router = express.Router();

router.post('/AddMember', addMember);
router.post('/deleteMember/:id', deleteMember);
router.post('/updateMember/:id',updateMember)

router.get('/getMember', getMember);
router.get('/packageEnding',packageEnding)
module.exports = router;
