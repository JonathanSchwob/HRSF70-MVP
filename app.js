var app = angular.module('reactorNews', []);

app.controller('MainController', ($scope) => {
  $scope.posts = [
    {title: 'Hack Reactor awards $1.3 million in scholarship funds', upvotes: 5},
    {title: 'Makersquare brand changes to Hack Reactor', upvotes: 6},
    {title: 'Font ligatures, helpful or annoying?', upvotes: -3},
  ];
  
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