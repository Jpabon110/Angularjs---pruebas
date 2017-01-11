angular.module("MyFirstApp",['ngMaterial'])

.run(function($rootScope){
     $rootScope.nombre = "Juan Pabon";   
})

.controller("MyFirstController",["$scope",function(m){

       m.nombre = "JP";
       setTimeout(function() {
          m.$apply(function(){
              m.nombre = ":3";  
          }); 
       }, 2000); 

}])

.controller("ChildController",["$scope", function(m){
        
}]);