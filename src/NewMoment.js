import React from 'react';
// Import utilities

function NewMoment() {
  return (
    <div className="flex flex-row col-span-10 w-250 h-296 bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)] rounded-12 border ">
      <div className="px-5 pt-5 flex flex-col items-center">
        <div className="w-136 h-136 mt-24 mb-43  items-center grid justify-items-center rounded-80 border-dashed border-2 border-[#9fa6ba]">
          <div className="w-44 h-44">
            <img  src="./icons-wand@2x.png"  className="rounded-full"/>
          </div>
        </div>
        <div className=' w-172 h-50 rounded-25 bg-[#008b74] grid items-center justify-items-center text-white'>
          Create new moment
        </div>
      </div>
     
    </div>
  );
}

export default NewMoment;
