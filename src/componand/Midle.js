import React from "react";
import Sec2 from "./Section-part-2";
import Armap from "./Md-data";
const sc = (value) => {
  return (
    <>
      <Sec2
        normal={value.normal}
        title={value.title}
        span={value.span}
        head={value.head}
        img={value.img}
      />
      <hr className="featurette-divider " />
    </>
  );
};

export const Mid = () => {
  return (
    <>
      <div class="container mt-5 mb-5 ">{Armap.map(sc)}</div>
    </>
  );
};

export default Mid;
