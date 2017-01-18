angular.module('reactorNews', ['ui.router', 'posts'])

.config(function($stateProvider, $urlRouterProvider) {
  console.log('hello from congi');
  $urlRouterProvider.otherwise('/home');

  var mainState = {
    name: 'posts',
    url: '/home',
    templateUrl: './main.html',
    controller: 'MainController'
  };

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: './about.html',
    controller: 'aboutController'
  };

  $stateProvider.state(mainState);
  $stateProvider.state(aboutState);
});