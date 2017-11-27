var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('.'));

var polls=0;

app.get('/api/fetchInfo', function(request, response){
	console.log(polls, polls<200);
	if(polls < 200){
		console.log("sending...empty");
		polls++;
		response.send({});
	}
	else{
		console.log("sending...object");
		response.send({
			status: 'success'
		});
		polls = 0;
	}
});

app.get('/', function(request, response){
	response.sendFile(path.__currentDir + '/index.html');
});

app.listen(8000, function(){
	console.log("Node.js server started on port 8000...");
});
