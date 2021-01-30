import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";
import { fetchData } from "../../reducers/spacex";

import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import "./index.css";

const CardComp = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { launch_year, launch_success, land_success } = parse(search, {
    parseBooleans: true,
  });

  const { status, error } = useSelector((state) => state.spacex);

  useEffect(() => {
    if (status === "idle" && !launch_year && !launch_success && !land_success) {
      dispatch(fetchData());
    }
  }, [dispatch, status, land_success, launch_year, launch_success]);

  const { data } = useSelector((state) => state.spacex);

  if (error) {
    console.log(error.stack);
  }

  const mapData = () => {
    if (!data.length) {
      return <h3 className="text-center">No data found for the selection</h3>;
    } else {
      const mapped = data.map(
        (
          {
            flight_number,
            mission_name,
            mission_id,
            launch_year,
            launch_success,
            launch_landing,
            links,
          },
          i
        ) => (
          <Card
            className="p-4"
            key={i}
            style={data.length === 1 ? { width: "22rem" } : { width: "auto" }}
          >
            <Card.Img
              style={{ background: "#f1f1f1" }}
              width="256"
              height="256"
              variant="top"
              src={links.mission_patch_small}
            />
            <Card.Body>
              <Card.Title
                aria-label={`label for ${mission_name}`}
                className="card-title"
              >{`${mission_name} #${flight_number}`}</Card.Title>
              {mission_id.length > 0 && (
                <>
                  <h6>Mission Id's</h6>
                  <ul>
                    {mission_id.map((id, i) => (
                      <li key={i}> {id} </li>
                    ))}
                  </ul>
                </>
              )}
              <h6
                className="font-weight-bold"
                aria-label={`year ${launch_year}`}
              >
                Launch Year:
                <span className="card-info">{launch_year}</span>
              </h6>
              <h6
                className="font-weight-bold"
                aria-label={`successful launch ${launch_success}`}
              >
                Successful Launch:
                <span className="card-info">
                  {launch_success ? launch_success.toString() : ""}
                </span>
              </h6>
              <h6
                className="font-weight-bold"
                aria-label={`successful landing ${launch_landing}`}
              >
                Successful Landing:
                <span className="card-info">
                  {launch_landing ? launch_landing.toString() : ""}
                </span>
              </h6>
            </Card.Body>
          </Card>
        )
      );

      return mapped;
    }
  };

  return (
    <aside className="card-wide">
      {status === "loading" && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span aria-label="loading" className="sr-only">
              Loading...
            </span>
          </Spinner>
        </div>
      )}
      {status === "error" && <h3 className="text-center">{error.message}</h3>}
      {status === "succeeded" && <div className="card-grid">{mapData()}</div>}
    </aside>
  );
};

export default CardComp;
