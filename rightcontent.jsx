import React from "react";
import Rightcard from "./rightcard";

const Rightcontent = (props) => {
  return (
    <div
      id="right"
      className="flex shrink-0 overflow-auto flex-nowrap gap-10 h-full w-2/3 px-6 py-6"
    >
      {props.users.map((elem, index) => {
        return <Rightcard key={index} img={elem.img} />;
      })}
    </div>
  );
};

export default Rightcontent;