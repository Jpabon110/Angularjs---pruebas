angular.module("PaginaDirective")
.controller("MostrarController",["$scope",function(m){
    m.nombre="Asbel Lanth";
    m.titulo = "Royal knight";
    m.img = "http://vignette3.wikia.nocookie.net/aselia/images/f/f2/Asbel_Cut-in_(ToG).png/revision/latest?cb=20141014052741";
    m.mysticArts = "Mystic Arts";

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

              console.log(m.skills);                     

}]);