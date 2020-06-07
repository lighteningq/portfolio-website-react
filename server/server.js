const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const expressip = require('express-ip');

// db
var Datastore = require('nedb')


db = {};
db.visitors = new Datastore({ filename: './visitors.db', autoload: true });
db.comments = new Datastore({ filename: './comments.db', autoload: true });


const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 
// inside middleware handler
app.use(expressip().getIpInfoMiddleware);

// if(process.env.NODE_ENV ==='production'){
	app.use(express.static('build'))
	app.get('/*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'build','index.html'))
	})
// }


/****
ProjectName : [

		{proj1 : [

				{ pic1: [
					{ criticName: '',
					  comment: ,
					  star: ,
					},{
	

					}

				]

				pic2: [
					{ criticName: '',
					  comment: ,
					  star: ,
					},{
	

					}
					



				]


		]



		]},{
	
			proj2 :
		}
		 
]


****/

app.get('/add-visitor-info',(req, res) => {
	var ip = req.ipInfo
	console.log('type of client ip is: ', typeof ip);
	// add ip to db

	db.visitors.insert(ip, function (err, newDoc) {   // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
  	console.log('add visitor error is ', err)
  	// db.visitors.find({ ip: '127.0.0.1' }, function (err, docs) {
  	// console.log(docs)
// });
  	console.log('error is', err)
});



	res.send('200 ok')
});



app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});


app.post('/critique-content', (req, res) => {
  	console.log("server recieved a request from critique-content: ", req.body);
  	console.log('type of : ' , typeof req.body)
  	// store data in DB
	// var key =req.body.pictureKey
	// console.log(key)
	db.comments.insert(req.body, function(err,newDoc){
		// db.comments.find(req.body, function(err, docs){
		// 	console.log(docs)
		// })
	})

  res.send(
    `I received your POST request. This is what you sent me: ${req.body}`,
  );

});

app.get('/show-comment', (req, res) => {
	var value = req.query.key
	console.log("query param is ",value)
	var data=''

	// get list of comments from DB
	db.comments.find({pictureKey: value.endsWith('.jpg') ? value: value+'.jpg' }, function(err,docs){
		console.log('db find comments: ', JSON.stringify(docs))
		//res=JSON.stringify(docs)
		res.json(docs)
		
	})
//	console.log('data is : ', data)

	//res.send(data);

});










app.get('/critique-login', (req, res) => {
	const html =`<!DOCTYPE html>
				  <html>
					<head>
					<title>Critic Login</title>

					</head>
					<body>
					<h3>Please Enter the Code to Access the Critique Mode ! </h3>
 					<form action="/critique">
  					<label for="fname">The Critics Access Code Is:</label><br>
  					<input type="text" id="fname" name="fname" placeholder="\I know I send it to you!\" ><br>
  					<input type="\submit" value="\Submit">
					</form> 

					</body>
					</html>`
//res.send({ head: 'Hello From Express' });
res.send(html);
});








app.listen(port, () => console.log(`Listening on port ${port}`));