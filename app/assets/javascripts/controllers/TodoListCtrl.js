angular.module('taskApp').controller("TodoListCtrl", function($scope, TodoList, Todo) {
  $scope.init = function() {
    this.todoListService = new TodoList(serverErrorHandler);
    this.todoService = new Todo(1, serverErrorHandler);
    return $scope.list = this.todoListService.find(1);
  };

  $scope.addTodo = function(todoDescription) {
    var todo;
    todo = this.todoService.create({
      description: todoDescription,
      done: false
    });
    $scope.list.todos.push(todo);
    return $scope.todoDescription = "";
  };

  $scope.deleteTodo = function(todo) {
    this.todoService["delete"](todo);
    return $scope.list.todos.splice($scope.list.todos.indexOf(todo), 1);
  };

  $scope.toggleTodo = function(todo){
    return this.todoService.update(todo, {
      done: todo.done
    });
  };

  var serverErrorHandler
  serverErrorHandler = function(){
    alert("server error");
  };
});
