import React, { useState } from "react";
import styled from "styled-components";

export const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const submitHedler = (e) => {
    e.preventDefault();
    if(!text.trim().length) return
    addTodo(text);
    setText("");
  };
  return (
    <FormContainer  onSubmit={submitHedler}>
      <StyledForm>
        <StyledInput
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </FormContainer >
  );
};
const FormContainer = styled.div`
  margin-top: 30px;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
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