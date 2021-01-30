import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

const Landing = ({ update, land: selected, url, query }) => {
  return (
    <>
      <p className="text-center faded-line" aria-label="Successful Landing">
        Successful Landing
        <span className="float-right">
          <i
            onClick={() => {
              update("");
              url({ land_success: "" });
            }}
            className="fa fa-undo"
          ></i>
        </span>
      </p>
      <div className="filter-grid">
        {["true", "false"].map((bool, i) => {
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
              to={(location) => ({
                ...location,
                pathname: "/",
                search: "?" + query({ land_success: bool }),
              })}
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
