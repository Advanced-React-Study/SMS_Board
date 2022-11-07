import { atom } from "recoil";
import { KEY_BOARD_LIST, KEY_IS_LOGIN } from "../utils/constants";

export const IsLoginAtom = atom<boolean>({
  key: 'IsLoginAtom',
  default: localStorage.getItem(KEY_IS_LOGIN) === '1',
});

export interface Board {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export const BoardListAtom = atom<Board[]>({
  key: 'BoardAtom',
  default: JSON.parse(localStorage.getItem(KEY_BOARD_LIST) || "[]"),
});
