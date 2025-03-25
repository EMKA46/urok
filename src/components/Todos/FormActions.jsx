import React from "react";
import styled from "styled-components";

export const FormsActions = ({ todos, clearCompleted }) => {
  const hasCompleted = todos.some((todo) => todo.completed);

  if (todos.length === 0) return null;

  return (
    <ActionsContainer>
      <ClearButton onClick={clearCompleted} disabled={!hasCompleted}>
        Удалить выполненные
      </ClearButton>
    </ActionsContainer>
  );
};

const ActionsContainer = styled.div`
  margin-top: 20px;
`;

const ClearButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
`;
