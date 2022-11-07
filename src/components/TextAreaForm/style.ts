import { memo } from 'react';
import styled from 'styled-components';
import TextArea from '../TextArea';

export const TextAreaFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  & > ${TextArea} {
    margin-top: 4px;
    width: 100%;
  }
`;

export const TextAreaFormLabel = memo(styled.label`
  color: #3a3a3a;
  font-size: 12px;
`);
