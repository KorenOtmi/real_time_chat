const express = require('express')
const router = express.Router();



const routerControllers = require('../controllers/usersController');


router.get('/allusers', routerControllers.GetUsers);


module.exports = router;