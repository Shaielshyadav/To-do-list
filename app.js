const express = require("express");
const bodyParser = require("body-parser");
var items = ["Read book", "Coding", "learning"];
var workList = [];

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set("view engine", 'ejs');
app.get("/", function(req, res){
    var today = new Date();
    var options = {
      weekday: "long",
      day : "numeric",
      month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay:day, newItems:items});

});
app.get("/work", function(req, res){
  res.render("list", {kindOfDay:"Work", newItems:workList});
});

app.post("/", function(req, res){
  var item = req.body.list_item;
  if (req.body.list="Work"){
    workList.push(item)
    res.redirect("/work")
  } else{
    items.push(item);
    console.log(item);
    res.redirect("/");
  }
});

app.get("/about", function(req, res){
  res.render("about");
});



app.listen(3000, function(){
    console.log("The server is running at port 3000");
});