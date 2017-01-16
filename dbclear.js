var db = require('./server.js');
var database = db.db;
var post = db.post;

//drop previous table
console.log(database.collections);
database.collections['posts'].drop(function(err) {
  if (err) {
    console.log('error dropping table');
  } else {
    console.log('successfully dropped table');
  }
});

//starter posts
var posts = [
    {title: 'Hack Reactor awards $1.3 million in scholarship funds', upvotes: 5},
    {title: 'Makersquare brand changes to Hack Reactor', upvotes: 6},
    {title: 'Font ligatures, helpful or annoying?', upvotes: -3},
];

//populate db
for (var i = 0; i < posts.length; i++) {
  post.create(posts[i], function(error, doc) {
    if (error) {
      console.log('errored on populating starter posts: ', error);
    } else {
      console.log('this is the doc: ', doc);
    }
  });
}