import React from "react";
import { HeaderBar, InputAddTodo } from "./styles/HeaderStyle";

export function Header() {
  return (
    <HeaderBar>
      <InputAddTodo type="text" placeholder="Add new Task" />
    </HeaderBar>
  )
}