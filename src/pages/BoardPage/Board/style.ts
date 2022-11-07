import styled from "styled-components";

export const BoardLayout = styled.div`
  & > * {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const BoardInfoWrap = styled.div`
  width: 100%;
  text-align: right;
`;
