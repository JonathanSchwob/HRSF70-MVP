var app = angular.module('reactorNews', []);

app.controller('MainController', ($scope, $http) => {
  $scope.posts = [];

  //grabs data from db on refresh
  $http.get('/posts').then((res) => {
    $scope.posts = res.data;
  }, (err) => {
    if (err) {
      console.log('this is the err on $http get: ', err);
    }
  });
  
  $scope.addPost = () => {
    //doesn't allow user to submit empty posts
    if (!$scope.title || $scope.title === '') {
      return;
    }
    
    var postContents = {
      title: $scope.title,
      link: $scope.link,
      upvotes: 0
    };
    $scope.title = '';
    $scope.link = '';

    //give new post to db
    $http.post('/posts', postContents).then(function(res) {
      console.log('done posting the post, here it is: ', res);
      $scope.posts.push(res.data);
    }, function(err) {
      if (err) {
        console.log('could not post, here is err: ', err);
      }
    });
  };

  $scope.incrementUpvotes = (post) => {
    console.log('post we want to update: ', post);
    $http.post('/upvote', post).then((res) => {
      post.upvotes = res.data.upvotes;
      console.log('this is res.data: ', res.data);
    }, (err) => {
      if (err) {
        console.log('could not upvote, here is err: ', err);
      }
    });
  };
});