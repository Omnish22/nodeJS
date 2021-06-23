const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

var items = ["Eating","Coding","Sleeping"];

app.get('/', function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();

  var options = {
    weekday:"long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US",options)


  res.render("list", {kindOfDay: day , listItem:items});
});

app.post("/",function(req,res){
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");

});

app.listen(3000, function() {

});
