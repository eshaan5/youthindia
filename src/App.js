import React from "react";

import { useState, useEffect, useMemo } from "react";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pagination from "./components/pagination/Pagination";

import InfiniteRender from "./components/lazyload/InfiniteRender";

let PageSize = 10;

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, [search]);

  const [currentPage, setCurrentPage] = useState(1);

  const onSearch = (e) => {
    setCurrentPage(1);
    setSearch(e.target.value);
  };

  function filterArray(users) {
    return users.filter((user) => {
      return user.first_name.toLowerCase().includes(search.toLowerCase()) || user.last_name.toLowerCase().includes(search.toLowerCase());
    });
  }

  const filtered = filterArray(users);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = Math.min(filtered.length, firstPageIndex + PageSize);
    return filtered.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filtered]);

  return (
    <>
      <Router basename="/">
        <Header onSearch={onSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Table filtered={currentTableData} />
                <Pagination className="pagination-bar" currentPage={currentPage} totalCount={filtered.length} pageSize={PageSize} onPageChange={(page) => setCurrentPage(page)} />
              </>
            }
          />
          <Route path="lazy-load" element={<InfiniteRender filterArray={filterArray} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;