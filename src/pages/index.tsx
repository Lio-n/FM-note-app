import Header from "../components/Header";
import BoxTodo from "../components/boxTodo/boxTodo";
import { CheckButton } from "../ui/molecules/buttons/check.button";
import { useState } from "react";
import styled from "styled-components";

const ContentBox = styled.div`
  width: 50vw;
  min-width: 22rem;
  height: 100vh;
  padding: 5rem 0;
  margin: 0 auto;
`;
const Home = () => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      <ContentBox>
        <Header />
        <CheckButton isCompleted={check} onClick={() => setCheck(!check)} />
        <BoxTodo />
      </ContentBox>
    </>
  );
};

export default Home;
