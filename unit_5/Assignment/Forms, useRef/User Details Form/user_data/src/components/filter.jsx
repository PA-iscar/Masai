import React, { useRef } from "react";

const Filters = ({ setFilters, page, setPage }) => {
  const dep = useRef();
  const order = useRef();

  const handleChange = () => {
    setFilters({ dep: dep.current.value, order: order.current.value });
  };

  return (
    <>
      <br />
      <span>Filters: &nbsp;</span>
      <select name="filter" id="dep" ref={dep} onChange={handleChange}>
        <option value="none">Show All</option>
        <option value="frontend">Front End</option>
        <option value="backend">Back End</option>
      </select>
      &nbsp;
      <select name="sort" id="sort" ref={order} onChange={handleChange}>
        <option value="none">No sort</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      &nbsp;&nbsp;
      <button disabled={page <= 1} onClick={() => setPage((pre) => pre - 1)}>
        prev
      </button>
      &nbsp;
      <button>{page}</button>
      &nbsp;
      <button onClick={() => setPage((pre) => pre + 1)}>next</button>
      <br />
      <br />
    </>
  );
};

export default Filters;
