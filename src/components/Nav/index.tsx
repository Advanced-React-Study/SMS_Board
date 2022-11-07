import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IsLoginAtom } from '../../stores/atom';
import { KEY_IS_LOGIN } from '../../utils/constants';
import Button from '../Button';
import { Logo, NavLayout } from './style';

const useNav = () => {
  const setIsLogin = useSetRecoilState(IsLoginAtom);

  const logout = () => {
    localStorage.removeItem(KEY_IS_LOGIN);
    setIsLogin(false);
  };

  return {
    state: {},
    operator: {
      logout,
    },
  };
}

const Nav = () => {
  const { operator } = useNav();

  return (
    <NavLayout>
      <Logo to={'/'}>React Study</Logo>
      <Button variant={'text'} onClick={operator.logout}>Logout</Button>
    </NavLayout>
  );
}

export default Nav;
