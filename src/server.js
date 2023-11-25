//###################################Backend##################################################
//calling express js 
import express from "express";
//creating app server using express() function
let app = express();

//declaring http port
var HTTP_PORT=8080;
//starting the server
app.listen(HTTP_PORT,()=>{
    //printing port 
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT));
})

//root endpoint
app.get("/",(req,res,next)=>{
    res.json({"message":"Ok"});
})

//default response for other requests
app.use(function(req,res){
    res.status(404);
})