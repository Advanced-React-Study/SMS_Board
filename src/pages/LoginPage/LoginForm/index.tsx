import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginAPI } from '../../../api/user';
import Button from '../../../components/Button'
import InputForm from '../../../components/InputForm'
import { IsLoginAtom } from '../../../stores/atom';
import { EMAIL_REGEX, KEY_IS_LOGIN } from '../../../utils/constants';
import { LoginFormLayout } from './style';

const useLoginForm = () => {
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

  const login = async () => {
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

    try {
      await loginAPI(email, password);
      localStorage.setItem(KEY_IS_LOGIN, '1');
      setIsLogin(true);
    } catch (e: any) {
      alert('failed to login');
    }
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