//###################################Backend##################################################
//calling express js 
import express, { Router } from 'express';
//importing database to server
import db from './database.ts';
//creating app server using express() function
let app = express();



//root endpoint
app.get("/",(req,res,next)=>{
    res.json({"message":"Ok"});
})

//declaring http port
var HTTP_PORT=8000;
//starting the server
app.listen(HTTP_PORT,()=>{
    //printing port 
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT));
})



//default response for other requests
app.use(function(req,res){
    res.status(404);
})