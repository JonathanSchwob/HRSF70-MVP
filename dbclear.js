var db = require('./server.js');
var database = db.db;
var post = db.post;

//drop previous table
database.collections['posts'].drop((err) => {
  if (err) {
    console.log('error dropping table');
  } else {
    console.log('successfully dropped table');
  }
});

//starter posts
var posts = [
  {
    title: 'Hack Reactor awards $1.3 million in scholarship funds',
    upvotes: 5, 
    link: 'http://www.hackreactor.com/scholarships/'
  },
  {
    title: 'Makersquare brand shifts to Hack Reactor', 
    upvotes: 6,
    link: 'http://www.hackreactor.com/press-releases/hack-reactor-acquires-coding-school-makersquare'
  },
  {
    title: 'Fira-Code symbol ligatures, helpful or annoying?', 
    upvotes: -3
  },
];
//populate db
for (var i = 0; i < posts.length; i++) {
  post.create(posts[i], (error, doc) => {
    if (error) {
      console.log('errored on populating starter posts: ', error);
    } else {
      console.log('this is the doc: ', doc);
    }
  });
}