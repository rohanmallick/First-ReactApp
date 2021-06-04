import React from "react";
import "./index.css";
import Nav from "./componand/Nav";
import Sec1 from "./componand/Section-part-1";
import Mid from "./componand/Midle";

export const App = () => {
  return (
    <>
      <Nav title="Profolio" />
      <Sec1 />

      <Mid />
    </>
  );
};

export default App;
