var exp = require("express");
var app = exp();

app.use(exp.static(__dirname +  "/public"));

app.get('/players/:lang/:name',function(req, res){
	var query = req.query;
	console.log("query was " + JSON.stringify(query));
	console.log("help code  was " + req.params.lang);
	res.end("thanks");

});

var port = process.env.POST || 4000;



app.listen(port,function() {
	console.log("server is listening on port " + port);

});


