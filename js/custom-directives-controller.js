var app = angular.module("MainApp", []);

app.directive("backImg", function(){
    return function(scope, element, attrs){
        attrs.$observe("backImg", function(value){
           element.css({
               backgroundImage: "url(" +  value + ")"
           });
        });
    };
});

app.controller("MainController", function($scope, $http){
    $http.get("https://api.github.com/users/jhovanymx/repos").then(function(res){
        $scope.repos = res.data;
    }, function(err){
        console.error(err);
    });
});