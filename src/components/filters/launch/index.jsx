import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

const Launch = ({ update, launch: selected, url, query }) => {
  return (
    <>
      <p className="text-center faded-line" aria-label="Succesful launch">
        Successful Launch
        <span className="float-right">
          <i
            onClick={() => {
              update("");
              url({ launch_success: "" });
            }}
            className="fa fa-undo"
          ></i>
        </span>
      </p>
      <div className="filter-grid">
        {["true", "false"].map((bool, i) => {
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
              to={(location) => ({
                ...location,
                pathname: "/",
                search: "?" + query({ launch_success: bool }),
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

export default Launch;
