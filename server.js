var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/myapp');

var db = mongoose.connection;
var Schema = mongoose.Schema;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected');
});

var postSchema = new Schema(
  {
    title: String,
    link: String
  }
);

var Post = mongoose.model('Post', postSchema);

app.use(express.static(__dirname));
app.listen(4000, console.log('listening on port 4000'));