import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
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

  &:hover {
    color: #ffffffbd;
    cursor: pointer;
    transition: 50ms
  }
`;