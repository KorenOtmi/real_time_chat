const express = require('express');
// const dotenv = require('dotenv');
const cors = require('cors');

const usersRoutes = require('./routes/usersRoutes');
// const bodyParser = require('body-parser');



const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }))


app.use('/api', usersRoutes);




app.get('/', async (req, res) => {
    res.send('home')
});


// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});