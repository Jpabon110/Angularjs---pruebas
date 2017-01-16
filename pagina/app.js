angular.module("PaginaDirective",['ngRoute'])
.config(["$routeProvider","$locationProvider",function(route,location){
    location.hashPrefix('');
    route
        .when('/',{
            restrict: 'E',
            controller: 'MostrarController',
            templateUrl: 'templates/home.html'
        }).when('/modal1',{
            restrict: 'E',
            controller: 'MostrarController',
            templateUrl: 'templates/home.html'
        }).when('/!',{
            restrict: 'E',
            controller: 'MostrarController',
            templateUrl: 'templates/home.html'
        });

}]);