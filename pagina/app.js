angular.module("PaginaDirective",['ngRoute'])
.config(["$routeProvider","$locationProvider",function(route,location){
    location.hashPrefix('');
    route
        .when('/',{
            controller: 'MostrarController',
            templateUrl: 'templates/header.html'
        })
        .otherwise("/");
}]);