import {
  BorderOutlined,
  CheckSquareOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import styled, { css } from "styled-components";
import { TodoType } from "../routes/Todos";

type TodoListItemProps = {
  todo: TodoType;
  key: number;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const Wrapper = styled.div`
  display: flex;
  width: 27%;
  justify-content: space-between;
  align-items: center;
`;

const CheckandText = styled.div<{ toggle: boolean }>`
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  align-items: center;
  ${(props) =>
    props.toggle === true &&
    css`
      svg {
        color: #22b8cf;
      }
      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
    `}
`;

const Text = styled.div``;

export default function TodoListItem({
  todo,
  onRemove,
  onToggle,
}: TodoListItemProps) {
  const { id, text, checked } = todo;
  return (
    <Wrapper>
      <CheckandText toggle={checked} onClick={() => onToggle(id)}>
        {checked ? <CheckSquareOutlined /> : <BorderOutlined />}
        <Text className="text">{text}</Text>
      </CheckandText>
      <MinusCircleOutlined onClick={() => onRemove(id)} />
    </Wrapper>
  );
}
