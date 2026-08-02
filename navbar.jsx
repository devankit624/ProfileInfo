import React from "react";

const Navbar = () => {
  return (
    <div className = 'flex items-center justify-between py-6 px-16'>
        <div className="bg-black text-white px-5 uppercase py-3 rounded-full">Target Audience</div>
        <div className="bg-gray-200 tracking-wider rounded-full  py-6 px-4 uppercase">Digital Banking Platform</div>

    </div>
  );
};

export default Navbar;