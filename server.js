const express= require('express');
var cors = require('cors');
const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const Users=require('./api/users');
const Obstacle=require('./api/obstacle');

const app= express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/users",Users);
app.use("/api/obstacle",Obstacle);

mongoose.connect(
    'ruta',
   
    {useNewUrlParser:true},
    (err,res)=>{
        err && console.log("Error conectando a la bd");
        app.listen(4000,()=>{
            console.log("Servidor corriendo en http://localhost:4000");
        });
    }
);
