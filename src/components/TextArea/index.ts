import styled from "styled-components";

interface Props {
  sz?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  borderColor?: 'default' | 'error';
}

const TextArea = styled.textarea<Props>`
  padding: 8px;
  width: 100%;
  border: 1px solid ${(props) => {
    const { borderColor = 'default' } = props;

    switch (borderColor) {
      case 'default':
        return '#cacaca';
      case 'error':
        return '#d32f2f'
    }
  }};
  ${(props) => {
    const { sz = 'md' } = props;

    switch (sz) {
      case 'xxxs':
        return `
          font-size: 10px;
        `;
      case 'xxs':
        return `
          font-size: 12px;
        `
      case 'xs':
        return `
          font-size: 12px;
        `
      case 'sm':
        return `
          font-size: 12px;
        `;
      case 'md':
        return `
          font-size: 12px;
        `;
      case 'lg':
        return `
          font-size: 14px;
        `;
      case 'xl':
        return `
          font-size: 14px;
        `;
      case 'xxl':
        return `
          fonts-size: 14px;
        `;
      case 'xxxl':
        return `
          font-size: 16px;
        `;
    }
  }}
`;

export default TextArea;
