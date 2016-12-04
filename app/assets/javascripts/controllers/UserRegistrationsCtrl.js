angular
  .module('taskApp')
  .controller('UserRegistrationsCtrl', ['$scope', '$auth', function($scope, $auth){
    $scope.$on('auth:registration-email-error', function(ev, reason) {
      $scope.error = reason.errors[0];
    });
    $scope.handleRegBtnClick = function(){
      $auth.submitRegistration($scope.registrationFrom)
        .then(function(){
          $auth.submitLogin({
            name: $scope.registrationFrom.name,
            email: $scope.registrationFrom.email,
            password: $scope.registrationFrom.password
          });
        });
    };
  }]);
