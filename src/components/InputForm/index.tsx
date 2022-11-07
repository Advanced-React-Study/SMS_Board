import React, { ChangeEvent, KeyboardEvent, useId } from 'react';
import Input from '../Input';
import { InputFormLayout, InputFormLabel } from './style';

interface Props {
  label?: string;
  type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  validation?: boolean;
}

const InputForm = (props: Props) => {
  const { label = '', type = 'text', placeholder = '', value, onChange, onKeyDown, validation = true } = props;

  const id = useId();

  return (
    <InputFormLayout>
      {label && <InputFormLabel htmlFor={id}>{label}</InputFormLabel>}
      <Input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} onKeyDown={onKeyDown} borderColor={validation ? 'default' : 'error'} />
    </InputFormLayout>
  )
}

export default InputForm;
