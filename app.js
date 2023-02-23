const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", 'ejs');
app.get("/", function(req, res){
    var today = new Date();
    var options = {
      weekday: "long",
      day : "numeric",
      month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay:day});

});
app.post("/", function(req, res){
  var item = req.body.list_item;
  console.log(item);
  res.render("list", {list_item:item});
});

app.listen(3000, function(){
    console.log("The server is running at port 3000");
});