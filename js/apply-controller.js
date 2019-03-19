var app = angular.module("MainApp", []);

app.controller("ApplyDigestController", ["$scope", function($scope){
    $scope.name = "Jhovany";
    
    document.querySelector("#myBtn").addEventListener("click", function(){
        $scope.$apply(function(){
            $scope.name = "Hernandez";
        });
    });
}]);