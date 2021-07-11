import React, { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [selectedYear, setSelectedYear] = useState({
    label: "Select",
    value: "",
  });

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
    props.onYearChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          selected={selectedYear}
          onChange={yearChangeHandler}
          value={props.selected}
        >
          <option value="">Select</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2019">2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
