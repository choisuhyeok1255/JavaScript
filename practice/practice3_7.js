const todos = [
  { id: 3, content: 'HTML', completed: false},
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false}
];

function toggleCompletedAll(){
  todos.forEach((todo, i) => {
    if(todo.completed === false){
      todos[i] = {...todo, completed: true};
    }
  })
}

toggleCompletedAll();

console.log(todos);
