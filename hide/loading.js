angular.module("MyFirstApp")
.factory("Loading",[function(){

   var loading = {};

    loading.cambio = function(){
       return false;
    }

    return loading;
}])