import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="relative">
      {/* Background section with blur effect */}
      <div className="absolute inset-0 bg-cover bg-center filter blur-lg"
        style={{ backgroundImage: `url('https://your-image-url.com')` }}>
      </div>

      {/* Content section */}
      <div className="relative z-10  bg-opacity-80 p-10 rounded-lg shadow-2xl max-w-3xl mx-auto mt-16">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <div className="hotel-info text-center mb-12">
          <p className="text-lg flex justify-center items-center mb-4">
            <FaMapMarkerAlt className="mr-2 text-blue-600" />
            <strong>Address:</strong> 123 Beach Avenue, Ocean View, Limpopo
          </p>
          <p className="text-lg flex justify-center items-center mb-4">
            <FaPhone className="mr-2 text-blue-600" />
            <strong>Phone:</strong> +27 12 345 6789
          </p>
          <p className="text-lg flex justify-center items-center mb-4">
            <FaEnvelope className="mr-2 text-blue-600" />
            <strong>Email:</strong> contact@paradiseresort.co.za
          </p>
        </div>

        <div className="contact-form mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Send us a Message</h2>
          <form className="bg- p-8 rounded-lg shadow-2xl bg-">
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded border border-gray-300"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded border border-gray-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full p-3 rounded border border-gray-300"
                rows="5"
                placeholder="Enter your message"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="social-media text-center">
          <h2 className="text-3xl font-semibold mb-4">Connect with Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/" className="text-blue-500 hover:underline flex items-center">
              <FaFacebook className="mr-2" /> Facebook
            </a>
            <a href="https://twitter.com/yourhotel" className="text-blue-400 hover:underline flex items-center">
              <FaTwitter className="mr-2" /> Twitter
            </a>
            <a href="https://instagram.com/yourhotel" className="text-pink-600 hover:underline flex items-center">
              <FaInstagram className="mr-2" /> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
