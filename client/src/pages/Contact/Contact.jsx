import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import LeafletMap from "./MapComponent";

const ContactUs = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto my-0 px-[15px] py-0">
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-blue-600 font-bold mb-2">Who we are</h2>
            <h1 className="text-3xl font-bold mb-4">
              We care about customer services
            </h1>
            <p className="text-gray-600 mb-6">
              Want to chat? We'd love to hear from you! Get in touch with our
              Customer Success Team to inquire about speaking events,
              advertising rates, or just say hello.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold">
              Email Support
            </button>
          </div>
          <div className="md:w-1/2 bg-white p-8 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subjects"
                  placeholder="Subjects"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md font-semibold"
              >
                Send Message <FaPaperPlane className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <LeafletMap />
      </div>
    </>
  );
};

export default ContactUs;
