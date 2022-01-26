import { DownloadOutlined } from "@ant-design/icons";
import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";

export type TodoType = {
  id: number;
  text: string;
  checked: boolean;
};
export default function Todos() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const nextId = useRef(1);
  const onInsert = useCallback(
    (text: string) => {
      if (text.length > 0) {
        const todo = { id: nextId.current, text, checked: false };
        setTodos(todos.concat(todo));
        nextId.current += 1;
      }
    },
    [todos]
  );
  const onRemove = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );
  const onToggle = useCallback(
    (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );
  return (
    <>
      <Header />
      <div>
        <hr />
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </div>
    </>
  );
}
