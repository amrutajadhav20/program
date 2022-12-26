var myapp=angular.module("mymod",[]);
myapp.run(function($rootScope){$rootScope.name="Amruta",
                               $rootScope.color="pink"});

myapp.controller("myCtrl",function($scope){$scope.name="satyajeet" }); 

