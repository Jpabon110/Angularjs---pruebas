angular.module("MyFirstApp",[])

.controller("MyFirstController",["$scope","$http",function(scope,http){
  scope.posts = [];
  scope.newposts = {};   
  http.get("http://jsonplaceholder.typicode.com/posts")
  .then(function(data){
      console.log("success call back");
      console.log(data['data']);
      scope.posts = data['data'];
  })
 .catch(function(error) {
    console.log("Error call back");
  });
    

 scope.addPost = function(){
     http.post("http://jsonplaceholder.typicode.com/posts",{
         title: scope.newposts.title,
         body:  scope.newposts.body,
         userId: 1
     })
     .then(function(data,status,headers,config){
         console.log("success call back for the post");
         console.log(scope.newPosts);
         scope.posts.unshift(scope.newPosts)
         scope.newPosts = {};
     })
     .catch(function(error,status,headers,config){
         console.log("Error call back");   
     });
 }

}]);