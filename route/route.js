var express = require("express");
var router = express.Router();

var data = ["Angularjs","Bootstrap","Css3","Canvas","Django","Express","Gulp","Grunt","Html5","Ionic","Jquery","Node","Python"];
router.all("/keyword",function(req,res){
	var keyword = req.query.keyword;
	if (!keyword) {
		keyword = req.body.keyword;
	}
	var retlist = search(keyword);
	res.json(retlist);
});
function search(key){
	var ret=[];
	if(key){
		key = key.toLowerCase();
		for(var i in data){
			if(data[i].toLowerCase().indexOf(key)===0){
				ret.push(data[i]);
			}
		}
	}
	return ret;
};

module.exports = router;