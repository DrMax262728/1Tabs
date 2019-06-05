import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  Tr,
  Th,
  Td
} from "../../styles/simpleTable/Table";

const SimpleTable = ({ data, columns }) => {
  let params = columns.slice(1);
  params = params.map(elem => elem.toLowerCase().replace(" ", "_"));
  const prefix = "table";
  return (
    <Table>
      <TableHead>
        <Tr>
          {columns.map((item, index) => (
            <Th key={index + "-header-" + prefix}>{item}</Th>
          ))}
        </Tr>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <Tr key={index + "-body-" + prefix}>
            <Th>{row.name}</Th>
            {params.map((param, index) => (
              <Td key={index + "-body-" + prefix}>{row[param]}</Td>
            ))}
          </Tr>
        ))}
      </TableBody>
    </Table>
  );
};

export default SimpleTable;
