let todos = [
  { id: 3, content: 'HTML', completed: false},
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false}
];

function toggleCompletedById(id){
  todos.forEach((todo, i) => {
    if(todo.id === id){
      todos[i] = {...todo, completed: !todo.completed};
    }
  })
}

toggleCompletedById(3);

console.log(todos);
