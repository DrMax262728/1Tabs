import React from "react";
import Table from "../../styles/simpleTable/Table";
import Th from "../../styles/simpleTable/Th";
import Td from "../../styles/simpleTable/Td";
import TableHead from "../../styles/simpleTable/TableHead";
import TableBody from "../../styles/simpleTable/TableBody";
import Row from "../../styles/simpleTable/Row";

const SimpleTable = ({ data, columns }) => {
  let params = columns.slice(1);
  params = params.map(elem => elem.toLowerCase().replace(" ", "_"));
  const prefix = "-table";
  return (
    <Table>
      <TableHead>
        <Row>
          {columns.map((item, index) => (
            <Th key={index + prefix}>{item}</Th>
          ))}
        </Row>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <Row key={index + prefix}>
            <Th>{row.name}</Th>
            {params.map((param, index) => (
              <Td key={index + prefix}>{row[param]}</Td>
            ))}
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};

export default SimpleTable;
