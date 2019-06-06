import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  Tr,
  Th,
  Td
} from "../../styles/simpleTable/Table";

const SimpleTable = ({ data, columns, prefix }) => {
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
            {Object.keys(row).map((param, index) => (
              <Td key={index + "-body-" + prefix}>{row[param]}</Td>
            ))}
          </Tr>
        ))}
      </TableBody>
    </Table>
  );
};

export default SimpleTable;
