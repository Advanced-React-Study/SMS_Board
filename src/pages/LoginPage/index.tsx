import React from 'react';
import { FlexWrap, Link } from '../../components';
import LoginForm from './LoginForm';
import { Layout, LoginMenu, LoginTitle, LoginWrap, SideWrap } from './style';

function LoginPage() {
  return (
    <Layout>
      <FlexWrap alignItems={'center'} justifyContent={'center'}>
        <LoginWrap>
          <LoginTitle>
            로그인
          </LoginTitle>
          <LoginForm />
          <LoginMenu>
            <Link to={'/'} hover variant={'text'} bold>비밀번호 찾기</Link>
            <Link to={'/'} variant={'text'} bold>회원가입</Link>
          </LoginMenu>
        </LoginWrap>
      </FlexWrap>
      <SideWrap />
    </Layout>
  );
}

export default LoginPage;