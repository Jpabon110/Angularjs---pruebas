angular.module("ToDoList",["LocalStorageModule"])
.service('ToDoService',["localStorageService",function(l){
   

    this.key = "angular-todolist";

   if(l.get(this.key)){
        this.activities = l.get(this.key);
    }else{
        this.activities = [];
    } 
    
    this.add = function(newActv){
        this.activities.push(newActv);
        this.updaLocalStorage();
    };

    this.updaLocalStorage = function(){
        l.set(this.key, this.activities);
    };

    this.clean = function(){
        this.activities = [];
        this.updaLocalStorage();
        return this.getAll();
    };

    this.getAll = function(){
        return this.activities;
    }  

    this.removeItem = function(item){
     this.activities = this.activities.filter(function(activty){
     return activty !== item;
 });

    this.updaLocalStorage();
    return this.getAll();

 }

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