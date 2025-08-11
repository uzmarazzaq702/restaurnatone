import React, { useState, useEffect } from "react";
import count from "../../assets/count.jpg";

const SpecialPizza = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 41,
    hours: 12,
    minutes: 11,
    seconds: 46,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-[#FF0B5C] to-red-500 overflow-x-hidden overflow-y-auto">
      {/* 🌸 Floating Decorative Flower Icons - Full Left Side */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="white"
            className="absolute"
            style={{
              width: `40px`,
              height: `40px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 40}%`,
              opacity: 0.3 + Math.random() * 0.2,
              animation: "flower-float 6s ease-in-out infinite",
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <path d="M32 2c5 5 7 12 4 19 7-3 14-1 19 4-5 5-12 7-19 4 3 7 1 14-4 19-5-5-7-12-4-19-7 3-14 1-19-4 5-5 12-7 19-4-3-7-1-14 4-19z" />
          </svg>
        ))}
      </div>

      {/* 🎯 Background Left Shape */}
      <img
        src="https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/countdown-shape1.png"
        alt="Countdown Shape"
        className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 w-56 md:w-80 opacity-20 pointer-events-none z-0"
      />

      <div className="flex flex-col md:flex-row h-full max-w-7xl mx-auto p-4 md:p-12 relative z-10 gap-8">
        {/* ✅ Left Content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Special Pizza
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-2">Mega Sale</p>

          <div className="bg-white text-[#FD204B] px-8 py-4 text-2xl font-bold mt-6 rounded-full shadow-lg inline-block">
            UP TO 50% OFF
          </div>

          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-8 gap-6">
            {["days", "hours", "minutes", "seconds"].map((unit, index) => (
              <div key={index} className="text-center group min-w-[80px]">
                <div className="w-20 h-20 rounded-full border-3 border-white flex items-center justify-center mb-2 bg-[#FF0B5C] animate-pulse">
                  <span className="text-3xl font-bold text-white">
                    {String(timeLeft[unit]).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-white font-semibold capitalize">{unit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Right Pizza Image */}
        <div className="flex-1 relative max-h-[500px] md:max-h-none overflow-hidden rounded-lg">
          <img
            src={count}
            alt="Delicious Pizza"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/10/How-to-order_.png"
            alt="How to Order Illustration"
            className="absolute right-0 bottom-0 w-44 md:w-[400px] max-w-full z-10 transition-transform duration-700"
          />
        </div>
      </div>

      <style>{`
        @keyframes flower-float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default SpecialPizza;
