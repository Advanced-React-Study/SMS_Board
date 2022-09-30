import React from 'react';
import Title from '../../components/Title';
import RegisterForm from './RegisterForm';
import { Layout, Logo, LogoWrap, TitleWrap } from './style';

function RegisterPage() {
  return (
    <Layout>
      <LogoWrap>
        <Logo to={'/'}>React Study</Logo>
      </LogoWrap>
      <TitleWrap>
        <Title sz={'xl'} bold>Sign up</Title>
      </TitleWrap>
      <RegisterForm />
    </Layout>
  );
}

export default RegisterPage;
