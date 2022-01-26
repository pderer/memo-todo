import { Link } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainText = styled.div`
  font-size: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.div`
  font-size: 16px;
`;

export default function Header() {
  return (
    <Wrapper>
      <MainText>Memo & Todo</MainText>
      <ButtonWrapper>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/memo">
          <Button>Memo</Button>
        </Link>
        <Link to="/todo">
          <Button>Todo</Button>
        </Link>
      </ButtonWrapper>
    </Wrapper>
  );
}
