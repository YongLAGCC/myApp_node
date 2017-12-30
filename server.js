    const express = require("express"); 
    const bodyParser = require('body-parser');
    const users = require("./routes/users"); 
    const app = express(); 

    app
    .use(bodyParser.json())// use postman: raw. (type json format {"name":"yong"})
    .use(bodyParser.urlencoded({extended:false})) //use postman: urllencoded(key:name, value:yong)
    .use("/users",users) 
   
    app.listen(3000); 