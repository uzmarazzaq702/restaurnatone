import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Grid3X3,
  List,
  ShoppingCart,
  Star,
  Check,
} from "lucide-react";
import breakfast from "../../assets/breakfast.png";
import burger from "../../assets/burger.png";
import burgerone from "../../assets/burgerone.jpg";
import chinese from "../../assets/chinese.png";
import lunch from "../../assets/lunch.png";
import pasta from "../../assets/pasta.png";
import product3 from "../../assets/product-3.jpg";
import product4 from "../../assets/product-4.jpg";
import product7 from "../../assets/product-7.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AddCart = ({handleAddToCart}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortBy, setSortBy] = useState("Default sorting");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState({});
  const [minPrice, setMinPrice] = useState(4);
  const [maxPrice, setMaxPrice] = useState(95);
  const [filteredFoodItems, setFilteredFoodItems] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const categories = [
    { name: "Breakfast", count: 3 },
    { name: "Burger", count: 6 },
    { name: "Chinese", count: 11 },
    { name: "Dinner", count: 6 },
    { name: "Fast Food", count: 6 },
    { name: "Lunch", count: 6 },
    { name: "Pasta", count: 1 },
    { name: "Pizza", count: 4 },
    { name: "Rice", count: 8 },
  ];

  const specialKeys = ["Business", "Delivery", "Food", "Online", "Online Food"];

  const sortOptions = [
    "Default sorting",
    "Sort by popularity",
    "Sort by average rating",
    "Sort by latest",
    "Sort by price: low to high",
    "Sort by price: high to low",
  ];

  const foodItems = [
    {
      id: 1,
      name: "Alasta Sandwich",
      categories: ["Pizza", "Chinese", "Burger"],
      rating: 5,
      reviews: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur. Habitasse metus urna...",
      originalPrice: 19.0,
      salePrice: 17.0,
      image: breakfast,
      onSale: true,
    },
    {
      id: 2,
      name: "American Pizza",
      categories: ["Pizza", "Chinese"],
      rating: 3,
      reviews: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur. Habitasse metus urna...",
      originalPrice: 20.0,
      salePrice: 18.0,
      image: burger,
      onSale: true,
    },
    {
      id: 3,
      name: "Baked Pastries and Egg",
      categories: ["Chinese", "Breakfast"],
      rating: 4,
      reviews: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur. Habitasse metus urna...",
      originalPrice: 19.0,
      salePrice: 18.0,
      image: burgerone,
      onSale: true,
    },
    {
      id: 4,
      name: "Cheese Burger",
      categories: ["Burger"],
      rating: 5,
      reviews: 8,
      description: "Juicy grilled beef patty with cheddar cheese...",
      originalPrice: 15.0,
      salePrice: 12.5,
      image: chinese,
      onSale: true,
    },
    {
      id: 5,
      name: "Chicken Fried Rice",
      categories: ["Rice", "Chinese"],
      rating: 4,
      reviews: 6,
      description: "Fried rice with tender chicken and vegetables...",
      originalPrice: 14.0,
      salePrice: 13.0,
      image: lunch,
      onSale: false,
    },
    {
      id: 6,
      name: "Spaghetti Bolognese",
      categories: ["Pasta"],
      rating: 3,
      reviews: 4,
      description: "Classic Italian pasta with rich meat sauce...",
      originalPrice: 18.0,
      salePrice: 16.0,
      image: pasta,
      onSale: true,
    },
    {
      id: 7,
      name: "Club Sandwich",
      categories: ["Lunch", "Fast Food"],
      rating: 4,
      reviews: 3,
      description: "Triple-layered sandwich with chicken, lettuce, and mayo...",
      originalPrice: 11.0,
      salePrice: 10.0,
      image: product3,
      onSale: false,
    },
    {
      id: 8,
      name: "Prawn Tempura",
      categories: ["Dinner"],
      rating: 5,
      reviews: 9,
      description: "Crispy fried prawn with dipping sauce...",
      originalPrice: 22.0,
      salePrice: 20.0,
      image: product4,
      onSale: true,
    },
    {
      id: 9,
      name: "Beef Shawarma",
      categories: ["Fast Food", "Dinner"],
      rating: 4,
      reviews: 7,
      description: "Sliced beef wrapped in flatbread with garlic sauce...",
      originalPrice: 17.0,
      salePrice: 15.0,
      image: product7,
      onSale: true,
    },
  ];

  useEffect(() => {
    // Apply filters whenever selectedCategory, minPrice, or maxPrice changes
    let filteredItems = [...foodItems];
    
    // Filter by category if selected
    if (selectedCategory) {
      filteredItems = filteredItems.filter(item => 
        item.categories.includes(selectedCategory)
      );
    }
    
    // Filter by price range
    filteredItems = filteredItems.filter(item => 
      item.salePrice >= minPrice && item.salePrice <= maxPrice
    );
    
    setFilteredFoodItems(filteredItems);
  }, [selectedCategory, minPrice, maxPrice]);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(
      selectedCategory === categoryName ? null : categoryName
    );
  };

  const handleSortChange = (option) => {
    setSortBy(option);
    setShowDropdown(false);
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const renderStars = (rating) => (
    <div className="flex justify-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-4 md:gap-8">
          {/* Sidebar - Mobile first: hidden by default, shown with toggle */}
          <div className="lg:w-80 w-full bg-white rounded-lg p-4 md:p-6 h-fit sticky top-4">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleCategoryClick(category.name)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 group ${
                      selectedCategory === category.name
                        ? "bg-[#E9004B] text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <span className="flex items-center">
                      <span
                        className={`mr-3 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                          selectedCategory === category.name
                            ? "bg-white text-[#E9004B]"
                            : "bg-pink-100 text-[#E9004B] group-hover:bg-[#E9004B] group-hover:text-white"
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </span>
                      {category.name}
                    </span>
                    <span
                      className={`text-sm ${
                        selectedCategory === category.name
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                    >
                      ({category.count})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Special Search Key
              </h3>
              <div className="space-y-2">
                {specialKeys.map((key) => (
                  <button
                    key={key}
                    className="flex items-center text-gray-700 p-2 rounded-lg transition-all duration-300 w-full text-left group"
                  >
                    <span className="mr-3 w-5 h-5 rounded-full bg-pink-100 text-[#E9004B] group-hover:bg-[#E9004B] group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <Check className="w-3 h-3" />
                    </span>
                    {key}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Filter by price
              </h3>
              <div className="mb-4">
                <input
                  type="range"
                  min="4"
                  max="95"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              <div className="flex gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Min. Price
                  </label>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-20 p-2 border border-gray-300 rounded text-center focus:border-[#E9004B] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Max. Price
                  </label>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-20 p-2 border border-gray-300 rounded text-center focus:border-[#E9004B] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
              <p className="text-gray-600">
                Showing 1-{filteredFoodItems.length} of {filteredFoodItems.length} results
              </p>
              <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
                {/* Sort Dropdown */}
                <div className="relative flex-1 md:flex-none">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:border-[#E9004B] transition-colors w-full md:w-auto justify-between"
                  >
                    <span className="truncate">{sortBy}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {showDropdown && (
                    <div className="absolute top-full right-0 mt-2 w-full md:w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      {sortOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleSortChange(option)}
                          className="w-full text-left px-4 py-2 hover:bg-pink-50 hover:text-[#E9004B] transition-colors truncate"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* View Toggle */}
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${
                      viewMode === "grid"
                        ? "bg-[#E9004B] text-white"
                        : "bg-white text-gray-600 hover:bg-pink-50"
                    }`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${
                      viewMode === "list"
                        ? "bg-[#E9004B] text-white"
                        : "bg-white text-gray-600 hover:bg-pink-50"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Food Items */}
            <div className={`grid ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            } gap-4 md:gap-6 mb-8`}>
              {filteredFoodItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                    viewMode === "list" ? "flex flex-col md:flex-row" : ""
                  }`}
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos-delay={index * 100}
                >
                  <div className={`relative overflow-hidden ${
                    viewMode === "list" ? "md:w-1/3" : ""
                  }`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`w-full ${
                        viewMode === "list" 
                          ? "h-48 md:h-full object-cover" 
                          : "h-auto max-h-56 object-contain"
                      } transform group-hover:scale-105 transition-transform duration-300`}
                    />
                    {item.onSale && (
                      <span className="absolute top-2 left-2 bg-[#E9004B] text-white px-3 py-2 text-medium font-semibold rounded hover:bg-[#E9004B] transition-colors cursor-default">
                        Sale!
                      </span>
                    )}
                  </div>
                  <div className={`p-4 text-center ${
                    viewMode === "list" ? "md:w-2/3 md:text-left" : ""
                  }`}>
                    <div className={`flex justify-center ${viewMode === "list" ? "md:justify-start" : ""} flex-wrap gap-1 mb-3`}>
                      {item.categories.map((cat) => (
                        <span
                          key={cat}
                          className="text-medium text-[#E9004B] bg-pink-50 px-2 py-1 rounded hover:bg-[#E9004B] hover:text-white transition-colors cursor-default"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-3 text-[20px]">
                      {item.name}
                    </h3>
                    <div className={`flex items-center ${viewMode === "list" ? "md:justify-start" : "justify-center"} gap-2 mb-3`}>
                      {renderStars(item.rating)}
                      <span className="text-sm text-gray-500">
                        ({item.reviews})
                      </span>
                    </div>
                    <p className="text-sm text-black-600 mb-4 text-[18px]">
                      {item.description}
                    </p>
                    <div className={`flex flex-col ${viewMode === "list" ? "md:flex-row md:items-center md:justify-between" : "items-center"} gap-3`}>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-gray-800">
                          ${item.salePrice.toFixed(2)}
                        </span>
                        {item.originalPrice !== item.salePrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${item.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-white border-2 border-[#E9004B] text-[#E9004B] px-6 py-2 rounded-full hover:bg-[#E9004B] hover:text-white transition-all duration-200 text-sm font-semibold transform hover:scale-105 flex items-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination - Only show if there are items */}
            {filteredFoodItems.length > 0 && (
              <div className="flex justify-center pb-8">
                <div className="flex items-center gap-2">
                  <button
                    className="px-3 py-2 text-gray-500 hover:text-[#E9004B] transition-colors"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  >
                    &lt;
                  </button>
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg transition-all duration-200 ${
                        currentPage === page
                          ? "bg-[#E9004B] text-white"
                          : "bg-white text-gray-700 hover:bg-[#E9004B] hover:text-white border"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    className="px-3 py-2 text-gray-500 hover:text-[#E9004B] transition-colors"
                    onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
                  >
                    &gt;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;