var app;
app = angular.module('taskApp', [
  'ui.bootstrap',
  'ngResource',
  'ui.router',
  'ngMessages',
  'ng-token-auth']);

// CSRF(Cross-site Request Forgery)token
app.config(function($httpProvider){
  var authToken;
  authToken = $("meta[name=\"csrf-token\"]")
  .attr("content");
  return $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
});

app.config(function($authProvider){
  $authProvider.configure({
    apiUrl: '/api',
  });
});

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('registration', {
      url: '/sign_up',
      templateUrl: '/templates/registration.html',
      controller: 'UserCtrl'
    })

    .state('sign_in', {
      url: '/sign_in',
      templateUrl: '/templates/sign_in.html',
      controller: 'UserCtrl'
    })

    .state('home',{
      url: '/home',
      templateUrl: '/templates/home.html'
    })

    .state('about', {
      url: '/about',
      templateUrl: '/templates/about.html'
    })

    .state('user', {
      url: '/user',
      abstract: true,
      template: '<ui-view>',
      resolve: {
        auth: function($auth){
          return $auth.validateUser();
        }
      }
    })

    .state('user.dashboard', {
      url: 'dashboard',
      templateUrl: '/templates/dashboard.html',
      controller: 'DashboardCtrl'
    })

    .state('user.todolist', {
      url: 'todo_lists/:list_id',
      templateUrl: '/templates/todo_list.html',
      controller: 'TodoListCtrl'
    });
});

app.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('auth:login-success', function() {
    $location.path('/');
  });
}]);

// AngularJS can work with turbolinks
$(document).on('page:load', function(){
  return $('[ng-app]').each(function(){
    var module;
    module = $(this).attr('ng-app');
    return angular.bootstrap(this, [module]);
  });
});
