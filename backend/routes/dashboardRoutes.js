const express = require('express');
const {memberCount,BarChart, PieChart} = require ('../controllers/dashboardController');
const router = express.Router();

router.get('/memberCount',memberCount);
router.get('/BarChart',BarChart);
router.get('/PieChart',PieChart)

module.exports = router;