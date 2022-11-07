import React, { ChangeEvent, KeyboardEvent, useId } from 'react';
import TextArea from '../TextArea';
import { TextAreaFormLayout, TextAreaFormLabel } from './style'

interface Props {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  validation?: boolean;
  rows?: number;
}

const TextAreaForm = (props: Props) => {
  const { label = '', placeholder = '', value, onChange, onKeyDown, validation = true, rows = 10 } = props;

  const id = useId();

  return (
    <TextAreaFormLayout>
      {label && <TextAreaFormLabel htmlFor={id}>{label}</TextAreaFormLabel>}
      <TextArea id={id} placeholder={placeholder} value={value} onChange={onChange} onKeyDown={onKeyDown} borderColor={validation ? 'default' : 'error'} rows={rows} />
    </TextAreaFormLayout>
  )
}

export default TextAreaForm;
