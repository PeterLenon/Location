const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    
    res.status(200).json({
    });
});


router.post('/', (req, res, next)=>{
    let postToDatabase = ()=>{
        //write to database
    }

    res.status(200).json({
        message: "Success!",
    })
});


router.patch('/', (req, res, next) =>{
    
    let updatetoDatabase = (user) =>{

    }

    res.status(200).json({
        message: "Success!",
    });
});


router.delete('/', (req, res, next) =>{

    let deleteToDatabase = (request)=>{

    }
    res.status(200).json({
        message: "Success!",
    });
});

module.exports = router;
