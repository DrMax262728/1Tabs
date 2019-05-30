import React from "react";
import Table from "../../styles/simpleTable/Table";
import Th from "../../styles/simpleTable/Th";
import TableHead from "../../styles/simpleTable/TableHead";
import TableBody from "../../styles/simpleTable/TableBody";
import { dataTable, dataTableHeaders } from "../../constants";
import Row from "../../styles/simpleTable/Row";
import Td from "../../styles/simpleTable/Td";

const SimpleTable = () => {
  return (
    <Table>
      <TableHead>
        <Row>
          {dataTableHeaders.map(item => (
            <Th>{item}</Th>
          ))}
        </Row>
      </TableHead>
      <TableBody>
        {dataTable.map(row => (
          <Row>
            <Th>{row.name}</Th>
            <Td>{row.height}</Td>
            <Td>{row.mass}</Td>
            <Td>{row.hair_color}</Td>
            <Td>{row.skin_color}</Td>
            <Td>{row.eye_color}</Td>
            <Td>{row.birth_year}</Td>
            <Td>{row.gender}</Td>
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};

export default SimpleTable;
