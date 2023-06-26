const express = require('express')
const router = express.Router();



const routerControllers = require('../controllers/usersController');


router.get('/allusers', routerControllers.GetUsers);
router.post('/register', routerControllers.Register);
router.post('/login', routerControllers.Login);
router.get('/logout', routerControllers.Logout);


module.exports = router;