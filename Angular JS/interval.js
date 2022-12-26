var myapp=angular.module("mymod",[]);

myapp.controller("myCtrl",function($scope,$interval){
$scope.count = 0;


$scope.myfun=function(){
$interval(function() {$scope.count++;}, 1000);
}
$interval(function() {$scope.dateAndTime=Date();}, 1000);
});

