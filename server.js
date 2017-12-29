    const express = require("express"); 
    const users = require("./routes/users"); 
    const app = express(); 

    app.use(users); 

    app.listen(3000); 