var app = angular.module("MainApp", []);

app.directive("myAutocomplete", function(){
    function link(scope, element, attrs){
        $(element).autocomplete({
            source: scope[attrs.myAutocomplete],
            select: function(event, ui){
                event.preventDefault();
                if(ui.item){
                     scope.optionSelected(ui.item.value);
                }
            },
            focus: function(event, ui){
                event.preventDefault();
                $(this).val(ui.item.label);
            }
        });
    }
    
    return {
      link: link
    };
});

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
    $scope.repos = [];
    
    $http.get("https://api.github.com/users/jhovanymx/repos").then(function(res){
        $scope.posts = res.data;
        for(var i = res.data.length - 1; i >= 0; i--){
            var repo = res.data[i];
            $scope.repos.push(repo.name);
        }
    }, function(err){
        console.error(err);
    });
    
    $scope.optionSelected = function(value){
        $scope.$apply(function(){
            $scope.main_repo = value;
        });
    }
    
    $scope.clean = function(value){
        $scope.main_repo = null;
    };
});