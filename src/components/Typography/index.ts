import styled from "styled-components";

interface Props {
  sz?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'xxxxxl';
  bold?: boolean;
}

const Typography = styled.span<Props>`
  font-weight: ${(props) => props.bold ? 700 : 400};
  ${(props) => {
    const { sz = 'md' } = props;

    switch (sz) {
      case 'xxs':
        return `
          font-size: 10px;
        `;
      case 'xs':
        return `
          font-size: 12px;
        `;
      case 'sm':
        return `
          font-size: 14px;
        `;
      case 'md':
        return `
          font-size: 16px;
        `;
      case 'lg':
        return `
          font-size: 18px;
        `;
      case 'xl':
        return `
          font-size: 20px;
        `;
      case 'xxl':
        return `
          font-size: 22px;
        `;
      case 'xxxl':
        return `
          font-size: 24px;
        `;
      case 'xxxxl':
        return `
          font-size: 26px;
        `;
      case 'xxxxxl':
        return `
          font-size: 28px;
        `;
    }
  }}
`;

export default Typography;
