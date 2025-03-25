import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/Todos/TodoForm";
import { TodoList } from "./components/Todos/TodoList";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHedler = (text) => {
    const newTodo={
      text: text,
      isCompleted:false,
      id:crypto.randomUUID()
    }
    setTodos([...todos,newTodo])
  };

  const deleteTodoHadler=(index)=>{
    const updatedTodo=todos.filter((inx)=>{
      return inx.id!==index
    })
    setTodos(updatedTodo)
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHedler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHadler} />
    </div>
  );
}

export default App;
