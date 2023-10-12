import CONSTANTS from "../../test/constants";
import Title from "../../ui/atoms/texts/title.text";
import FormTodo from "../formTodo/formTodo";
import SwitchTheme from "../switchTheme";

const Header = () => {
  return (
    <header data-testid={CONSTANTS.COMPONENT.HEADER.TEST_ID_HEADER}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <Title children="TODO" />
        <SwitchTheme />
      </div>
      <FormTodo />
    </header>
  );
};

export default Header;
