angular.module('taskApp').factory('TodoList', function($resource, $http){
  var TodoList;
  return TodoList = (function(){
    function TodoList(errorHandler){
      this.service = $resource('/api/todo_lists/:id', {
        id: '@id'
      },{
        update: {
          method: 'PUT'
        }
      });
      this.errorHandler = errorHandler;
    }

    TodoList.prototype.find = function(id, successHandler){
      return this.service.get({
        id: id
      },(function(list){
        if (typeof successHandler === "function"){
          successHandler(list);
        }
        return list;
      }), this.errorHandler);
    };
    return TodoList;
  });
});
