import React, { useState, useMemo } from "react";
import { Search, Calendar, User } from "lucide-react";
import Blog2 from "../../assets/Blog2.jpg";
import Blog3 from "../../assets/Blog3.jpg";
import Blog4 from "../../assets/Blog4.jpg";
import Blog5 from "../../assets/Blog5.jpg";
import Blog6 from "../../assets/Blog6.jpg";
import Blog7 from "../../assets/Blog7.jpg";
import Blog8 from "../../assets/Blog8.jpg";
import Blog9 from "../../assets/Blog9.jpg";

const Food = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const mainPosts = [
    {
      id: 1,
      title: "My Love for Gourmet Coffee Created Our Signature Blends",
      image: Blog2,
      date: "18 Nov, 2024",
      author: "admin",
      category: "Food",
      price: "$125.00",
      items: "8 items",
      excerpt:
        "Massa a of est sit commodo convallis auctor aliquet ready works an more sem..."
    },
    {
      id: 2,
      title: "Why My Experience with Home Cooking Influenced Our Recipes",
      image: Blog3,
      date: "18 Nov, 2024",
      author: "admin",
      category: "Food",
      excerpt:
        "Massa a of est sit commodo convallis auctor aliquet ready works an more sem..."
    },
    {
      id: 3,
      title: "How My Passion for Gluten-Free Baking Expanded Our Menu",
      image: Blog4,
      date: "18 Nov, 2024",
      author: "admin",
      category: "Baking",
      excerpt:
        "Discover the art of gluten-free baking and how it transformed our kitchen offerings."
    },
    {
      id: 4,
      title: "Why My Culinary Adventures Led to Unique Flavor Combinations",
      image: Blog5,
      date: "18 Nov, 2024",
      author: "admin",
      category: "Food",
      excerpt:
        "Exploring bold flavors from around the world and creating signature dishes."
    },
    {
      id: 5,
      title: "How My Discovery of Local Farmers Inspired Our Ingredients",
      image: Blog6,
      date: "18 Nov, 2024",
      author: "admin",
      category: "Local",
      excerpt:
        "Supporting local agriculture while creating farm-to-table experiences."
    },
    {
      id: 6,
      title: "The Art of Perfect Coffee Roasting Techniques",
      image: Blog7,
      date: "18 Nov, 2024",
      author: "admin",
      category: "Coffee",
      excerpt:
        "Master the craft of coffee roasting for the perfect cup every time."
    },
    {
      id: 7,
      title: "Seasonal Menu Changes: Embracing Fresh Ingredients",
      image: Blog8,
      date: "18 Nov, 2024",
      author: "admin",
      category: "Food",
      excerpt:
        "How we adapt our menu to showcase the best seasonal produce."
    },
    {
      id: 8,
      title: "Building Community Through Food and Shared Experiences",
      image: Blog9,
      date: "18 Nov, 2024",
      author: "admin",
      category: "Community",
      excerpt:
        "Creating connections and memories through our culinary journey."
    }
  ];

  const sidebarPosts = mainPosts.slice(0, 6);
  const popularPosts = mainPosts.slice(0, 6);

  const categoryCounts = useMemo(() => {
    const counts = {};
    mainPosts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, [mainPosts]);

  const filteredPosts = mainPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? post.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-t-lg transform hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={() =>
                        setSelectedCategory(
                          selectedCategory === post.category ? "" : post.category
                        )
                      }
                      className="absolute bottom-3 left-3 bg-[#E9004B] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#E9004B]"
                    >
                      {post.category}
                    </button>
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-900 mb-3 hover:text-[#E9004B] cursor-pointer transition-colors">
                      {post.title}
                    </h2>
                    <div className="flex items-center text-[#E9004B] text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                      <User className="w-5 h-5 ml-3 mr-1" />
                      <span className="font-medium">by {post.author}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-8">
              {/* Search */}
              <div 
                className="bg-white rounded-lg p-6 shadow-md"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Search</h2>
                <div className="flex">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="flex-1 px-4 py-3 bg-gray-100 border-0 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#E9004B] text-gray-700"
                  />
                  <button className="px-4 py-3 bg-[#E9004B] text-white rounded-r-lg hover:bg-[#E9004B]">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Latest Posts */}
              <div 
                className="bg-white rounded-lg p-6 shadow-md"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Latest Posts
                </h2>
                <div className="space-y-4">
                  {sidebarPosts.map((post) => (
                    <div key={post.id} className="flex space-x-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                      <div>
                        <div className="flex items-center text-[#E9004B] text-sm mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <h3 className="text-gray-900 font-medium text-sm hover:text-[#E9004B] cursor-pointer">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div 
                className="bg-white rounded-lg p-6 shadow-md"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Popular Posts
                </h2>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="flex space-x-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                      <div>
                        <div className="flex items-center text-[#E9004B] text-sm mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <h3 className="text-gray-900 font-medium text-sm hover:text-[#E9004B] cursor-pointer">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div 
                className="bg-white rounded-lg p-6 shadow-md"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Categories
                </h2>
                <div className="space-y-3">
                  {Object.keys(categoryCounts).map((cat) => (
                    <div
                      key={cat}
                      onClick={() =>
                        setSelectedCategory(
                          selectedCategory === cat ? "" : cat
                        )
                      }
                      className={`flex justify-between items-center py-2 border-b border-gray-100 cursor-pointer ${
                        selectedCategory === cat
                          ? "text-[#E9004B]"
                          : "text-gray-700 hover:text-[#E9004B]"
                      }`}
                    >
                      <span className="font-medium">
                        {cat} ({categoryCounts[cat]})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div 
                className="bg-white rounded-lg p-6 shadow-md"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {["Business", "Delivery", "Food", "Online", "Baking"].map(
                    (tag) => (
                      <button
                        key={tag}
                        onClick={() =>
                          setSelectedCategory(
                            selectedCategory === tag ? "" : tag
                          )
                        }
                        className={`px-4 py-2 rounded-full text-sm ${
                          selectedCategory === tag
                            ? "bg-[#E9004B] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-[#E9004B] hover:text-white"
                        } transition-colors`}
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;