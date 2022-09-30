import { Link } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled.div`
  margin: 0 auto;
  padding: 30px 12px 64px;
  width: 468px;
`;

export const LogoWrap = styled.div`
  margin-bottom: 60px;
`;

export const Logo = styled(Link)`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
`;

export const TitleWrap = styled.div`
  margin-bottom: 20px;
`;
