var app = angular.module("MainApp", []);

app.controller("MainController", ["$scope", "$http", function($scope, $http){
    $scope.posts = [];
    $scope.loading = true;
    
    $http.get("//jsonplaceholder.typicode.com/posts").then(function(res){
        $scope.posts = res.data;
        $scope.loading = false;
    }, function(err){
        $scope.loading = false;
    });
}]);