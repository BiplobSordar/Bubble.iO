import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${form.name}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#001931] mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          We are here to help you. Send us a message or reach out through our contact details.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
       
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
            required
          />
          <button
            type="submit"
            className="gradient-bg text-white font-semibold px-6 py-3 rounded-md transition-transform duration-200 hover:scale-105"
          >
            Send Message
          </button>
        </form>

   
        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-4 text-gray-800">
            <MapPin className="text-[#632EE3] w-6 h-6" />
            <span>123 Book Street, Jashore City</span>
          </div>
          <div className="flex items-center gap-4 text-gray-800">
            <Mail className="text-[#632EE3] w-6 h-6" />
            <span>hello@bookhub.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-800">
            <Phone className="text-[#632EE3] w-6 h-6" />
            <span>+88 (019) 123-45657</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
