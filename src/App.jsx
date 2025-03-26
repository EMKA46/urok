import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/Todos/TodoForm";
import { TodoList } from "./components/Todos/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: crypto.randomUUID(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm
        addTodo={addTodoHandler}
        clearAllTodos={clearAllTodos}
        clearCompletedTodos={clearCompletedTodos}
      />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
