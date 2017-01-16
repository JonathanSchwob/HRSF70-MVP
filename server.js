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
  console.log('we are connected to mongoose');
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
var Post = mongoose.model('Post', postSchema);

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
  Post.find((err, posts) => {
    if (err) { return err; }
    res.send(posts);
    res.end();
  });
});

app.listen(4000, console.log('listening on port 4000'));

exports.db = db;
exports.post = Post;