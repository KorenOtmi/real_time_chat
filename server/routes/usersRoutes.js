const express = require('express');
const multer = require('multer');
const router = express.Router();



const DIR = './public/usersImages/';



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname.toLowerCase())
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


const routerControllers = require('../controllers/usersController');


router.get('/allusers', routerControllers.GetUsers);
router.get('/getUsers/:id', routerControllers.getUsersById);
router.post('/register', upload.single('UserImage'), routerControllers.Register);
router.post('/login', routerControllers.Login);
router.get('/logout', routerControllers.Logout);


module.exports = router;

