var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var route = require("./route/route")
var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","jade");

app.use(express.static(path.join(__dirname,"public")));

app.get("/",function(req,res){
	res.render("index",{
		title:"Ajax Demo"
	});
});
app.use("/search",route);

if(app.get("env")==="development"){
	app.locals.pretty=true;
}
app.listen(port,function(){
	console.log("server start at the port "+port);
});
