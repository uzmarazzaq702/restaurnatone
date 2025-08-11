import React from 'react';

import team3 from "../../assets/team3.jpg";
import team2 from "../../assets/team2.jpg";
import team4 from "../../assets/team4.jpg";

import { ImFacebook } from 'react-icons/im';
import { FaXTwitter, FaSquareInstagram, FaPinterest } from 'react-icons/fa6';

const chefs = [
  { id: 'annette', name: 'Annette Black', title: 'Senior Chef', img: team2 },
  { id: 'kristin', name: 'Kristin Watson', title: 'Master Chef', img: team3 },
  { id: 'ralph', name: 'Ralph Edwards', title: 'Senior Chef', img: team4 },
];

const Meet = () => {
  return (
    <div
      className="w-screen h-screen bg-gray-50 flex flex-col items-center justify-center px-4 overflow-hidden"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">
        Meet Our Best Chef
      </h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-8 text-sm sm:text-base md:text-lg">
        Dolor Sit Amet Consectetur. Massa A Of Est Sit Commodo Convallis Auctor
        Aliquet Ready Works Any More Sem.
      </p>

      {/* Cards container */}
      <div className="flex justify-center items-start gap-4 flex-wrap">
        {chefs.map((chef) => (
          <div
            key={chef.id}
            className="relative w-64 sm:w-72 md:w-80 group rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={chef.img}
                  alt={chef.name}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />

                {/* Social icons */}
                <div className="absolute top-4 right-[-50px] group-hover:right-2 transition-all duration-500 flex flex-col gap-3">
                  {[ImFacebook, FaXTwitter, FaSquareInstagram, FaPinterest].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-black border border-[#E9004B] rounded-full flex items-center justify-center hover:bg-[#E9004B] hover:text-white transform hover:scale-110 transition duration-300"
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="text-center py-3 transition-all duration-300 group-hover:bg-[#E9004B] group-hover:text-white bg-white rounded-b-xl">
                <h2 className="text-base sm:text-lg font-bold">{chef.name}</h2>
                <p className="text-pink-600 group-hover:text-white text-sm sm:text-base">
                  {chef.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meet;
