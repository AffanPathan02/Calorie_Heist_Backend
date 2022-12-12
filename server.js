const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const fs = require("fs");
const  authRoutes = require('./routes/auth');

//app
const app = express()

// db



const uri = 'mongodb://localhost:27017/'
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(uri,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })





// middlewares

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({credentials:true}));



//routes middleware

fs.readdirSync('./routes').map(
    (r) => app.use("/api",require("./routes/" + r)));



// port
const port = 3001;
app.listen(port, () => console.log("Server started"));




