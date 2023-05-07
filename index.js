function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Wake Up',
      isCompleted: false,
    },
    {
      text: 'Eat Breakfast',
      isCompleted: false,
    },
    {
      text: 'Learn React',
      isCompleted: false,
    },
    {
      text: 'Meet Friend for Lunch',
      isCompleted: false,
    },
    {
      text: 'Build Todo App',
      isCompleted: false,
    },
    {
      text: 'Take a Nap',
      isCompleted: false,
    },
    {
      text: 'Debug Todo App',
      isCompleted: false,
    },
    {
      text: 'Have Dinner',
      isCompleted: false,
    },
    {
      text: 'deploy Todo App',
      isCompleted: false,
    },
    {
      text: 'Go to Bed',
      isCompleted: false,
    }
  ])
 
  const addTodo = text => { 
    const newTodos = [...todos, { text: value, isCompleted: false }];
    setTodos(newTodos);
  }
  const removeTodo = e => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }
  return(
    <>
      {todos.map((todo, i) => <div key={i} id={i} onClick={removeTodo}>{todo.text}</div>)}
      <Forms addTodo={addTodo}/>
    </>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
