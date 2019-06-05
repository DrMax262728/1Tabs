import styled from "styled-components";

export const Table = styled.table`
  font-size: 13px;
  width: 100%;
`;

export const TableHead = styled.thead`
  color: rgba(0, 0, 0, 0.54);
`;

export const TableBody = styled.tbody`
  font-size: 15px;
`;

export const Tr = styled.tr`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  border-bottom: 1px solid #eeeeee;
  min-height: 40px;
`;

export const Td = styled.td`
  font-weight: normal;
  text-align: right;
  &:first-child {
    text-align: left;
  }
`;

export const Th = styled.th`
  font-weight: normal;
  text-align: right;
  &:first-child {
    text-align: left;
  }
`;
