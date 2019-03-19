var app = angular.module("MainApp", []);

app.controller("MainController", function($scope, $http){
    $http.get("https://api.github.com/users/jhovanymx/repos").then(function(res){
        $scope.repos = res.data;
    }, function(err){
        console.error(err);
    });
});