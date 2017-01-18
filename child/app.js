angular.module("MyFirstApp",['ngRoute'])
.config(["$routeProvider","$locationProvider",function(route,location){
    
    location.hashPrefix('');
    route
        .when('/',{
            restrict: 'E',
            controller: 'MyFirstController',
            templateUrl: 'modal.html'
        });
}]);