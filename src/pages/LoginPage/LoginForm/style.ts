import styled from "styled-components";
import { Button } from "../../../components";

export const LoginFormLayout = styled.div`
  & > * {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  & > ${Button} {
    width: 100%;
  }
`;
