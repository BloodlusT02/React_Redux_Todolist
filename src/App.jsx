import AddTodoList from './components/AddTodo'
import Todo from './components/Todo'
import './App.css'

function App() {
  return (
    <>
      <h1 className='font-semibold text-lg'>Todo List with Redux Toolkit</h1>
      <AddTodoList />
      <Todo />
    </>
  )
}

export default App
