import styled from "styled-components";
import { Button, Link } from "../../../components";

export const ListLayout = styled.div`
  width: 100%;
`;

export const ListHeaderWrap = styled.div`
  margin-bottom: 4px;
  border-bottom: 1px solid #cacaca;
  padding: 10px 20px;
  width: 100%;
  display: flex;
  & > * {
    flex: 1;
    text-align: center;
    &:first-child {
      flex: 4;
      text-align: left;
    }
  }
`;

export const ListItemWrap = styled(Link)`
  margin-bottom: 8px;
  border: 0;
  border-radius: 8px;
  padding: 30px 20px;
  width: 100%;
  align-items: center;
  display: flex;
  transition: .3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  & > * {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    text-align: center;
    &:first-child {
      display: block;
      flex: 4;
      text-align: left;
    }
  }
  & > ${Button}, & > ${Link} {
    padding: 0;
  }
`;
