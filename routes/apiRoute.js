var express = require('express');
var router = express.Router();
const store = require('../db/store');

// get
router.get("/notes",(req,res)=>{
 store.getNotes()
 .then((notes) =>{
     return res.json(notes);
 })

.catch((err)=>res.status(500).json(err));
});

// post
router.post("/notes",(req,res)=>{
store.addNote(req.body)
.then((note) =>
    res.json(note))



.catch((err)=>res.status(500).json(err))
});

// delete
router.delete("/notes/:id",(req,res)=>{
store.removeNote(req.params.id)
.then(() =>{
    res.json({
        ok: true
    })
})

.catch((err)=>res.status(500).json(err));
});



module.exports = router;