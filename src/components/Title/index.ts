import styled from "styled-components";

interface Props {
  sz?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'xxxxxl';
  bold?: boolean;
}

const Title = styled.p<Props>`
  font-weight: ${(props) => props.bold ? 700 : 400};
  ${(props) => {
    const { sz = 'md' } = props;

    switch (sz) {
      case 'xxs':
        return `
          font-size: 12px;
        `;
      case 'xs':
        return `
          font-size: 14px;
        `;
      case 'sm':
        return `
          font-size: 16px;
        `;
      case 'md':
        return `
          font-size: 18px;
        `;
      case 'lg':
        return `
          font-size: 21px;
        `;
      case 'xl':
        return `
          font-size: 24px;
        `;
      case 'xxl':
        return `
          font-size: 36px;
        `;
      case 'xxxl':
        return `
          font-size: 48px;
        `;
      case 'xxxxl':
        return `
          font-size: 60px;
        `;
      case 'xxxxxl':
        return `
          font-size: 72px;
        `;
    }
  }}
`;

export default Title;
