const express = require('express');
const router = express.Router();
const {addSteamBath,getSteamData,deleteSteam } = require('../controllers/steamBathController');


router.post('/addSteamBath',addSteamBath)
router.get('/getSteamData',getSteamData)

router.post('/deleteSteam/:id',deleteSteam);
module.exports = router;