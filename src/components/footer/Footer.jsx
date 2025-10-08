import React from 'react';
import { RiCodeAiLine } from 'react-icons/ri';
import { Link } from 'react-router';

const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-300 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + About */}
          <div className='text-center space-y-3'>
            <Link
              to="/"
              className="font-bold flex flex-col justify-center md:flex-row lg:flex-row items-center w-full md:w-auto lg:w-auto"
            >
              <RiCodeAiLine className="mr-2 text-orange-600 text-3xl" />
              <div className="text-md md:text-2xl lg:text-2xl">
                <span className="text-orange-600">C</span>ode
                <span className="text-orange-600">M</span>art.
                <span className="text-orange-600">io</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400">
              Your one-stop digital marketplace for code, creativity, and
              innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Report Issue
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe for latest updates & offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2  border-b-2 border-orange-600 text-white outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-lg font-semibold text-white transition">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-orange-400 font-medium">CodeMart.io</span>. All
          rights reserved.
        </div>
      </footer>
    );
};

export default Footer;