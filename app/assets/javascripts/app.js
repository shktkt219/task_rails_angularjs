var app;
app = angular.module('taskApp', ['ui.bootstrap', 'ngResource', 'ui.router']);

// CSRF(Cross-site Request Forgery)token
app.config(function($httpProvider){
  var authToken;
  authToken = $("meta[name=\"csrf-token\"]")
  .attr("content");
  return $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
});

// AngularJS can work with turbolinks
$(document).on('page:load', function(){
  return $('[ng-app]').each(function(){
    var module;
    module = $(this).attr('ng-app');
    return angular.bootstrap(this, [module]);
  });
});
