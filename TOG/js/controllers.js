angular.module("FinalApp")
.controller("MainController",["$scope","$resource","PostResource",
function(m,r,res){
    User = r("http://jsonplaceholder.typicode.com/users/:id",{id: "@id"});

    m.posts = res.query();
    m.users = User.query();
    m.removePost = function(post){
        res.delete ({id: post.id}, function(data){
            console.log(data);
        });
        //la funcion filter le copia a su parametro el contenido
        //de la variable a la cual se le ve a filtrar su info
        m.posts = m.posts.filter(function(element){
            // console.log(element);
            return element.id !== post.id;
        });
    }
    // console.log(m.users);
    //query -> GET /post -> Un arreglo de post -> isArray: true

    
}])

.controller("PostController",["$scope","PostResource","$routeParams",
"$location",
function(m,reso,r,location){
m.title= "Editar Post";
  m.post = reso.get({id: r.id});

     m.savePost = function(){
      reso.update( {id: m.post.id},{data: m.post}, function(data){
          console.log(data);
          location.path("/post/"+ m.post.id);
      });
  }     


}])

.controller("UserController",["$scope","$resource","$routeParams",function(m,reso,r){
  User = reso("http://jsonplaceholder.typicode.com/users/:id",{id: "@id"});
  m.user = User.get({id: r.id}); 
}])

.controller("NewPostController",["$scope","PostResource","$location",function(m,reso,location){

  m.post = {};
  m.title= "Crear Post";
  m.savePost = function(){
      reso.save({data: m.post}, function(data){
          console.log(data);
          location.path("/");
      });
  }

}]);