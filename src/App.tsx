import { ThemeProvider } from "styled-components";
import Home from "./pages";
import Themes from "./utils/themes.utils";
import styled from "styled-components";
import { useSwitchTheme } from "./lib/hooks";

const Main = styled.main`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

function App() {
  const [theme, setTheme] = useSwitchTheme();

  return (
    <ThemeProvider theme={Themes[theme ? "light" : "dark"]}>
      <Main data-testid="main">
        <Home />
      </Main>
    </ThemeProvider>
  );
}

export default App;
