angular.module("ToDoList",["LocalStorageModule"])

.controller("ToDoController",["$scope",
"localStorageService",function(m,l){

  
if(l.get("angular-todolist")){
    
  m.todo = l.get("angular-todolist");
//   m.jorge;  
    
}else{
        m.todo = [];
    }
    
    /*
    {

        descripcion:'terminar el curso de angular',
        fecha: '3-03-15 2:00pm'
    }

    */ 
    m.$watchCollection('jorge',function(){
    //    m.todo.push(m.newActv);
      l.set("angular-todolist", m.todo);
    
      

    },function(newValue,oldValue){
        console.log(newValue);
        console.log(oldValue);

    });
    m.addActv = function(){
    //  m.jorge = 1;  
     m.todo.push(m.newActv);
      m.newActv = {};
    }

    // m.cleanActv = function(){
    //     m.todo = [];
    // }
    
 
}]);