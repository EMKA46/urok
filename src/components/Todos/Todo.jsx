import React from 'react'
import styled from 'styled-components';

export const Todo = ({todo,index}) => {
  return (
  <TodoWrapper>
    <TodoText>
    {index +1}{todo}
    </TodoText>
  </TodoWrapper>
  
  )
}
const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin: 15px 0;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid #555;
  color: #112D49;
  background-color: #FBFEF9;
  user-select: none;
`;
const TodoText = styled.div`
  width: 100%;
  text-align: left;
`;