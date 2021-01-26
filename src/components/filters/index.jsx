import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchDataWithParam, updateStatus } from "../../reducers/spacex";

import Landing from "./landing";
import Launch from "./launch";
import Year from "./year";

import Card from "react-bootstrap/Card";
import "./index.css";

const Filters = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { year: yr, land: ld, launch: ln } = useParams();

  const [year, setYear] = useState(yr ? yr : "");
  const [launch, setLaunch] = useState(ld ? ld : "");
  const [land, setLand] = useState(ln ? ln : "");

  useEffect(() => {
    let filter = {};

    if (year) filter.launch_year = year;
    if (launch) filter.launch_success = launch.toLowerCase();
    if (land) filter.land_success = land.toLowerCase();

    if (Object.entries(filter).length) {
      dispatch(fetchDataWithParam(filter));
    }
  }, [year, launch, land, dispatch]);

  const constructUrl = (yr, ld, ln) => {
    if (!yr && !ld && !ln) {
      history.push("/");
      history.replace("/");
      dispatch(updateStatus("idle"));
    } else {
      history.push(`/${yr}/${ld}/${ln}`);
    }
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
            launch={launch}
            land={land}
            url={constructUrl}
          />
          <br />
          <Launch
            update={setLaunch}
            year={year}
            launch={launch}
            land={land}
            url={constructUrl}
          />
          <br />
          <Landing
            update={setLand}
            year={year}
            launch={launch}
            land={land}
            url={constructUrl}
          />
        </Card.Body>
      </Card>
    </section>
  );
};

export default Filters;
