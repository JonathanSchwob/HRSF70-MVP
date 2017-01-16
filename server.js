var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

//connect to db
mongoose.connect('mongodb://localhost/myapp');

//give connection & schema a var
var db = mongoose.connection;
var Schema = mongoose.Schema;

//listen for db connection success or error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected');
});

//create schema design
var postSchema = new Schema(
  {
    title: String,
    upvotes: Number,
    link: String
  }
);

//compile schema into model
var PostModel = mongoose.model('Post', postSchema);

app.use(express.static(__dirname));
app.listen(4000, console.log('listening on port 4000'));

exports.db = db;
exports.PostModel = PostModel;