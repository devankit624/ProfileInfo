import React from "react";

const Leftcontent = () => {
  return (
    <div className="relative h-full w-1/3 ">
      
      <div className="h-96 w-60 rounded-xl overflow-hidden text-3xl">
        
        <div className="absolute p-10 text-7xl w-100px text-black font-bold">
          <p>Perspective</p>
          <p className="text-gray-600">Customer</p>
          <p>Segmentation</p>
        </div>
        <div className="mt-100px">
        <p className="flex-wrap absolute mt-70  p-10 text-black text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, vero suscipit saepe at ea iure quaerat aut et odio rerum.</p>
</div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_9qA6nGBY_ULUYymYaM9M6mK3SoLpaYUZahCTNJSarA&s=10"
          className="absolute bottom-0 left-0 h-30 w-30 object-cover rounded-xl"
        />

      </div>

    </div>
  );
};

export default Leftcontent;