var app = angular.module("TodoListApp", ["LocalStorageModule"]);

app.service("TodoService", function(localStorageService){
    this.key = "todoList";
    
    this.activities = localStorageService.get(this.key) || [];
    
    this.add = function(newActivity){
        this.activities.push(newActivity);
        this.updateLocalStorage();
    };
    
    this.updateLocalStorage = function(){
        localStorageService.set(this.key, this.activities);
    };
    
    this.clean = function(){
        this.activities = [];
        this.updateLocalStorage();
        return this.getAll();
    };
    
    this.getAll = function(){
        return this.activities;
    };
    
    this.remove = function(item){
        this.activities = this.activities.filter(function(activity){
            return activity !== item;
        });
        this.updateLocalStorage();
        return this.getAll();
    };
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