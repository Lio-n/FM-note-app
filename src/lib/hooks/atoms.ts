import { RecoilState, atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const notesState = atom({
  key: "notes",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

const themeState: RecoilState<boolean> = atom({
  key: "themePalette",
  default: true, // true ? dark : light
});

export { notesState, themeState };
