angular
  .module('taskApp')
  .controller('UserRegistrationsCtrl', ['$scope', '$auth', '$state', function($scope, $auth, $state){
    $scope.handleRegBtnClick = function(){
      $auth.submitRegistration($scope.registrationForm)
        .then(function(){
          $auth.submitLogin({
            name: $scope.registrationForm.name,
            email: $scope.registrationForm.email,
            password: $scope.registrationForm.password
          });
        });
    };
  }]);
