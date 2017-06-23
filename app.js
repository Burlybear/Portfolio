var express = require('express');
// 1. sets up express. got to terminal and do npm init then when a file shows up do npm install express --save
var app = express();
// 2. sets up app

app.get('/', function (req, res) {
  console.log("working")
  res.render('index.ejs')
// 10. says when someone gets on to server send them this ejs file
})
// 6. the function is using the arguments request and response to tell the page what to do.
// 7. refresh the page in chrome
// 8. make a html that is 'name'.ejs to get the html working with the server

app.set('view engine','ejs')
app.set('views','./veiws')
// 9. this sets the link to the ejs file up
// 11. set has to go before listen
// 12. got to terminal and hit control c
// 13. type in npm install --save ejs
// 14. type in nodemon to restart the server

app.listen(3000, function () {
  console.log("server is on")
})
// 3. app is listening on port 3000
// 4. type nodemon name of file into terminal to get the server up and running.
// 5. got to localhost:3000 to get to the server page