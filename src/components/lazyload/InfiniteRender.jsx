import React from "react";

import TableItems from "../table/TableItems";

import { useState, useEffect } from "react";

const InfiniteRender = ({ filterArray }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
      .then((response) => response.json())
      .then((users) => setItems([...items, ...users]));

  }, [page]);

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)
      setPage(page + 1);
    }

  const filtered = filterArray(items);

  return ( 
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
  );
}

export default InfiniteRender;
