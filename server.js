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
db.once('open', () => {
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

//listen for get request to populate client with posts on refresh
app.get('/posts', (req, res) => {
  Post.find((err, posts) => {
    if (err) { return err; }
    res.send(posts);
    res.end();
  });
});

app.post('/posts', (req, res) => {
  Post.create(req.body, (error, doc) => {
    if (error) {
      console.log('errored on populating starter posts: ', error);
    } else {
      console.log('this is the doc: ', doc);
    }
  });
});

app.post('/upvote', (req, res) => {
  Post.findOne({title: req.body.title}
            req.body
  , (err, doc) => {
    // console.log('this is the doc: ', doc);
    // console.log('this is the req body: ', req.body);
    if (err) {
      console.log('server: err on upvote - ', err);
    } else {
      console.log('THE MODEL', doc);
      doc.upvotes++;
      doc.save(function(err, updatedModel) {
        console.log('err', err);
        console.log('updated model', updatedModel);
        res.status(200).send(updatedModel.upvotes.toString());
      });
      console.log('server: success upvote - ', doc);
    } 
  });
});

app.listen(4000, console.log('listening on port 4000'));

exports.db = db;
exports.post = Post;