const express = require('express'); 
const bodyParser = require("body-parser")
const cors = require('cors')
const userRouter = require('./routes/userRoute.js')
const app = express(); 
const PORT = 3000; 

app.use(bodyParser.json())
app.use(cors())

app.use("/api/users" , userRouter)
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 

