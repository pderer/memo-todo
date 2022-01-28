import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
  async function fetchTodo() {
    try {
      const res = await axios.get("http://localhost:4000/todo");
      setTodos(res.data);
      nextId.current = res.data.length + 1;
    } catch (e: unknown) {
      if (e instanceof Error) console.error(e.message);
    }
  }
  useEffect(() => {
    fetchTodo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onInsert = useCallback(
    (text: string) => {
      if (text.length > 0) {
        const todo = { id: nextId.current, text, checked: false };
        console.log(todo);
        axios
          .post("http://localhost:4000/todo", todo)
          .then((result) => console.log(result));
        setTodos(todos.concat(todo));
        nextId.current += 1;
      }
    },
    [todos]
  );
  const onRemove = useCallback(
    (id: number) => {
      axios
        .delete("http://localhost:4000/todo", { data: { id } })
        .then((result) => console.log(result));
      setTodos(todos.filter((todo) => todo.id !== id));
      nextId.current -= 1;
    },
    [todos]
  );
  const onToggle = useCallback(
    (id: number) => {
      axios
        .patch("http://localhost:4000/todo", { data: { id } })
        .then((result) => console.log(result));
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
