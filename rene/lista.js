angular.module("list", ["LocalStorageModule"])
.controller("Tlist", ["$scope","$localStorageService", function(s,l){
	s.lista = [];
	s.nombre = "rene";
	s.agregarLista = function(){
		s.lista.push(s.nuevaLista);
		s.nuevaLista = {};
	}
}]);