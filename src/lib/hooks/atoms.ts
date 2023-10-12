import { RecoilState, atom } from "recoil";
// import { recoilPersist } from "recoil-persist";
import toggleDataTheme from "../../utils/toggleDataTheme.utils";
import { NoteData } from "../../ui/molecules/cards/note.card";

// const { persistAtom } = recoilPersist();

const notesState = atom<NoteData[]>({
  key: "notes",
  default: [],
  // effects_UNSTABLE: [persistAtom],
});

const themeState: RecoilState<boolean> = atom({
  key: "themePalette",
  default: toggleDataTheme() === "light" ? true : false, // true ? light : dark
});

export { notesState, themeState };
