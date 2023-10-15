import Header from "../components/Header";
import BoxTodo from "../components/boxTodo/boxTodo";
import styled from "styled-components";

const ContentBox = styled.div`
  display: grid;
  gap: 2rem;
  width: 50vw;

  min-width: 22rem;
  height: 100vh;
  padding: 5rem 0;

  margin: 0 auto;
`;

const Home = () => {

  return (
    <>
      <ContentBox>
        <Header />
        <BoxTodo />
      </ContentBox>
    </>
  );
};

export default Home;
