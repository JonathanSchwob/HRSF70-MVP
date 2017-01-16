var app = angular.module('reactorNews', []);

app.controller('MainController', function($scope) {
  $scope.posts = [
    {title: 'Hack Reactor awards $1.3 million in scholarship funds', upvotes: 5},
    {title: 'Makersquare brand changes to Hack Reactor', upvotes: 6},
    {title: 'Font ligatures, fad or future?', upvotes: -3},
  ];
});