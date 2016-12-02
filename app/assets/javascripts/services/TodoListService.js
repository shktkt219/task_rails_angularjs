angular.module('taskApp').factory('TodoList', function($resource, $http) {
  var TodoList;
  return TodoList = (function() {
    function TodoList(errorHandler) {
      this.service = $resource('/api/todo_lists/:id', {
        id: '@id'
      }, {
        update: {
          method: 'PUT'
        }
      });
      this.errorHandler = errorHandler;
    }

    TodoList.prototype.all = function(){
      return this.service.query((function(){
        return null;
      }), this.errorHandler);
    };

    TodoList.prototype.find = function(id, successHandler) {
      return this.service.get({
        id: id
      }, (function(list) {
        if (typeof successHandler === "function") {
          successHandler(list);
        }
        return list;
      }), this.errorHandler);
    };

    TodoList.prototype.create = function(attrs) {
      new this.service({
        todo_list: attrs
      }).$save((function(list) {
        return attrs.id = list.id;
      }), this.errorHandler);
      return attrs;
    };

    TodoList.prototype["delete"] = function(list){
      return new this.service().$delete({
        id: list.id
      }, (function(){
        return null;
      }), this.errorHandler);
    };

    return TodoList;

  })();
});
