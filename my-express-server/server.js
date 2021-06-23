const express = require("express");
const app = express();


app.get("/",function(request,response){
  // console.log(request);
  response.send("Hello World");
});

app.get("/contact",function(req,res){
  res.send("Contact me at: omnish@gamil.com");
});

app.get("/about",function(req,res){
  res.send("This page belongs to Omnish Kumar");
});

app.get("/hobbies",function(req,res){
  res.send("<ul><li>Coding</li><li>Cooking</li><li>Dancing</li><li>Listen Music</li>");
});

app.listen(3000,function(){
  console.log("server is running at 3000 port");
});
