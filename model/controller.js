angular.module("MyFirstApp",[])


.controller("MyFirstController",["$scope",function(m){
    m.nombre = "Juan";
    m.Nuevocomentario = { comentario:"", username:"",
     hola:[
          {d:"asdas"} 
         ]
        };
    m.comentarios= [
        {
            comentario:"Buen Tutorial",
            username:"codigofacilito"
        },
        {
            comentario:"wadaasfafafaf",
            username:"Juan"
        }
    ];
    m.agregarComentario = function(){
     m.comentarios.push(m.Nuevocomentario);
     console.log(m.comentarios);
     m.Nuevocomentario ={};
    }
}]);