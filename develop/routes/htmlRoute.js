var express = require('express')
var router = express.Router()
const path = require ('path')

router.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"../../../index.html"));
});

router.get("/notes", (req, res) =>{
    res.sendFile(path.join(__dirname,"../../../index.html"));
});

router.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname,"../../../index.html"));
});




module.exports = router