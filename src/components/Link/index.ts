import styled from 'styled-components';
import { Link as BaseLink } from 'react-router-dom';

interface Props {
  bold?: boolean;
  hover?: boolean;
  sz?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  variant?: 'contained' | 'outlined' | 'text';
}

const Link = styled(BaseLink)<Props>`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-weight: ${(props) => props.bold ? 700 : 400};
  ${(props) => {
    const { variant = 'outlined' } = props;

    switch (variant) {
      case 'contained':
        return `
          border: 0;
          background: #000;
          color: #fff;
          text-decoration: none;
        `;
      case 'outlined':
        return `
          border: 1px solid #000;
          background: #fff;
          color: #000;
          text-decoration: none;
          ${props.hover ? `
            transition: .2s;
            &:hover {
              background: #000;
              color: #fff;
            }
          ` : ''}
        `;
      case 'text':
        return `
          border: 0;
          background: transparent;
          color: #000;
          text-decoration: underline;
        `;
    }
  }}
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

export default Link;
