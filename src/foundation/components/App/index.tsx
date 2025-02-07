import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  RootStyles,
  Routing,
} from "src/foundation/components";
import DefaultQueryContext from "../../contexts/DefaultQueryContext";

const App = () => (
  <React.StrictMode>
    <RootStyles />
    <BrowserRouter>
      <DefaultQueryContext>
        <Routing />
        <div id={"_base_portal"} />
      </DefaultQueryContext>
    </BrowserRouter>
  </React.StrictMode>
);

export default App;
