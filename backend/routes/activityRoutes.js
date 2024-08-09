const express = require('express');
const {Activity,getActivity} = require ('../controllers/activityController')
const router = express.Router();


router.post('/addActivity',Activity);
router.get('/getActivity',getActivity)

module.exports = router;