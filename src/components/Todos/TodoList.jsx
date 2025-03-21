import React from "react";
import { Todo } from "./Todo";
import styled from "styled-components";

export const TodoList = ({todos}) => {
  return <Wrapper>
   {todos.map((todo,index)=>{
    return  <Todo key={index} todo={todo} index={index}/>
   })}
  </Wrapper>;
};
const Wrapper=styled.div`
    padding: 10px;
`