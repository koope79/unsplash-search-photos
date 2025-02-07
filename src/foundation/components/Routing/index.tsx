import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  SearchPhoto,
  NotFound,
} from "src/pages";

const Routing = () => (
  <Routes>
    <Route
      index={true}
      element={<SearchPhoto />}
    />
    <Route path={"*"} element={<NotFound />} />
  </Routes>
);

export default Routing;
