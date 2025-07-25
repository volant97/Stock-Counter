import { atom } from "recoil";

export const allSortedState = atom<boolean>({
  key: "allSortedState",
  default: false,
});
