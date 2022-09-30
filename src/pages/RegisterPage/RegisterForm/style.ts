import styled from "styled-components";
import { Button } from "../../../components";

export const RegisterFormLayout = styled.div`
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
