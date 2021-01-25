import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

const Year = ({ update, year: selected, launch, land }) => {
  const generateYears = () => {
    return [...Array(15)].reduce((curr, _, i) => {
      curr.push(2006 + i);
      return curr;
    }, []);
  };

  return (
    <>
      <p className="text-center faded-line">Launch Year</p>
      <div className="filter-grid">
        {generateYears().map((year, i) => {
          return (
            <Link
              className={
                year.toString() === selected.toString()
                  ? "btn btn-sm btn-outline-info active"
                  : "btn btn-sm btn-outline-info"
              }
              key={i}
              onClick={() => update(year)}
              to={`/${year}/${launch}/${land}`}
            >
              {year}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Year;
