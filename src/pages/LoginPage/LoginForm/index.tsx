import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import Button from '../../../components/Button'
import InputForm from '../../../components/InputForm'
import { LoginFormLayout } from './style';

const EMAIL_REGEX = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const useLoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [emailValidation, setEmailValidation] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [passwordValidation, setPasswordValidation] = useState<boolean>(true);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setEmail(value);
    setEmailValidation(EMAIL_REGEX.test(value));
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setPassword(value);
    setPasswordValidation(!!value);
  }

  const login = () => {
    // TODO: 로그인 기능 구현
    if (!email || !EMAIL_REGEX.test(email)) {
      setEmailValidation(false);
      alert('알맞지 않은 이메일 형식입니다');
      return;
    }

    if (!password) {
      setPasswordValidation(false);
      alert('비밀번호를 입력해주세요');
      return;
    }

    alert('로그인');
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (key === "Enter") login();
  }

  return {
    state: {
      email,
      emailValidation,
      password,
      passwordValidation,
    },
    operator: {
      onChangeEmail,
      onChangePassword,
      login,
      onKeyDown,
    }
  }
}

const LoginForm = () => {
  const { state, operator } = useLoginForm();

  return (
    <LoginFormLayout>
      <InputForm
        label={'Email Address'}
        placeholder={'example@naver.com'}
        value={state.email}
        onChange={operator.onChangeEmail}
        onKeyDown={operator.onKeyDown}
        validation={state.emailValidation}
      />
      <InputForm
        type={'password'}
        label={'Password'}
        placeholder={'******'}
        value={state.password}
        onChange={operator.onChangePassword}
        onKeyDown={operator.onKeyDown}
        validation={state.passwordValidation}
      />
      <Button bold hover variant={'outlined'} onClick={operator.login}>로그인</Button>
    </LoginFormLayout>
  )
}

export default LoginForm