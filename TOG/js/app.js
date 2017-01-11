angular.module("FinalApp",["lumx","ngRoute","ngResource"])
.config(["$routeProvider","$locationProvider", function(r,location){
        location.hashPrefix('');
        r
        .when("/",{
            controller: "MainController",
            templateUrl: "templates/home.html"
        })
         .when("/post/:id",{
            controller: "PostController",
            templateUrl: "templates/post.html"
        })
        .when("/user/:id",{
            controller: "UserController",
            templateUrl: "templates/user.html"
        })
        .when("/posts/new",{
            controller: "NewPostController",
            templateUrl: "templates/post_form.html"
        })
         .when("/posts/edit/:id",{
            controller: "PostController",
            templateUrl: "templates/post_form.html"
        })
 }]);
