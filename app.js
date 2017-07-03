
// 22. can just run npm install after cloning the github file to install dependancies!!

var express = require('express');
// 1. sets up express. got to terminal and do npm init then when a file shows up do npm install express --save
var app = express();
// 2. sets up app

var bodyParser = require('body-parser')
// 24. type in npm install --save body-parser

app.use(bodyParser.urlencoded({
  extended: true
}));
// 25. cleans up massive object from ajax so it is useable.

var message = "hi"

app.get('/', function (req, res) {
  console.log("working")
  var response = ""
  res.render('index.ejs', { response})
// 10. says when someone gets on to server send them this ejs file
})
// 6. the function is using the arguments request and response to tell the page what to do.
// 7. refresh the page in chrome
// 8. make a html that is 'name'.ejs to get the html working with the server



app.post('/', function (req, res) {
  console.log(req.body)
  response = req.body.userResponse
  res.render('index.ejs', {response})
// 23. setting up rout for post to the server
})

app.set('view engine','ejs')
app.set('views','./veiws')
// 9. this sets the link to the ejs file up
// 11. set has to go before listen
// 12. got to terminal and hit control c
// 13. type in npm install --save ejs
// 14. type in nodemon to restart the server

app.use(express.static('public'))
// 15. listen goes last
// 16. public (folder) has all the static files (javascript and css) and express.static tells it where to find static files.
// 17.just type file name not public/file name because of line 34.

// res.render('index.ejs', {message})
// 18. sends the variable message to the index.ejs file.
// 19. would replace line 10 of res.render('index.ejs')
// 20. can only render 1 thing per get.
// 21. can have multiple get files (routs)


app.listen(3000, function () {
  console.log("server is on")
})
// 3. app is listening on port 3000
// 4. type nodemon name of file into terminal to get the server up and running.
// 5. got to localhost:3000 to get to the server page


// COMMIT