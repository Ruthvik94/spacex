import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData } from "../../reducers/spacex";

import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import "./index.css";

const CardComp = () => {
  const dispatch = useDispatch();
  const { year, launch, land } = useParams();
  const { status, error } = useSelector((state) => state.spacex);

  useEffect(() => {
    if (status === "idle" && (!year || !launch || !land)) {
      dispatch(fetchData());
    }
  }, [dispatch, status, land, year, launch]);

  const { data } = useSelector((state) => state.spacex);

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
          <Card key={i}>
            <Card.Img variant="top" src={links.mission_patch_small} />
            <Card.Body>
              <Card.Title
                style={{ color: "#7b7be6", fontWeight: "bold" }}
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
              <h6 className="font-weight-bold">
                Launch Year:
                <span style={{ color: "#a39fea", fontWeight: "lighter" }}>
                  {launch_year}
                </span>
              </h6>
              <h6 className="font-weight-bold">
                Successful Launch:
                <span style={{ color: "#a39fea", fontWeight: "lighter" }}>
                  {launch_success.toString()}
                </span>
              </h6>
              <h6 className="font-weight-bold">
                Successful Landing:
                <span style={{ color: "#a39fea", fontWeight: "lighter" }}>
                  {launch_landing ? launch_landing.toString() : "false"}
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
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      {status === "error" && <div>{error}</div>}
      {status === "succeeded" && <div className="card-grid">{mapData()}</div>}
    </aside>
  );
};

export default CardComp;
