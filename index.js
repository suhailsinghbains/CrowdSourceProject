var express = require('express');
var app = express();
var port = process.env.PORT;
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/', function (req, res) {
    res.render("index.html");
})
app.listen(port || 4006);
