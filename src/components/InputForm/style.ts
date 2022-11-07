import { memo } from 'react';
import styled from 'styled-components';
import Input from '../Input';

export const InputFormLayout = styled.div`
  & > ${Input} {
    margin-top: 4px;
    width: 100%;
  }
`;

export const InputFormLabel = memo(styled.label`
  color: #3a3a3a;
  font-size: 12px;
`);
