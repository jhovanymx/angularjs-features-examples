var app = angular.module("MainApp", []);

app.run(function($rootScope){
    $rootScope.name = "Jhovany";
});

app.controller("MainController", function($scope){
    $scope.name = "Hernandez";
    setTimeout(function(){
        $scope.$apply(function(){
            $scope.name = "Resendiz";
        });
    }, 1000);
});

app.controller("ChildController", function($scope){
     
});