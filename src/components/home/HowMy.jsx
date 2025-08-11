import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Blog from '../../assets/Blog.jpg';
import Blog1 from '../../assets/Blog1.jpg';

const blogPosts = [
  {
    id: 1,
    image: Blog,
    date: '4 Oct, 2024',
    category: 'Food',
    title: 'How My Obsession with Fresh Ingredients Elevated Our Dishes',
  },
  {
    id: 2,
    image: Blog1,
    date: '10 Oct, 2024',
    category: 'Food',
    title: 'Why My Passion for Spices Transformed Our Menu',
  },
];

const HowMy = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-8 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl overflow-hidden shadow-md group transition-all duration-300"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {/* Image Section */}
            <div
              className="relative overflow-hidden"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[350px] sm:h-[400px] md:h-[500px] object-cover transform transition-transform duration-300 group-hover:scale-110"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white p-4 rounded-full shadow">
                  <ArrowUpRight className="w-8 h-8 text-black" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className="p-4"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <p className="text-[18px] sm:text-[20px] text-gray-500 hover:text-pink-500 transition-colors duration-300 cursor-pointer">
                {post.category} / {post.date}
              </p>
              <h3 className="text-[24px] sm:text-[30px] font-semibold mt-2 text-black hover:text-pink-500 transition-colors duration-300 cursor-pointer leading-snug">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowMy;
