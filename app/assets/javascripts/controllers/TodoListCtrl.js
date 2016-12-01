angular.module('taskApp').controller("TodoListCtrl", function($scope) {
  $scope.init = function() {
    return $scope.list = {
      'name': 'House Chores',
      'todos': [
        {
          'description': 'Swipe the floor',
          'done': false
        }, {
          'description': 'Wash dishes',
          'done': false
        }
      ]
    };
  };

  $scope.addTodo = function(todoDescription) {
    var todo;
    todo = {
      'description': todoDescription,
      'done': false
    };
    $scope.list.todos.push(todo);
    return $scope.todoDescription = "";
  };

  $scope.deleteTodo = function(todo) {
    return $scope.list.todos.splice($scope.list.todos.indexOf(todo), 1);
  };
});
