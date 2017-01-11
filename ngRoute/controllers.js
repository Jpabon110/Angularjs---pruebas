
angular.module("CustomeDirective")
.controller("ReposController",["$scope","$http",function(m,h){
    m.repos = [];

   h.get("https://api.github.com/users/twitter/repos")
   .then(function(data){
        m.posts = data['data'];
        for(var i = data['data'].length - 1; i >= 0; i--){
            var repo = data['data'][i];
            m.repos.push(repo.name);
        };
        // console.log(data);
        // console.log(m.posts);
   })
   .catch(function(error){
    //    console.log(error);
   });

   m.optionSelected = function(data){
       m.$apply(function(){
           m.main_repo = data;
       })
   }

}])

.controller("RepoController",["$scope","$http","$routeParams",
function(m,h,r){

    m.repo = {};

    h.get("https://api.github.com/repos/twitter/"+ r.name)
   .then(function(data){
       m.repo = data['data'];
       // console.log(data);       
   })
   .catch(function(error){
    //    console.log(error);
   });


}]);