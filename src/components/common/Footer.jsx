import React from "react";
import { Phone, Mail } from "lucide-react";
import { ImFacebook } from "react-icons/im";
import { FaXTwitter, FaSquareInstagram, FaPinterest } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white px-6 sm:px-16 pt-20 pb-8 selection:bg-pink-600 selection:text-white overflow-x-hidden"
    >
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Logo & Contact */}
        <div className="space-y-4">
          <img
            src="https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/10/logo-white.svg"
            alt="Foodymat Logo"
            className="w-40 h-auto"
          />
          <p className="text-sm text-gray-400">
            Dolor sit amet consectetur. Massa est sit comm convallis.
          </p>
          <div className="text-sm space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <span className="font-bold hover:text-[#f30161] transition duration-300">
                (+1) 123-456-3389
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-white" />
              <span className="hover:text-[#f30161] transition duration-300">
                infoyour@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="space-y-4">
          <h3 className="font-semibold text-white">Opening Hours</h3>
          <div className="text-sm text-gray-300 space-y-3">
            {[
              { day: "Mon-Fri", time: "08.00 - 12.00" },
              { day: "Saturday", time: "08.00 - 12.00" },
              { day: "Sunday", time: "Closed" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex justify-between ${
                  idx !== 2 ? "border-b pb-2" : "pb-4"
                } border-gray-700 hover:text-[#f30161] transition`}
              >
                <span>{item.day}</span>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-4">
            <h4 className="font-semibold text-white mb-1">Our Address</h4>
            <p className="text-sm text-gray-300 leading-relaxed hover:text-[#f30161] transition">
              Pizzeria Head Office 54866 2nd Road NY 48766 <br />
              New York, U.S.A
            </p>
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-semibold text-white mb-4">Company Info</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            {[
              "Career",
              "Teams",
              "Foodymat Area",
              "Foodymat Instamart",
              "Foodymat Genie",
            ].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-[#f30161] transition duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="font-semibold text-white mb-2">Subscribe Now</h4>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe now for our latest updates and offers.
          </p>
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow px-4 py-2 rounded-l-md bg-black border border-gray-600 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-[#f30161] text-white px-4 py-2 rounded-r-md hover:bg-pink-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4 text-sm">
            <input type="checkbox" id="member" className="accent-[#f30161]" />
            <label htmlFor="member" className="text-white">
              Already a Member?
            </label>
            <Link
              to="/Myaccount"
              className="text-[#f30161] cursor-pointer hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          Copyright© 2024 <span className="text-white">Foodymat</span> by
          RadiusTheme.
        </p>

        <div className="flex items-center gap-4">
          <span className="text-sm text-white">Follow Social:</span>
          <div className="flex gap-3">
            {[ImFacebook, FaXTwitter, FaSquareInstagram, FaPinterest].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-white text-black border border-[#E9004B] rounded-full flex items-center justify-center hover:bg-[#E9004B] hover:text-white transform hover:scale-110 transition duration-300"
                >
                  <Icon className="w-5 h-5" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
