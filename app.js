const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const cors = require('cors');
const path = require('path');



const app = express();

const db = require('./config/db').database;

//database connection

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => {
        console.log('Database is Connected Successfully')
    })
    .catch((err) =>{
        console.log('Unable to connect with the Database', err)
    });


    //definning the Port
    const port = process.env.PORT || 4000;

    //initialize cors middlewares
    app.use(cors());

    //initailize bodyParser middle ware
    app.use(bodyParser.json());


    //initialize public directory


    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'public/index.html'));
    // });

    app.get('/', (req, res) => {
        res.send('<h1>Bank account<h1>')
    });

    const bankRoutes = require('./routes/apis/bank')

    app.use('/bank', bankRoutes);

    app.listen(port, () => {
        console.log('Server Started on Port' , port)
    });
