var myapp=angular.module("mymod",[]);

myapp.controller("myCtrl",function($scope){
$scope.student=[{name:'amruta',id:2,city:'mumbai'},
                {name:'snehal',id:4,city:'delhi'},
                {name:'pooja',id:3,city:'pune'},
                {name:'piya',id:1,city:'thane'}
];
});
