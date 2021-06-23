const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){

  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var weight= Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = (weight*10000)/(height*height);

  res.send("BMI is "+bmi.toFixed(2));
// res.send("wow");
});


app.listen(3000,()=>{
  console.log("Server is running...");
});
