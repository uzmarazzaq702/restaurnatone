import React, { useState, useEffect, useRef } from "react";
import { FaSquareInstagram, FaXTwitter, FaPinterest } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { Mail, MapPin, Phone } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.user_name.trim()) tempErrors.user_name = "Name is required";
    if (!formData.user_email.trim()) tempErrors.user_email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.user_email))
      tempErrors.user_email = "Email is invalid";
    if (!formData.phone.trim()) tempErrors.phone = "Phone is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs
      .sendForm("service_ailfw2n", "template_puckwbo", form.current, {
        publicKey: "1jiYQKTSxeQ3LfCYT",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", phone: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-white py-10 px-5 md:px-20 flex flex-col md:flex-row gap-10">
      {/* Left Side */}
      <div
        className="w-full md:w-1/2"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <p className="text-[#E9004B] font-semibold uppercase text-[18px]">
          How can we help?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
          Have Questions? <br /> Get In touch!
        </h2>
        <p className="text-gray-600 mb-6 text-[16px] md:text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam
          the quam dolor ready to use nunc semper.
        </p>

        <div className="space-y-4 text-gray-700">
          <div className="flex items-center gap-3">
            <Mail className="text-[#E9004B] w-6 h-6" />
            <span>www.radiustheme.com</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="text-[#E9004B] w-6 h-6 mt-1" />
            <p>
              4 apt. Flawing Street. The Grand Avenue <br />
              Liverpool, UK 33342
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-[#E9004B] w-6 h-6" />
            <span>+5-2345-6859</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          {[ImFacebook, FaXTwitter, FaSquareInstagram, FaPinterest].map(
            (Icon, idx) => (
              <div
                key={idx}
                className="w-10 h-10 border border-[#E9004B] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <Icon className="w-5 h-5 text-[#E9004B]" />
              </div>
            )
          )}
        </div>
      </div>

      {/* Right Side */}
      <div
        className="w-full md:w-1/2 bg-[#FFFFFF] p-6 md:p-10 rounded-md shadow-md border border-gray-200"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-2">Contact Form</h3>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipiscing Mauris nullam the
          integer nunc semper nulla faucibus vulputate.
        </p>

        <form className="space-y-4" ref={form} onSubmit={sendEmail} noValidate>
          <div>
            <input
              type="text"
              name="user_name"
              placeholder="Full Name*"
              value={formData.user_name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.user_name ? "border-red-500" : "border-gray-300"
              } focus:ring-[#E9004B]`}
            />
            {errors.user_name && (
              <p className="text-red-500 text-sm mt-1">{errors.user_name}</p>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <input
                type="email"
                name="user_email"
                placeholder="Email Address*"
                value={formData.user_email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.user_email ? "border-red-500" : "border-gray-300"
                } focus:ring-[#E9004B]`}
              />
              {errors.user_email && (
                <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>
              )}
            </div>
            <div className="w-full">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } focus:ring-[#E9004B]`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message Here*"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:ring-[#E9004B]`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#E9004B] text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-700 transition"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
