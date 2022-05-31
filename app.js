const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const app = express();


///////userroutes/////
const signUp = require("./routes/userRoute")
const signIn= require("./routes/userRoute")

const cors= require('cors');

app.use(cors())
app.use(express.json());


////////user////
app.use("/api", signUp)////////http://localhost:5000/api/signUp
app.use("/api", signIn)////////http://localhost:5000/api/signIn

/////////database connection
mongoose.connect("mongodb+srv://jiolocation1:jiolocation12345@cluster0.gkjyq.mongodb.net/?retryWrites=true&w=majority").then(data=>{
    console.log("Server is connected to the database")
}).catch(err=>{
    console.log("connection is fails")
})

app.listen(PORT,()=>{
    console.log("Server is running at port "+PORT)
})