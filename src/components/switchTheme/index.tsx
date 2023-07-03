import { useSwitchTheme } from "../../lib/hooks";
import { MoonIcon } from "../../ui/atoms/icons/moon";
import { SunIcon } from "../../ui/atoms/icons/sun";

const SwitchTheme = () => {
  const [theme, setTheme] = useSwitchTheme();

  const handleChangeTheme = (): void => setTheme(!theme);

  return (
    <div data-testid="switchTheme" onClick={handleChangeTheme}>
      {theme ? <MoonIcon /> : <SunIcon />}
    </div>
  );
};

export default SwitchTheme;
