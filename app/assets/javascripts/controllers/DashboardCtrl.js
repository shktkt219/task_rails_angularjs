angular.module('taskApp').controller("DashboardCtrl", function($scope, TodoList){
  $scope.init = function(){
    this.listsService = new TodoList(serverErrorHandler);
    return $scope.lists = this.listsService.all();
  };

  $scope.createList = function(listName){
    var list;
    list = this.listsService.create({
      name: listName
    });
    $scope.lists.push(list);
    return $scope.listName = "";
  };

  $scope.deleteList = function(list, index){
    if (confirm("Delete List?")){
      this.listsService["delete"](list);
      return $scope.lists.splice(index, 1);
    }
  };

  var serverErrorHandler;
  serverErrorHandler = function(){
    return alert("server error");
  };
});
