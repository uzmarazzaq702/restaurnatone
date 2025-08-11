import React from 'react';
import { useNavigate } from 'react-router-dom';

const Showbutton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/shoppage');
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white overflow-hidden">
      <button
        onClick={handleClick}
        className="relative overflow-hidden px-8 py-3 border border-[#EA1056] text-[#EA1056] rounded-full bg-[#FFF3F3] group transition duration-300"
      >
        <span className="relative z-10 group-hover:text-white transition duration-300 text-[18px] font-bold">
          Show More
        </span>
        <span className="absolute top-0 left-0 w-full h-0 bg-[#EA1056] group-hover:h-full transition-all duration-300 ease-in-out z-0"></span>
      </button>
    </div>
  );
};

export default Showbutton;
