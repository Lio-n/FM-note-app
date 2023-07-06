import { useSwitchTheme } from "../../lib/hooks";
import { MoonIcon } from "../../ui/atoms/icons/moon";
import { SunIcon } from "../../ui/atoms/icons/sun";
import toggleDataTheme from "../../utils/toggleDataTheme.utils";

const SwitchTheme = () => {
  const [theme, setTheme] = useSwitchTheme();

  const handleChangeTheme = (): void => {
    setTheme(!theme);

    toggleDataTheme(!theme ? "light" : "dark");
  };

  return (
    <div data-testid="switchTheme" onClick={handleChangeTheme} aria-label={`Switch to ${theme ? "light" : "dark"} mode`}>
      {theme ? <MoonIcon /> : <SunIcon />}
    </div>
  );
};

export default SwitchTheme;
