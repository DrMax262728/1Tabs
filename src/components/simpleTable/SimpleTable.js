import React from "react";
import Table from "../../styles/simpleTable/Table";
import Th from "../../styles/simpleTable/Th";
import Td from "../../styles/simpleTable/Td";
import TableHead from "../../styles/simpleTable/TableHead";
import TableBody from "../../styles/simpleTable/TableBody";
import { dataTable, dataTableHeaders, params } from "../../constants";
import Row from "../../styles/simpleTable/Row";

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
            {params.map(param => (
              <Td>{row[param]}</Td>
            ))}
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};

export default SimpleTable;
