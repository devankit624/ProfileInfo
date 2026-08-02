import React from 'react'

const Rightcontententcard = () => {
  return (
    <>{/* Card Number */}
      <h1 className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black text-xl font-bold">
        1
      </h1>

      {/* Card Content */}
      <div>
        <p className="text-white text-base leading-relaxed mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore voluptate recusandae saepe exercitationem vel amet!
        </p>

        <div className="flex items-center gap-3">
          <button className="px-8 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition cursor-pointer">
            Satisfied
          </button>

          <button className="cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/128/545/545682.png"
              alt="Arrow"
              className="w-10 h-10 p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition"
            />
          </button>
        </div>
      </div>
      </>
  );
};

export default Rightcontententcard