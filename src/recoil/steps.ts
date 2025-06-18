import { atom } from "recoil";

export const stepsState = atom<number>({
  key: "stepsState",
  default: 1,
});
