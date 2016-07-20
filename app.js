function TodoCtrl($scope) {
  
  $scope.todos =[
    {text:'Shoping',done:false},         
    {text:'swiming',done:false}
  ];
  
  $scope.getTotalTodos= function(){
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function(){
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
    $scope.clearCompleted = function(){
    $scope.todos = $scope.todos.filter(function(todo){
        return !todo.done;
    })
};
}
