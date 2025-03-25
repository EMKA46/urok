import React from "react";
import { Todo } from "./Todo";
import styled from "styled-components";

export const TodoList = ({todos,deleteTodo}) => {
  return <Wrapper>
    {todos.length===0&&<h2>No todos yet</h2>}
   {todos.map((todo,index)=>{
    return  <Todo key={todo.id} todo={todo} index={index} deleteTodo={deleteTodo}/>
   })}
  </Wrapper>;
};
const Wrapper=styled.div`
    padding: 10px;
`