import styled from "styled-components";

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  max-width: 1220px;
  margin: 50px auto 0px;
`;

export const InputAddTodo = styled.input`
  border: 1px solid #000; 
  box-shadow: -9px 5px 0px rgba(0,0,0,0.75);
  border-radius: 8px;
  padding: 10px 20px;
  background-color: transparent;
  color: #FFF;

  width: 500px;

  &:hover {
    border: 1px solid #000; 
  }

  &:focus, &:focus, &:focus {
    outline: 0;
  } 
`;