import styled, { css } from "styled-components";

export default styled.div`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  ${props =>
    props.active &&
    css`
      margin: 16px 0;

      &:first-child {
        margin-top: 0;
      }
    `}
`;
