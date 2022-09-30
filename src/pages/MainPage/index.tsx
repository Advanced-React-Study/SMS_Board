import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IsLoginAtom } from '../../stores/atom';

function MainPage() {
  const setIsLogin = useSetRecoilState(IsLoginAtom);

  const logout = () => {
    setIsLogin(false);
  }

  return (
    <button onClick={logout}>로그아웃</button>
  );
}

export default MainPage;
