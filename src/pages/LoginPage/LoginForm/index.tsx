import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Button from '../../../components/Button'
import InputForm from '../../../components/InputForm'
import { IsLoginAtom, UserListAtom } from '../../../stores/atom';
import { EMAIL_REGEX } from '../../../utils/constants';
import { LoginFormLayout } from './style';

const useLoginForm = () => {
  const userList = useRecoilValue(UserListAtom);
  const setIsLogin = useSetRecoilState(IsLoginAtom);
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
    if (!EMAIL_REGEX.test(email)) {
      setEmailValidation(false);
      alert('Incorrect email format');
      return;
    }

    if (!password) {
      setPasswordValidation(false);
      alert('Password is required');
      return;
    }

    const user = userList.find((user) => user.email === email && user.password === password);
    if (!user) {
      alert('Please check your email or password again. You\'ve entered a wrong email or password.');
      return;
    }

    setIsLogin(true);
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