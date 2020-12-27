let todos = [
  { id: 3, content: 'HTML', completed: true},
  { id: 2, content: 'CSS', completed: true},
  { id: 1, content: 'Javascript', completed: false}
];

// function countCompletedTodos(){
//   let count = 0;
//   todos.filter(todo => {
//     if(todo.completed === true){
//       count++;
//     }
//   });
//   return count;
// } 

function countCompletedTodos(){
  return todos.filter(todo => todo.completed === true).length;
} 

console.log(countCompletedTodos());