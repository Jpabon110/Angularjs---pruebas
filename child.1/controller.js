angular.module("MyFirstApp",[])

.run(function($rootScope){
     $rootScope.nombre = "Juan Pabon";   
})
.factory('Saber',[function(){
    var saber = {};

     saber.hola = function(){
        return saber.decir = "hola";       
    };

    return saber;
}])

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