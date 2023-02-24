const express = require("express");
const bodyParser = require("body-parser");
var items = ["Read book", "Coding", "learning"];

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
app.post("/", function(req, res){
  var item = req.body.list_item;
  items.push(item);
  console.log(item);
  res.redirect("/");
});

app.listen(3000, function(){
    console.log("The server is running at port 3000");
});