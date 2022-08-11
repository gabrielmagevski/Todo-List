import React, { useState } from "react";
import { Container } from "../../styles/Global";
import { Content, List, Check, Item } from "./styles/todoStyle";

export function Todo() {
  return (
    <Container> 
      <h1>TodoList</h1>
      <Content> 
        <List>
          <Check type="checkbox" />
          <Item>Primeiro Todo</Item>
        </List>
      </Content>
    </Container>
  )
}