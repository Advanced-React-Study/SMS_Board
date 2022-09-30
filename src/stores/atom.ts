import { atom } from "recoil";
import { KEY_IS_LOGIN } from "../utils/constants";

interface UserList {
  email: string;
  password: string;
  name: string;
}

export const UserListAtom = atom<UserList[]>({
  key: 'UserListAtom',
  default: [],
});

export const IsLoginAtom = atom<boolean>({
  key: 'IsLoginAtom',
  default: localStorage.getItem(KEY_IS_LOGIN) === '1',
});
