import React from "react";
import Sec2 from "./Section-part-2";
import Sec3 from "./Section-part-3";
import Sec4 from "./Section-part-4";
import Armap from "./Md-data";

const sc = (value, ind) => {
  console.log(ind);
  return (
    <>
      <Sec2
        normal={value.normal}
        key={ind}
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
      <div className="container mt-5 mb-5 ">
        <Sec3 />
        {Armap.map(sc)}
      </div>
      <Sec4 />
    </>
  );
};

export default Mid;
