angular
  .module('taskApp')
  .controller("TodoListCtrl", function($scope, $stateParams, TodoList, Todo) {
    $scope.init = function() {
      this.todoListService = new TodoList(serverErrorHandler);
      this.todoService = new Todo($stateParams.list_id, serverErrorHandler);
      return $scope.list = this.todoListService.find($stateParams.list_id, function(res){
        return $scope.totalTodos = res.totalTodos;
      });
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

    $scope.filter = {
      done: {
        done: true
      },
      remaining: {
        done: false
      }
    };

    $scope.changeFilter = function(filter){
      return $scope.currentFilter = filter;
    };

    var serverErrorHandler
    serverErrorHandler = function(){
      alert("server error");
    };
});
