import React from "react";
import Autintification from "./Autintification/Autintification";
import UnAutintification from "./UnAutintification/UnAutintification";
function App() {
  const token = JSON.parse(window.localStorage.getItem("token"));
  if (token && token !== "") {
    return <Autintification />;
  } else {
    return <UnAutintification />;
  }
}

export default App;
