import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

const Year = ({ update, year: selected, url, query }) => {
  const generateYears = () => {
    return [...Array(15)].reduce((curr, _, i) => {
      curr.push(2006 + i);
      return curr;
    }, []);
  };

  return (
    <>
      <p className="text-center faded-line" aria-label="launch year">
        Launch Year
        <span className="float-right">
          <i
            onClick={() => {
              update("");
              url({ launch_year: "" });
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
                year === selected
                  ? "btn btn-sm btn-outline-info active"
                  : "btn btn-sm btn-outline-info"
              }
              key={i}
              onClick={() => update(year)}
              to={(location) => ({
                ...location,
                pathname: "/",
                search: "?" + query({ launch_year: year }),
              })}
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
