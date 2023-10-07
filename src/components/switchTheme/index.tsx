import { useSwitchTheme } from "../../lib/hooks";
import CONSTANTS from "../../test/constants.test";
import { MoonIcon } from "../../ui/atoms/icons/moon.icon";
import { SunIcon } from "../../ui/atoms/icons/sun.icon";
import toggleDataTheme from "../../utils/toggleDataTheme.utils";

const SwitchTheme = () => {
  const [theme, setTheme] = useSwitchTheme();

  const handleChangeTheme = (): void => {
    setTheme(!theme);

    toggleDataTheme(!theme ? "light" : "dark");
  };

  return (
    <div
      data-testid={CONSTANTS.COMPONENT.SWITCH_THEME.TEST_ID_SWITCH_THEME}
      onClick={handleChangeTheme}
      aria-label={`Switch to ${theme ? "light" : "dark"} mode`}
      style={{ cursor: "pointer", display: "inline-flex" }}>
      {theme ? <MoonIcon /> : <SunIcon />}
    </div>
  );
};

export default SwitchTheme;
