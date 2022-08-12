import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const List = styled.ul`

`;


export const TodoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Check = styled.input`
  margin-right: 15px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const Item = styled.li`
  font-size: 22px;
  line-height: 19px;
  font-weight: 500;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  &:hover {
    color: #ffffffbd;
    cursor: pointer;
    transition: 50ms
  }
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  margin: 60px 20px;
`;

export const Title = styled.h1`

`;

export const Button = styled.button`
  border: 1px solid #000; 
  box-shadow: -9px 3px 0px rgba(0,0,0,0.75);
  border-radius: 8px;
  padding: 10px 20px;
  background-color: transparent;
  color: #FFF;
  position: absolute;
  right: 29.9%;

  &:hover {
    background-color: #343434;
    cursor: pointer;
  }
`;