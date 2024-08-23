const express = require('express');
const {memberCount,BarChart} = require ('../controllers/dashboardController');

const router = express.Router();

router.get('/memberCount',memberCount);
router.get('/BarChart',BarChart)

module.exports = router;