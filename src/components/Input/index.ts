import styled from 'styled-components';

interface Props {
  sz?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  borderColor?: 'default' | 'error';
}

const Input = styled.input<Props>`
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
          padding: 0 4px;
          height: 24px;
          font-size: 10px;
        `;
      case 'xxs':
        return `
          padding: 0 8px;
          height: 28px;
          font-size: 12px;
        `
      case 'xs':
        return `
          padding: 0 8px;
          height: 32px;
          font-size: 12px;
        `
      case 'sm':
        return `
          padding: 0 12px;
          height: 36px;
          font-size: 12px;
        `;
      case 'md':
        return `
          padding: 0 16px;
          height: 40px;
          font-size: 12px;
        `;
      case 'lg':
        return `
          padding: 0 20px;
          height: 44px;
          font-size: 14px;
        `;
      case 'xl':
        return `
          padding: 0 24px;
          height: 48px;
          font-size: 14px;
        `;
      case 'xxl':
        return `
          padding: 0 28px;
          height: 52px;
          fonts-size: 14px;
        `;
      case 'xxxl':
        return `
          padding: 0 32px;
          height: 56px;
          font-size: 16px;
        `;
    }
  }}
`;

export default Input;