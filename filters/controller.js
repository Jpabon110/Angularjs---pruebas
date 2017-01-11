angular.module("mainModule",[])

.filter("removeHtml", function(){
    return function(texto){
        return String(texto).replace(/<[^>]+>/gm,'');
    }
}) //esperando para colocar ";"

.controller("FiltersController",["$scope",function(m){
        m.mi_html = {};
        m.mi_html.title = "Hola ";
        m.mi_html.body = "Hola mundo ";
        m.costo = 2;
        m.costo2 = 3;
 
}]);