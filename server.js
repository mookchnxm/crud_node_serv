const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.listen(80);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));

console.log('Server Started');

var Sports = [{id: 1,name: 'Basketball'},{id: 2,name: 'Football'},{id: 3,name: 'Swim'}];
var id = Sports.length + 1 ;


app.get('/Sports',(req,res)=>{
	res.send(Sports);
});



app.post('/Sports',(req,res)=>{
	var name = req.body.name;

	Sports.push({
		id: id++,
		name: name
	});

	res.send(Sports);
});



app.put('/Sports/:id', (req,res)=> {
	var id = req.params.id,
		name = req.body.name;


	Sports.map(Sport => {
		if(Sport.id == id)
			Sport.name = name ;
	});

	res.send(Sports);
});




app.delete('/Sports/:id', (req,res)=> {
	var id = req.params.id,
		tmp  = [];

	Sports.map(Sport => {
		if(Sport.id != id)
			tmp.push(Sport);
	});

	Sports = tmp ;

	res.send(Sports);
});