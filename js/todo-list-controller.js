var app = angular.module("TodoListApp", ["LocalStorageModule"]);

app.controller("TodoListController", ["$scope", "localStorageService", function($scope, localStorageService){
    $scope.todo = localStorageService.get("todoList") || [];
    
    $scope.$watchCollection("todo", function(newValue, oldValue){
        localStorageService.set("todoList", $scope.todo);
    });
    
    $scope.addActivity = function(){
        $scope.todo.push($scope.newActivity);
        $scope.newActivity = {};
    };
    
    $scope.clean = function(){
        $scope.todo = [];
    };
}]);