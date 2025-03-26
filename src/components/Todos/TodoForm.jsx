import React, { useState } from "react";
import styled from "styled-components";
import { RiResetLeftLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

export const TodoForm = ({ addTodo, clearAllTodos, clearCompletedTodos }) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text.trim().length) return;
    addTodo(text);
    setText("");
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <StyledForm>
        <div>
          <StyledInput
            type="text"
            placeholder="Enter new todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <StyledButton type="submit">Submit</StyledButton>
        </div>
        <div>
          <Button title="Delete all" onClick={clearAllTodos}>
            <RiResetLeftLine />
          </Button>
          <Button title="Delete completed" onClick={clearCompletedTodos}>
            <MdDelete />
          </Button>
        </div>
      </StyledForm>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  margin-top: 30px;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

const StyledInput = styled.input`
  width: 45%;
  height: 30px;
  font-size: 1.3rem;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  margin-left: 20px;
  height: 50px;
  cursor: pointer;
  background-color: beige;
  font-size: 1.5rem;
  &:hover {
    background-color: rgb(240, 240, 155);
  }
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-top: 20px;
  margin-left: 20px;
  height: 50px;
  cursor: pointer;
  background-color: beige;
  font-size: 1.5rem;
  &:hover {
    background-color: rgb(240, 240, 155);
  }
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
`;
