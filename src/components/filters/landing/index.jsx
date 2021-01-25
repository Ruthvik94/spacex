import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

const Landing = ({ update, land: selected, year, launch }) => {
  return (
    <>
      <p className="text-center faded-line">Successful Landing</p>
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
              to={`/${year}/${launch}/${bool}`}
            >
              {bool}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Landing;
