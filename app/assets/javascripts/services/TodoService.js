angular.module('taskApp').factory('Todo', function($resource, $http) {
  var Todo;
  return Todo = (function() {
    function Todo(todoListId, errorHandler) {
      this.service = $resource('/api/todo_lists/:todo_list_id/todos/:id', {
        todo_list_id: todoListId
      }, {
        update: {
          method: 'PUT'
        }
      });
      this.errorHandler = errorHandler;
    }

    Todo.prototype.create = function(attrs) {
      new this.service({
        todo: attrs
      }).$save((function(todo) {
        return attrs.id = todo.id;
      }), this.errorHandler);
      return attrs;
    };

    Todo.prototype["delete"] = function(todo) {
      return new this.service().$delete({
        id: todo.id
      }, (function() {
        return null;
      }), this.errorHandler);
    };

    Todo.prototype.update = function(todo, attrs) {
      return new this.service({
        todo: attrs
      }).$update({
        id: todo.id
      }, (function() {
        return null;
      }), this.errorHandler);
    };

    return Todo;

  })();
});
