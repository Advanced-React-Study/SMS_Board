import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerAPI } from '../../../api/user';
import { Button, InputForm } from '../../../components';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../../utils/constants';
import { RegisterFormLayout } from './style';

const useRegisterForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [emailValidation, setEmailValidation] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [passwordValidation, setPasswordValidation] = useState<boolean>(true);
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [confirmPasswordValidation, setConfirmPasswordValidation] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [nameValidation, setNameValidation] = useState<boolean>(true);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setEmail(value);
    setEmailValidation(EMAIL_REGEX.test(value));
  }

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setPassword(value);
    setPasswordValidation(PASSWORD_REGEX.test(value));
  }

  const onChangeConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setConfirmPassword(value);
    setConfirmPasswordValidation(value === password);
  }

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setName(value);
    setNameValidation(!!value);
  }

  const register = async () => {
    if (!EMAIL_REGEX.test(email)) {
      setEmailValidation(false);
      alert('Incorrect email format');
      return;
    }

    if (!PASSWORD_REGEX.test(password)) {
      setPasswordValidation(false);
      alert('The password can only be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordValidation(false);
      alert('Password and password confirmation do not match');
      return;
    }

    if (!name) {
      setNameValidation(false);
      alert('Name is required');
      return;
    }

    try {
      await registerAPI(email, password, name);
      navigate('/');
    } catch (e) {
      console.log(e);
      alert('failed to login');
    }
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (key === "Enter") register();
  }

  return {
    state: {
      email,
      emailValidation,
      password,
      passwordValidation,
      confirmPassword,
      confirmPasswordValidation,
      name,
      nameValidation,
    },
    operator: {
      onChangeEmail,
      onChangePassword,
      onChangeConfirmPassword,
      onChangeName,
      register,
      onKeyDown,
    }
  };
}

const RegisterForm = () => {
  const { state, operator } = useRegisterForm();

  return (
    <RegisterFormLayout>
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
      <InputForm
        type={'password'}
        label={'Confirm Password'}
        placeholder={'******'}
        value={state.confirmPassword}
        onChange={operator.onChangeConfirmPassword}
        onKeyDown={operator.onKeyDown}
        validation={state.confirmPasswordValidation}
      />
      <InputForm
        label={'Name'}
        placeholder={'John Doe'}
        value={state.name}
        onChange={operator.onChangeName}
        onKeyDown={operator.onKeyDown}
        validation={state.nameValidation}
      />
      <Button bold hover variant={'outlined'} onClick={operator.register}>Sign up</Button>
    </RegisterFormLayout>
  );
}

export default RegisterForm;
