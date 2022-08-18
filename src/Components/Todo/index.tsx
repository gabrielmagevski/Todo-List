import React, { FormEvent, useEffect, useState } from "react";
import { Container } from "../../styles/Global";
import { HeaderBar, InputAddTodo } from "../Header/styles/HeaderStyle";
import {
Content,
Check,
Item,
TitleContent,
Title,
TodoContent,
List,
Button,
Form
} from "./styles/todoStyle";


export function Todo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleCreateTodo = (newTodo: string) => {
    if(newTodo === '') {
      return;
    } 
    else {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }

  }

  //Fix after
  useEffect(() => {
    return localStorage.setItem('Todos:', JSON.stringify(todos));
  }, [todos]);


  const HandleAddTodo = (e: FormEvent) => {
    e.preventDefault();

    handleCreateTodo(newTodo);
  }

  return (
    <Container> 
      <HeaderBar>
        <Form onSubmit={HandleAddTodo}>
          <InputAddTodo
            type="text"
            placeholder="Add new Task"
            value={newTodo}
            onChange={handleValue}
          />
          <Button>New Task</Button>
        </Form>
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