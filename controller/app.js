angular.module("MyFirstApp",['ngRoute','ngResource'])
.config(["$routeProvider","$locationProvider",function(route,location){
    
    location.hashPrefix('');
    route
        .when('/',{

            controller: 'MyFirstController',
            templateUrl: 'home.html'
        });

}]);