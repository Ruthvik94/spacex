import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { parse } from "query-string";

import { fetchDataWithParam, updateStatus } from "../../reducers/spacex";

import Landing from "./landing";
import Launch from "./launch";
import Year from "./year";

import Card from "react-bootstrap/Card";
import "./index.css";

const Filters = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();

  const { launch_year, launch_success, land_success } = parse(search, {
    parseNumbers: true,
  });

  const [year, setYear] = useState(launch_year);
  const [launch, setLaunch] = useState(launch_success);
  const [land, setLand] = useState(land_success);

  useEffect(() => {
    let filter = {};

    if (year) filter.launch_year = year;
    if (launch) filter.launch_success = launch;
    if (land) filter.land_success = land;

    if (year || launch || land) dispatch(fetchDataWithParam(filter));
  }, [year, launch, land, dispatch]);

  const constructUrl = ({ launch_year, launch_success, land_success }) => {
    if (launch_year === undefined) launch_year = year;
    if (launch_success === undefined) launch_success = launch;
    if (land_success === undefined) land_success = land;

    if (!launch_year && !launch_success && !land_success) {
      history.push("/");
      dispatch(updateStatus("idle"));
    } else {
      history.push(
        "/?" +
          generateQueryString({ launch_year, launch_success, land_success })
      );
    }
  };

  const generateQueryString = ({
    launch_year = year,
    launch_success = launch,
    land_success = land,
  }) => {
    let query = [];
    if (launch_year) query.push("launch_year=" + launch_year);
    if (launch_success) query.push("launch_success=" + launch_success);
    if (land_success) query.push("land_success=" + land_success);

    return query.length > 1 ? query.join("&") : query.join("");
  };

  return (
    <section className="filter-wide" aria-label="Filter section">
      <Card className="sticky-top">
        <Card.Body>
          <Card.Header
            className="text-center font-weight-bold mb-2"
            aria-label="filters"
          >
            Filters
          </Card.Header>
          <Year
            update={setYear}
            year={year}
            url={constructUrl}
            query={generateQueryString}
          />
          <br />
          <Launch
            update={setLaunch}
            launch={launch}
            url={constructUrl}
            query={generateQueryString}
          />
          <br />
          <Landing
            update={setLand}
            land={land}
            url={constructUrl}
            query={generateQueryString}
          />
        </Card.Body>
      </Card>
    </section>
  );
};

export default Filters;
