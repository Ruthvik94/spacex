import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

const Landing = ({ update, land: selected, year, launch, url }) => {
  return (
    <>
      <p className="text-center faded-line" aria-label="Successful Landing">
        Successful Landing{" "}
        <span className="float-right">
          <i
            onClick={() => {
              update("");
              url(year, launch, "");
            }}
            className="fa fa-undo"
          ></i>
        </span>
      </p>
      <div className="filter-grid">
        {["True", "False"].map((bool, i) => {
          return (
            <Link
              aria-label={`landing ${bool}`}
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
