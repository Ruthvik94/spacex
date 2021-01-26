import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

const Launch = ({ update, launch: selected, land, year, url }) => {
  return (
    <>
      <p className="text-center faded-line" aria-label="Succesful launch">
        Successful Launch{" "}
        <span className="float-right">
          <i
            onClick={() => {
              update("");
              url(year, "", land);
            }}
            className="fa fa-undo"
          ></i>
        </span>
      </p>
      <div className="filter-grid">
        {["True", "False"].map((bool, i) => {
          return (
            <Link
              aria-label={`launch  ${bool}`}
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
