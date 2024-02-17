const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();


var MongoClient = require('mongodb').MongoClient;
var dbURL =  'mongodb://localhost:27017/';

const userSchema = new mongoose.Schema({
    userName: String,
    userPassword: String,
    userBio: String,
});

const userModel = mongoose.model('users', userSchema);

router.get('/', (req, res, next)=>{
    const user = {
        Name: req.body.userName,
    }

    let validUser = (user) =>{
        //  read db function to see if requesting user exists in the db else res. status is set to 500  //
    }

    let responseObject = {
        userName: "PeterLenon",
        userBio: "I am from Zim",
    }
    
    res.status(200).json({
        user: responseObject.userName,
        userBio: responseObject.userBio,
    });
});


router.post('/', (req, res, next)=>{
    const user ={
        userName: req.body.name,
        userPassword: req.body.password,
        userBio: req.body.userBio
    };

    let postToDatabase = (user)=>{
        mongoose.connect(database);
        let data = new userModel({userName: user.userName, userPassword: user.userPassword, userBio: user.userBio})
        data.save();
    }
    postToDatabase(user);

    res.status(200).json({
        message: "Success!",
    })
});


router.patch('/', (req, res, next) =>{
    const user = {
        userName : req.body.userName,
        userBio: req.body.userBio,
    }

    let updatetoDatabase = (user) =>{

    }

    res.status(200).json({
        message: "Success!",
    });
});


router.delete('/', (req, res, next) =>{
    const request ={
        auth: req.body.auth_token,
        userName: req.body.userName,
    }
    let deleteToDatabase = (request)=>{
    }
    res.status(200).json({
        message: "Success!",
    });
});

module.exports = router;