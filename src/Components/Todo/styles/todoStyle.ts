import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const List = styled.ul`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width:768px) { 
    max-width: 500px;
  }
`;


export const TodoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c2c2c;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-left: 20px;
`;


export const Check = styled.input.attrs({type: 'checkbox'})`
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
  right: 27.5%;
  
  &:hover {
    background-color: #343434;
    cursor: pointer;
  }
`;

export const Form = styled.form``;