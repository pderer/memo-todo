import styled from "styled-components";
import { TodoType } from "../routes/Todos";
import TodoListItem from "./TodoListItem";

type TodoListProps = {
  todos: TodoType[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};
const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default function TodoList({ todos, onRemove, onToggle }: TodoListProps) {
  return (
    <Vertical>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </Vertical>
  );
}
