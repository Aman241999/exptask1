const http = require("http");
const express = require("express");
 const app = express();
 app.use((req,res,next)=>{
    console.log("in the middleware")
    next();//Allows the require to continue to the next middleware in line
 });

 app.use((req,res,next)=>{
    console.log("in another middleware!");
    res.send("<h1>Hello from Expresss!</h1>")
 });
 const server = http.createServer(app);
 server.listen(5000);