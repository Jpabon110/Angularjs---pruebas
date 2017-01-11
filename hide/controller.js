angular.module("MyFirstApp",[])

.controller("MyFirstController",["$scope","$http",function(scope,http){
  scope.posts = [];
  scope.newposts = {};
  scope.loading = true;
     
  http.get("http://jsonplaceholder.typicode.com/posts")
  .then(function(data){
      console.log("success call back");
      console.log(data['data']);
      scope.posts = data['data'];
      scope.loading = false;
  }) .catch(function(error) {
    console.log("Error call back");
    scope.loading = false;
  });
    

}]);