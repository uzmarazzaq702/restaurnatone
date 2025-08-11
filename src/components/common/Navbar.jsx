import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  UserPlus,
  CalendarDays,
  Bike,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-parent") && !e.target.closest(".mobile-menu")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setOpenDropdown(null);
    setMobileOpen(false); // close mobile menu when navigating
  };

  return (
    <header className="w-full bg-gradient-to-r from-white to-pink-50 py-4 px-6 shadow relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <img
            src="https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/10/logo.svg"
            alt="Foodymat Logo"
            className="object-contain"
            style={{ width: "178px", height: "34px" }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-[16px] font-medium text-gray-700 relative">
          {/* Home */}
          <div className="relative dropdown-parent">
            <button
              className="flex items-center gap-1 hover:text-pink-600"
              onClick={() => handleNavigation("/")}
            >
              Home
            </button>
          </div>

          {/* Menu */}
          <div
            className="relative dropdown-parent"
            onMouseEnter={() => setOpenDropdown("menu")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div>
              <button
                className={`flex items-center gap-1 ${
                  openDropdown === "menu" ? "text-pink-600" : "text-black"
                } hover:text-pink-600`}
                onClick={() => handleNavigation("/menu")}
              >
                Menu <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "menu" && (
                <div className="absolute top-[120%] left-0 w-44 bg-white shadow-lg rounded-md py-2 border z-10 mt-7 animate-dropdown">
                  {["Burgers", "Pizza", "Salads", "Drinks"].map((item, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 text-sm text-black hover:text-[#E9004B] border-b last:border-b-0 border-dashed cursor-pointer flex items-center gap-2"
                      onClick={() => handleNavigation("/menu")}
                    >
                      <span className="text-[#E9004B]">•</span> {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Shop */}
          <div
            className="relative dropdown-parent"
            onMouseEnter={() => setOpenDropdown("shop")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div>
              <button
                className={`flex items-center gap-1 ${
                  openDropdown === "shop" ? "text-pink-600" : "text-black"
                } hover:text-pink-600`}
                onClick={() => handleNavigation("/Shop")}
              >
                Shop <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "shop" && (
                <div className="absolute top-[120%] left-0 w-44 bg-white shadow-lg rounded-md py-2 border z-10 mt-7 animate-dropdown">
                  {["Shop", "Single Product", "Cart", "Checkout"].map((item, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 text-sm text-black hover:text-[#E9004B] border-b last:border-b-0 border-dashed cursor-pointer flex items-center gap-2"
                      onClick={() => handleNavigation("/Shop")}
                    >
                      <span className="text-[#E9004B]">•</span> {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Pages */}
          <div
            className="relative dropdown-parent"
            onMouseEnter={() => setOpenDropdown("pages")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div>
              <button
                className={`flex items-center gap-1 ${
                  openDropdown === "pages" ? "text-pink-600" : "text-black"
                } hover:text-pink-600`}
                onClick={() => handleNavigation("/Pagess")}
              >
                Pages <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "pages" && (
                <div className="absolute top-[120%] left-0 mt-7 w-44 bg-white shadow-lg rounded-md py-2 border z-10 animate-dropdown">
                  {["About", "Team", "Our Businesses", "FAQ", "404 Page"].map((item, i) => (
                    <div
                      key={i}
                      className={`px-4 py-2 text-sm text-black hover:text-pink-600 ${
                        i !== 4 ? "border-b border-dashed" : ""
                      } cursor-pointer flex items-center justify-between`}
                      onClick={() => handleNavigation("/Pagess")}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-pink-600">•</span> {item}
                      </div>
                      {item === "Team" && (
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Blog */}
          <div
            className="relative dropdown-parent"
            onMouseEnter={() => setOpenDropdown("blog")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div>
              <button
                className={`flex items-center gap-1 ${
                  openDropdown === "blog" ? "text-pink-600" : "text-black"
                } hover:text-pink-600`}
                onClick={() => handleNavigation("/Blog")}
              >
                Blog <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "blog" && (
                <div className="absolute top-[120%] mt-7 left-0 w-60 bg-white shadow-lg rounded-md py-3 border z-10 animate-dropdown">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="px-4 py-2">
                      {[
                        "Blog Archive",
                        "Blog Grid One",
                        "Blog Grid Two",
                        "Blog Grid Three",
                        "Blog List One",
                        "Blog List Two",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="text-sm text-black hover:text-pink-600 cursor-pointer py-1 border-b border-dashed last:border-none flex items-center gap-2"
                          onClick={() => handleNavigation("/Blog")}
                        >
                          <span className="text-pink-600">•</span> {item}
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-l border-dashed">
                      {[
                        "Blog Single",
                        "Blog Single One",
                        "Blog Single Two",
                        "Blog Single Three",
                        "Blog Single Four",
                        "Blog Single Five",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="text-sm text-black hover:text-pink-600 cursor-pointer py-1 border-b border-dashed last:border-none flex items-center gap-2"
                          onClick={() => handleNavigation("/Blog")}
                        >
                          <span className="text-pink-600">•</span> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contacts */}
          <button
            className="hover:text-pink-600"
            onClick={() => handleNavigation("/contact")}
          >
            Contacts
          </button>
        </nav>

        {/* Right Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Bike className="text-pink-600 w-13 h-13" />
            <div className="text-sm">
              <div className="text-black-500">Call And Order In</div>
              <div className="font-bold text-black">+92-1243-4567</div>
            </div>
          </div>

          {/* Shopping Cart */}
          <div
            className="relative group cursor-pointer"
            onClick={() => handleNavigation("/cart")}
          >
            <div className="w-10 h-10 rounded-full border border-pink-600 bg-white flex items-center justify-center group-hover:bg-pink-600 transition">
              <ShoppingCart className="w-5 h-5 text-pink-600 group-hover:text-white transition" />
            </div>
            <div className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              0
            </div>
          </div>

          {/* Account */}
          <div
            className="group w-12 h-12 rounded-full border border-pink-600 bg-white flex items-center justify-center hover:bg-pink-600 transition cursor-pointer"
            onClick={() => handleNavigation("/myaccount")}
          >
            <UserPlus className="w-5 h-5 text-pink-600 group-hover:text-white transition" />
          </div>

          <button className="flex items-center gap-2 border border-pink-600 text-pink-600 px-8 py-3 rounded-full text-sm hover:bg-pink-600 hover:text-white transition">
            <CalendarDays className="w-4 h-4" />
            Reservation
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(true)}>
            <Menu className="w-7 h-7 text-pink-600" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-64 bg-white h-full p-5 mobile-menu relative">
            <button
              className="absolute top-4 right-4 text-pink-600"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col gap-4 mt-10">
              <button onClick={() => handleNavigation("/")}>Home</button>
              <button onClick={() => handleNavigation("/menu")}>Menu</button>
              <button onClick={() => handleNavigation("/Shop")}>Shop</button>
              <button onClick={() => handleNavigation("/Pagess")}>Pages</button>
              <button onClick={() => handleNavigation("/Blog")}>Blog</button>
              <button onClick={() => handleNavigation("/contact")}>Contacts</button>
            </div>
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style>
        {`
          .animate-dropdown {
            animation: fadeSlide 0.3s ease forwards;
          }
          @keyframes fadeSlide {
            from {
              opacity: 0;
              transform: translateX(-10px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;
