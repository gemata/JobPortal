import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container max-w-[1200px] mx-auto py-10 px-[15px]">
        <div className="flex justify-between">
          <div>
            <h2 className="text-white text-lg font-bold mb-4 flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
              </svg>
              MyJob
            </h2>
            <p className="mb-2">
              Call now:{" "}
              <a href="tel:+38349488909" className="text-white">
                049 488-909
              </a>
            </p>
            <address className="not-italic">
              Dukagjini Residence - 1 Prishtina, Republic of Kosova
            </address>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Link</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Candidate</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-white">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Browse Employers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Candidate Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Saved Jobs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Employers</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-white">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Employers Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Applications
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 flex justify-between items-center">
          <p>© {currentYear} Job Portal. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
