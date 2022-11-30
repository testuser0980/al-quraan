import React from "react";
import GetData from "./components/GetData";
import APIState from "./context/apiState";

function App() {
  return (
    <>
      <APIState>
        <GetData />
      </APIState>
    </>
  );
}

export default App;
