angular
  .module('taskApp')
  .controller('UserCtrl', function($scope, $auth){
    $scope.handleRegBtnClick = function(){
      $auth.submitRegistration($scope.registrationForm)
        .catch(function(res){
          $scope.$on('auth:registration-email-error', function(ev, reason) {
            alert("Registration failed: " + reason.errors[0]);
          });
        });
    };

    $scope.handleLoginBtnClick = function(){
     $auth.submitLogin($scope.loginForm)
     .catch(function(resp){
       $rootScope.$on('auth:login-error', function(ev, reason) {
          alert('login failed because ' + reason.errors[0]);
        });
     });
    };

    $scope.handleSignOutBtnClick = function(){
      $auth.signOut()
      .then(function(resp){
        $rootScope.$on('auth:logout-success', function(ev) {
           alert('goodbye');
        });
      })
      .catch(function(resp){
        $rootScope.$on('auth:logout-error', function(ev, reason) {
           alert('logout failed because ' + reason.errors[0]);
         });
      });
    };
  });
