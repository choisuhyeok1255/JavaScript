let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  todos.forEach(todo => {if(todo.id === id){
    const index = todos.findIndex(todo => todo.id ===id);
    todos.splice(index,1);
  }});
}

removeTodo(2);

console.log(todos);