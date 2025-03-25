import React, { useState } from "react";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

export const Todo = ({ todo, deleteTodo }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <TodoWrapper $completed={isCompleted}>
      <TodoText $completed={isCompleted}>{todo.text}</TodoText>
      <StyledCheckIcon onClick={() => setIsCompleted(!isCompleted)} />
      <StyledDeleteIcon onClick={() => deleteTodo(todo.id)} />
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 15px 0;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid #555;
  color: ${({ $completed }) => ($completed ? "#aaa" : "#112d49")};
  background-color: ${({ $completed }) => ($completed ? "#122d4a" : "#fbfef9")};
  user-select: none;
`;

const TodoText = styled.div`
  width: 100%;
  text-align: left;
  text-decoration: ${({ $completed }) => ($completed ? "line-through" : "none")};
`;

const StyledCheckIcon = styled(FaCheck)`
  color: ${({ $completed }) => ($completed ? "green" : "gray")};
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    color: green;
    transform: scale(1.1);
  }
  margin-right: 5px;
`;

const StyledDeleteIcon = styled(MdDeleteForever)`
  color: gray;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    color: red;
    transform: scale(1.1);
  }
`;
