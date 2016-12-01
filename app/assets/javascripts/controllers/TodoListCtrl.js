angular.module('taskApp').controller("TodoListCtrl", function($scope, TodoList, Todo) {
  return $scope.init = function() {
    this.todoListService = new TodoList(serverErrorHandler);
    this.todoService = new Todo(1);
    return $scope.list = this.todoListService.find(1, serverErrorHandler);
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

  var serverErrorHandler
  serverErrorHandler = function(){
    alert("server error");
  };
});
