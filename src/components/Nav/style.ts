import styled from "styled-components";
import Link from "../Link";

export const NavLayout = styled.div`
  margin: 0 auto;
  padding: 24px 0;
  max-width: 1080px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  border: 0;
  width: fit-content;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
`;
