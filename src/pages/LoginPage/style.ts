import styled from 'styled-components';
import Background1 from '/background1.jpg';
import Background2 from '/background2.jpg';
import Background3 from '/background3.jpg';
import Background4 from '/background4.jpg';
import Background5 from '/background5.jpg';
import Background6 from '/background6.jpg';
import Background7 from '/background7.jpg';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  & > * {
    flex: 1;
  }
`;

export const LoginWrap = styled.div`
  padding: 0 30px;
  max-width: 436px;
  width: 100%;
  & > * {
    margin-bottom: 8px;
  }
`;

export const LoginTitle = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 900;
`

export const LoginMenu = styled.div`
  display: flex;
  justify-content: right;
  gap: 4px;
`;

const backgrounds = [Background1, Background2, Background3, Background4, Background5, Background6, Background7];

export const SideWrap = styled.div`
  background-image: url(${backgrounds[Math.floor(Math.random() * 7)]});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
