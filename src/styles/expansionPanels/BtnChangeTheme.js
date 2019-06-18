import styled from "styled-components";

const BtnChangeTheme = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  height: 30px;
  background-color: #2196f3;
  border: 0;
  font-size: 16px;
  cursor: pointer;
  &:active {
    background-color: blue;
  }
`;

export default BtnChangeTheme;
