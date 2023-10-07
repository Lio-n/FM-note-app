import Header from "../components/Header";
import FormTodo from "../components/formTodo/formTodo";
import Body from "../ui/atoms/texts/body.text";
import Title from "../ui/atoms/texts/title.text";
import { CheckButton } from "../ui/molecules/buttons/check.button";
import { useState } from "react";

const Home = () => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      {/* <Wallpaper /> */}
      <Header />
      <CheckButton isCompleted={check} onClick={() => setCheck(!check)} />
      <FormTodo />

      <Title>Lorem ipsum</Title>
      <h2>Lorem ipsum</h2>
      <h3>Lorem ipsum</h3>
      <Body>Lorem ipsum</Body>
    </>
  );
};

export default Home;
