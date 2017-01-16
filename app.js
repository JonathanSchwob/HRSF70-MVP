var app = angular.module('reactorNews', []);

app.controller('MainController', ($scope, $http) => {
  $scope.posts = [];

  $http.get('/posts').then((res) => {
    $scope.posts = res.data;
  }, function(err) {
    if (err) {
      console.log('this is the err on $http get: ', err);
    }
  });
  
  $scope.addPost = () => {
    if (!$scope.title || $scope.title === '') {
      return;
    }
    $scope.posts.push({
      title: $scope.title,
      upvotes: 0,
      links: $scope.link});

    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = (post) => {
    post.upvotes++;
  };
});