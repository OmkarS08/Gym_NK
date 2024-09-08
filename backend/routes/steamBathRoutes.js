const express = require('express');
const router = express.Router();
const {addSteamBath,getSteamData,deleteSteam } = require('../controllers/steamBathController');

//get 

router.get('/getSteamData',getSteamData)

//post 

router.post('/addSteamBath',addSteamBath)
router.post('/deleteSteam/:id',deleteSteam);


module.exports = router;