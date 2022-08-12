import React, { FormEvent, useState } from "react";
import { Container } from "../../styles/Global";
import { HeaderBar, InputAddTodo } from "../Header/styles/HeaderStyle";
import { Content, Check, Item, TitleContent, Title, TodoContent, List, Button } from "./styles/todoStyle";

export function Todo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleClickAddTodo = (newTodo: string) => {

    if(newTodo === '') {
      return;
    } 
    
    else {
      setTodos([...todos, newTodo]);
    }

    setNewTodo('');
  }

  return (
    <Container> 
      <HeaderBar>
        <InputAddTodo
         type="text"
         placeholder="Add new Task"
         value={newTodo}
         onChange={handleValue}
        />
        <Button onClick={() => handleClickAddTodo(newTodo)}>New Task</Button>
      </HeaderBar>

      <TitleContent>
        <Title>
          TodoList
        </Title>
      </TitleContent>

      <Content> 
        <List>
        {
        todos?.map(todo => {
          return (
            <TodoContent>
              <Check type="checkbox" />
              <Item>{todo}</Item>
            </TodoContent>
            )
          })
        }
        </List>
        
      </Content>
    </Container>
  )
}