angular
   .module('taskApp')
   .controller('UserSessionsCtrl', ['$scope', '$auth', '$state', function($scope, $auth, $state){
     $scope.handleLoginBtnClick = function(){
       $auth.submitLogin($scope.loginForm)
       .then(function(){
         $state.go('dashboard');
       });
     };
   }]);
