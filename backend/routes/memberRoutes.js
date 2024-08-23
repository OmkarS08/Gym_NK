const express = require('express');
const { addMember, deleteMember, getMember,updateMember,packageEnding,packageExpired } = require('../controllers/memberController');

const router = express.Router();

router.post('/AddMember', addMember);
router.post('/deleteMember/:id', deleteMember);
router.post('/updateMember/:id',updateMember)

router.get('/getMember', getMember);
router.get('/packageEnding',packageEnding)
router.get('/packageExpired',packageExpired)
module.exports = router;
