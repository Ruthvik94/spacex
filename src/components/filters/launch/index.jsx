import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

const Launch = ({ update, launch: selected, land, year }) => {
  return (
    <>
      <p className="text-center faded-line">Successful Launch</p>
      <div className="filter-grid">
        {["True", "False"].map((bool, i) => {
          return (
            <Link
              className={
                bool === selected
                  ? "btn btn-sm btn-outline-info active"
                  : "btn btn-sm btn-outline-info"
              }
              key={i}
              onClick={() => update(bool)}
              to={`/${year}/${bool}/${land}`}
            >
              {bool}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Launch;
