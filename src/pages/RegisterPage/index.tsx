import React from 'react';
import { Title } from '../../components';
import RegisterForm from './RegisterForm';
import { Layout, TitleWrap } from './style';

function RegisterPage() {
  return (
    <Layout>
      <TitleWrap>
        <Title sz={'xl'} bold>Sign up</Title>
      </TitleWrap>
      <RegisterForm />
    </Layout>
  );
}

export default RegisterPage;
