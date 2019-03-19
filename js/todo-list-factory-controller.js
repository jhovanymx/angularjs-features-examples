var app = angular.module("TodoListApp", ["LocalStorageModule"]);

app.factory("TodoService", function(localStorageService){
    var todoService = {
        key: "todoList"
    };
    
    todoService.activities = localStorageService.get(todoService.key) || [];
    
    todoService.add = function(newActivity){
        todoService.activities.push(newActivity);
        todoService.updateLocalStorage();
    };
    
    todoService.updateLocalStorage = function(){
        localStorageService.set(todoService.key, todoService.activities);
    };
    
    todoService.clean = function(){
        todoService.activities = [];
        todoService.updateLocalStorage();
        return todoService.getAll();
    };
    
    todoService.getAll = function(){
        return todoService.activities;
    };
    
    todoService.remove = function(item){
        todoService.activities = todoService.activities.filter(function(activity){
            return activity !== item;
        });
        todoService.updateLocalStorage();
        return todoService.getAll();
    };
    
    return todoService;
});

app.controller("TodoListController", function($scope, TodoService){
    $scope.todo = TodoService.getAll();
    $scope.newActivity = {};
    
    $scope.addActivity = function(){
        TodoService.add($scope.newActivity);
        $scope.newActivity = {};
    };
    
    $scope.removeActivity = function(activity){
        $scope.todo = TodoService.remove(activity);
    };
    
    $scope.clean = function(){
        $scope.todo = TodoService.clean();
    };
});