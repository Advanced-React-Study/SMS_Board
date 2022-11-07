import styled from 'styled-components';
import { Link } from '../../components';

export const Layout = styled.div`

`;

export const ContentWrap = styled.div`
  margin: 0 auto;
  padding: 24px 8px;
  max-width: 1080px;
  width: 100%;
  & > ${Link} {
    margin-bottom: 20px;
    width: fit-content;
    margin-left: auto;
  }
`;
