import { ThemeProvider } from "styled-components";
import Home from "./pages";
import Themes from "./utils/themes.utils";
import styled from "styled-components";
import { useGetSwitchTheme } from "./lib/hooks";

const Main = styled.main`
  background-color: ${({ theme }) => theme.background_color};
  height: 100vh;
  background-repeat: no-repeat;
  background-image: url(${({ theme }) => theme.background_image_mobile});

  @media (min-width: 375px) {
    background-image: url(${({ theme }) => theme.background_image_desktop});
  }
`;

function App() {
  const theme = useGetSwitchTheme();

  return (
    <ThemeProvider theme={Themes[theme ? "light" : "dark"]}>
      <Main data-testid="main">
        <Home />
      </Main>
    </ThemeProvider>
  );
}

export default App;
