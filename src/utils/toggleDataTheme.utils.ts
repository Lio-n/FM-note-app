import { getLocalStorage, persistLocalStorage } from "./localStorage.utils";

/**
 * @desc Manipulate the 'data-theme' property from '<html>', also, save the value of 'data-theme' with localStorage, and get the custom 'theme' from the localStorage, which is use for the atom 'themeState', use that data to define the initial value.
 *
 * @param {string|undefined} customTheme
 */
const toggleDataTheme = (customTheme?: string | undefined): string => {
  if (!customTheme) {
    // This is only use one time.
    const storedTheme = getLocalStorage("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    if (storedTheme) document.documentElement.setAttribute("data-theme", storedTheme);
    persistLocalStorage("theme", storedTheme);

    return storedTheme;
  }

  document.documentElement.setAttribute("data-theme", customTheme);

  persistLocalStorage("theme", customTheme);

  return customTheme;
};

export default toggleDataTheme;
