const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 3000

app.use(bodyParser.urlencoded({extended : true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    bmi = (weight/(height*height));

    res.send("your Bmi is "+ bmi);

    console.log(req.body);
    
});

app.listen(port, function(){
  console.log("Example app listening on port "+ port);
})