import styled from 'styled-components';

interface Props {
  alignItems?: 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'baseline' | 'inherit';
  justifyContent?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'inherit';
}

const FlexWrap = styled.div<Props>`
  align-items: ${(props) => props.alignItems || 'normal'};
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'start'};
`;

export default FlexWrap;