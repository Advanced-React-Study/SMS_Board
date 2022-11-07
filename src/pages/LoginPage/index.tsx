import React from 'react';
import { FlexWrap, Link, Title } from '../../components';
import LoginForm from './LoginForm';
import { Layout, SubMenuWrap, TitleWrap, LoginWrap, SideWrap } from './style';

function LoginPage() {
  return (
    <Layout>
      <FlexWrap alignItems={'center'} justifyContent={'center'}>
        <LoginWrap>
          <TitleWrap>
            <Title sz={'xl'} bold>로그인</Title>
          </TitleWrap>
          <LoginForm />
          <SubMenuWrap>
            <Link to={'/'} hover variant={'text'} bold>비밀번호 찾기</Link>
            <Link to={'/register'} variant={'text'} bold>회원가입</Link>
          </SubMenuWrap>
        </LoginWrap>
      </FlexWrap>
      <SideWrap />
    </Layout>
  );
}

export default LoginPage;