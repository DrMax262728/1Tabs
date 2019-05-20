import styled, { css } from "styled-components";

export default styled.button`
  background-color: #2196f3;
  border: 1px solid #2196f3;
  padding: 15px 15px;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  text-transform: uppercase;
  font-weight: 600;
  width: 150px;
  color: lightgrey;
  ${props =>
    props.active &&
    css`
      border-bottom: 2px rgb(225, 0, 80) solid;
      color: #fff;
    `}
`;
