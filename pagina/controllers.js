angular.module("PaginaDirective")

.controller("MostrarController",
["$scope","$http",
function(m,h){
    m.posts = [];
    m.newposts = {}; 
    m.editposts = {};
    m.ma= "Mystic Arts";
    m.newSkill = {value: ""};
    m.Skill = [  ];


    h.get("http://localhost:8080/pruebas_angularjs/hola_mundo/pagina/personajes.json")
    .then(function(data){
        m.contenidos = data['data'];
        // console.log(m.contenidos);
        m.posts = m.contenidos;
    }).catch(function(error){
        console.log("HAY UN ERROR");        
    });

    m.addSkill = function(){
       m.Skill.push(m.newSkill);
       m.newSkill = {};
    }

    m.editar = function(contenido){
        console.log(contenido);
        m.editposts = contenido;
    }

    m.addPost = function(){
     m.newposts.Skill =  m.Skill;   
      
     h.post("http://localhost:8080/pruebas_angularjs/hola_mundo/pagina/personajes.json",
     {
         nombre: m.newposts.nombre,
         titulo:  m.newposts.titulo,
         img: m.newposts.img,
         mysticArts: m.newposts.ma,
         skills:m.newposts.Skill 
     })
     .then(function(data,status,headers,config){
         console.log("success call back for the post");                 
         m.posts.unshift(m.newposts);
         console.log(m.posts);
        //  console.log(m.newposts.Skill);
        //  console.log(m.Skill);
         m.newposts = {};
         m.Skill = [];
     })
     .catch(function(error,status,headers,config){
         console.log("Error call back");   
     });
 }
                 

}]);