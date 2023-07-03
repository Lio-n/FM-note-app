import { useRecoilState } from "recoil";
import { notesState, themeState } from "./atoms";

const useNotes = () => useRecoilState(notesState);
const useSwitchTheme = () => useRecoilState(themeState);

export { useNotes, useSwitchTheme };
