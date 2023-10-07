import CONSTANTS from "../../test/constants.test";
import SwitchTheme from "../switchTheme";

const Header = () => {
  return (
    <header data-testid={CONSTANTS.COMPONENT.HEADER.TEST_ID_HEADER}>
      <SwitchTheme />
    </header>
  );
};

export default Header;
