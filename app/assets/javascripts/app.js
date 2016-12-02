var app;
app = angular.module('taskApp', ['ui.bootstrap', 'ngResource', 'ui.router']);

// CSRF(Cross-site Request Forgery)token
app.config(function($httpProvider){
  var authToken;
  authToken = $("meta[name=\"csrf-token\"]")
  .attr("content");
  return $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
});

app.config(function($statePrivider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  return $statePrivider.state('home',{
    url: '/home',
    templateUrl: '/templates/home.html'
  }).state('index', {
    url: '/',
    templateUrl: '/templates/index.html'
  }).state('index.dashboard', {
    url: 'dashboard',
    templateUrl: '/templates/dashboard.html',
    controller: 'DashboardCtrl'
  }).state('index.about', {
    url: 'about',
    templateUrl: '/templates/about.html'
  }).state('index.todolist', {
    url: 'todo_lists/:list_id',
    templateUrl: '/templates/todo_list.html',
    controller: 'TodoListCtrl'
  });
});

// AngularJS can work with turbolinks
$(document).on('page:load', function(){
  return $('[ng-app]').each(function(){
    var module;
    module = $(this).attr('ng-app');
    return angular.bootstrap(this, [module]);
  });
});
