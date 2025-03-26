import React from "react";
import { Todo } from "./Todo";
import styled from "styled-components";

export const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <Wrapper>
      {todos.length === 0 && <h2>No todos yet</h2>}
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
`;
