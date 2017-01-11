angular.module("CustomeDirective",[])

.directive('backImg',function(){
    return function(scope,element,attrs){        
        attrs.$observe('backImg',function(value){
            element.css({
                   "background": "url("+value+")",
                   "background-size": "cover",
                   "background-position": "center"
            });
        });

    }
})
/*
<!--style="background:url({{repo.owner.avatar_url}}); background-position: center; background-size: cover; "-->
*/

.controller("AppCtrl",["$scope","$http",function(m,h){
   h.get("https://api.github.com/users/urielhdz/repos")
   .then(function(data){
        m.repos = data['data'];
        
        console.log(data);
   })
   .catch(function(error){
       console.log(error);
   });
}]);