angular.module('taskApp').controller("TodoListCtrl", function($scope) {
  return $scope.init = function() {
    return $scope.list = {
      name: 'Task Manager',
      todos: [
        {
          'description': 'Swipe the floor'
        }, {
          'description': 'Wash dishes'
        }
      ]
    };
  };
});
