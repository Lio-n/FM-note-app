import { useRecoilState, useRecoilValue } from "recoil";
import { notesState, themeState } from "./atoms";

const useNotes = () => useRecoilState(notesState);
const useSwitchTheme = () => useRecoilState(themeState);

const useGetSwitchTheme = () => useRecoilValue(themeState);

export { useNotes, useSwitchTheme, useGetSwitchTheme };
