angular.module("MyFirstApp")

.controller("MyFirstController",["$scope","$resource", function(m,r){
    m.nombre = "Juan";
}]);
// .controller("MyFirstController",function($scope){
//     $scope.nombre = "Juan";
// });