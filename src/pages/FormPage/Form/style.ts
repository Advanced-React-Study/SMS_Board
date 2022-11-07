import styled from "styled-components";

export const FormLayout = styled.div`
  width: 100%;
  &> * {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
