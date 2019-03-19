var app = angular.module("MainApp", []);

app.filter("removeHtml", function(){
    return function(text){
        return String(text).replace(/<[^>]+>/gm, "");
    };
});

app.controller("FiltersController", ["$scope", function($scope){
    $scope.myHtml = "<p>Hello world!";
    $scope.myObject = {title: "Hello", body: "World"};
    $scope.myInt = 2.42;
}]);