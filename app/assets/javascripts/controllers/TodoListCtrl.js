angular.module('taskApp').controller("TodoListCtrl", function($scope) {
  $scope.init = function() {
    return $scope.list = {
      'name': 'House Chores',
      'todos': [
        {
          'description': 'Swipe the floor'
        }, {
          'description': 'Wash dishes'
        }
      ]
    };
  };
  return $scope.addTodo = function(todoDescription) {
    var todo;
    todo = {
      'description': todoDescription
    };
    $scope.list.todos.push(todo);
    return $scope.todoDescription = "";
  };
});
