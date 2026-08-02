import React from "react";
import Rightcontententcard from "./rightcontententcard.jsx";

const Rightcard = (props) => {
  return (
    <div
      className="flex shrink-0 flex-nowrap gap-10 w-1/3 h-[640px] rounded-2xl p-6 mb-4 flex-col justify-between bg-cover bg-center"
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    >
      <Rightcontententcard />
    </div>
  );
};

export default Rightcard;