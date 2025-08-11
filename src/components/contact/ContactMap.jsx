import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMap = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative w-full h-[400px] md:h-[600px]"
      data-aos="fade-up"
    >
      {/* Google Map Embed */}
      <iframe
        title="Dhaka Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9027810965537!2d90.3694481743207!3d23.750876984589804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bbc54b6e79%3A0xf6d1879b07c24fd!2sDhaka!5e0!3m2!1sen!2sbd!4v1691012345678!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        className="border-0 w-full h-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
