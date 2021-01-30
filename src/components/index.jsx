import React from "react";

import Cards from "./cards";
import Filters from "./filters";

const Composed = () => {
  return (
    <>
      <Filters />
      <Cards />
    </>
  );
};

export default Composed;
