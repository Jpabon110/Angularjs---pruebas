angular.module("ToDoList",["LocalStorageModule"])
.factory('ToDoService',["localStorageService",function(l){
    var toDoService = {};

    toDoService.key = "angular-todolist";

   if(l.get(toDoService.key)){
        toDoService.activities = l.get(toDoService.key);
    }else{
        toDoService.activities = [];
    } 
    
    toDoService.add = function(newActv){
        toDoService.activities.push(newActv);
        toDoService.updaLocalStorage();
    };

    toDoService.updaLocalStorage = function(){
        l.set(toDoService.key, toDoService.activities);
    };

    toDoService.clean = function(){
        toDoService.activities = [];
        toDoService.updaLocalStorage();
        return toDoService.getAll();
    };

    toDoService.getAll = function(){
        return toDoService.activities;
    }  

    toDoService.removeItem = function(item){
     toDoService.activities = toDoService.activities.filter(function(activty){
     return activty !== item;
 });

    toDoService.updaLocalStorage();
    return toDoService.getAll();

 }

    return toDoService;
}])
.controller("ToDoController",["$scope","ToDoService",
function(m,ToDoService){
  
    m.todo = ToDoService.getAll();
    m.newActv = {};
    
    m.addActv = function(){
      ToDoService.add(m.newActv); 
      m.newActv = {};
    }

    m.removeActv = function(item){
       m.todo = ToDoService.removeItem(item);
    }

    m.clean = function(){
      m.todo = ToDoService.clean();
    }

 
}]);