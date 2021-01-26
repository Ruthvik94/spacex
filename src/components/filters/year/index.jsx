import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

const Year = ({ update, year: selected, launch, land, url }) => {
  const generateYears = () => {
    return [...Array(15)].reduce((curr, _, i) => {
      curr.push(2006 + i);
      return curr;
    }, []);
  };

  return (
    <>
      <p className="text-center faded-line" aria-label="launch year">
        Launch Year{" "}
        <span className="float-right">
          <i
            onClick={() => {
              update("");
              url("", launch, land);
            }}
            className="fa fa-undo"
          ></i>
        </span>
      </p>
      <div className="filter-grid">
        {generateYears().map((year, i) => {
          return (
            <Link
              aria-label={`year ${year}`}
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
