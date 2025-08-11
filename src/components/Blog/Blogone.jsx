import React from "react";

const Blog = () => {
  return (
    <div
      className="relative py-20 px-6 md:px-12 bg-cover bg-center overflow-x-hidden"
     style={{
  backgroundImage:
    "url('https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/bread_banner-scaled.jpg')",
  backgroundPosition: "center",   // beech me align
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",      // pura image show
}}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Heading */}
          <div className="flex-1 min-w-0">
            <h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 break-words"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              Blog
            </h1>

            {/* Breadcrumb */}
            <div
              className="flex flex-wrap items-center gap-2 text-sm mb-8"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <span className="text-black text-[16px] sm:text-[18px]">Blog</span>
              <span className="text-gray-900">/</span>
              <span className="text-[#E9004B] font-medium text-[16px] sm:text-[18px]">
                Contacts
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
