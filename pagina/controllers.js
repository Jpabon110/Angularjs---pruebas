angular.module("PaginaDirective")
.controller("MostrarController",["$scope","$http",function(m,h){
    m.nombre="Asbel Lanth";
    m.titulo = "Royal knight";
    m.img = "img/asbel.png";
    m.mysticArts = "Mystic Arts";

    

    h.get("http://localhost:8080/pruebas_angularjs/hola_mundo/pagina/personajes.json")
    .then(function(data){
        m.contenidos = data['data'];
        console.log(m.contenidos);
    }).catch(function(error){
        console.log("HAY UN ERROR");        
    });

        m.skills = [  
                        {
                        nombre: "Stampede Strike"
                        },
                          {
                        nombre: "Lunar Requiem"
                        },
                          {
                        nombre: "Expunging Sword"
                        },
                          {
                        nombre: "Divine Conqueror"
                        }
                    ];                   

}]);