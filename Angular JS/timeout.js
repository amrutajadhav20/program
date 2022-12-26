var myapp=angular.module("mymod",[]);

myapp.controller("myCtrl",function($scope,$timeout){
$scope.name = "amruta  snehal";



$timeout(function() {$scope.name="welcome to quastech";}, 4000);
});

