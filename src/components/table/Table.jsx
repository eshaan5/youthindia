import React from "react";
import "./table.css";
import TableItems from "./TableItems";

const Table = ({ filtered }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <div className="t__head">First Name</div>
            </th>
            <th>
              <div className="t__head">Last Name</div>
            </th>
            <th>
              <div className="t__head">Age</div>
            </th>
            <th>
              <div className="t__head">Email</div>
            </th>
            <th>
              <div className="t__head">Web</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableItems filtered={filtered} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
