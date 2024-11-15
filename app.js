const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())


mongoose.connect('mongodb://localhost:27017')
const con = mongoose.connection

if (con.on) {
    try {
        console.log('database connected suceesfully!!!');
        
    } catch (error) {
        console.log(error);  
    }
}

const usersRouter = require("./routes/users")
app.use("/users", usersRouter)

const port = 3000
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
    
})