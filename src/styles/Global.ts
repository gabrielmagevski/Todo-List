import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body, html {
   background-color: #38404B;
   color: #fff; 
   font-family: 'Roboto', sans-serif;
  }
`;

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
`;