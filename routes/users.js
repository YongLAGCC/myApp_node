const express = require("express");
const router = express.Router(); 

router
    .get('/:id/:name', (req, res)=>{
        console.log(req.params); 
        res.send("ok");
    })
  

    module.exports = router; 