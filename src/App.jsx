import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/Todos/TodoForm";
import { TodoList } from "./components/Todos/TodoList";
function App() {
  const [todos, setTodos] = useState(["Sdelat uroki"]);

  const addTodoHedler = (text) => {
    setTodos([...todos, text]);
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHedler} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
