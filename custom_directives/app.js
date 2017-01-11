angular.module("CustomeDirective",[])

.directive("myAutoComplete",function(){
    function link(scope, element, attrs){
        $(element).autocomplete({
           source: scope[attrs.myAutoComplete],
           select: function(ev,ui){
               ev.preventDefault();
               if(ui.item){
                 scope.optionSelected(ui.item.value);
               }
           },
            focus: function(ev,ui){
                ev.preventDefault();
                $(this).value(ui.item.label);
            }
        });
    };

    return {
        link: link
    };
})
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
    m.repos = [];

   h.get("https://api.github.com/users/codigofacilito/repos")
   .then(function(data){
        m.posts = data['data'];
        for(var i = data['data'].length - 1; i >= 0; i--){
            var repo = data['data'][i];
            m.repos.push(repo.name);
        };
        // console.log(data);
        console.log(m.posts);
   })
   .catch(function(error){
       console.log(error);
   });

   m.optionSelected = function(data){
       m.$apply(function(){
           m.main_repo = data;
       })
   }

}]);