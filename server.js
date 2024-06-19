//import express
import express from "express";
import  userRouter from "./src/features/user/user.routes.js";

//create server
const server = express();


//middleware to parse json data and put in inside a body request
server.use(express.json());

//
server.use('/api/users',userRouter);



//default request handler
server.get("/",(req,res) => {
    res.send("welcome to the API for Authentication");
});


//specify PORT
server.listen(3200, ()=> {
    
console.log("server is running at 3200");
});
