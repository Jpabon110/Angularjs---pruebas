angular.module("MyFirstApp",[])
.controller("MyFirstController",["$scope","$http",
"Loading",function(scope,http,load){
  scope.posts = [];
  scope.newposts = {};
  scope.loading = true;
     
  http.get("http://jsonplaceholder.typicode.com/posts")
  .then(function(data){
      console.log("success call back");
      console.log(data['data']);
      scope.posts = data['data'];
      scope.loading = load.cambiar();
      console.log("aqui estassss"+load.cambiar());

  }) .catch(function(error) {
    console.log("Error call back");
    scope.loading = false;
  });
    

}]);