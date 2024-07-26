import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Adon-venture-Black.jpg"; // Ensure you have your logo image in the assets folder
import Features from "./Features";
import LowerFooter from "./LowerFooter";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <Features />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-5">
        <div>
          <img src={logo} alt="Kitab Ghor" className="mb-4 h-10" />
          <p className="mb-2 text-gray-700">096 138 29654</p>
          <p className="text-gray-700">(9:00am - 10:00pm)</p>
          <p className="text-gray-700">01786 089316 (Only whatsapp)</p>
          <p className="text-gray-700">support@kitabghor.com</p>
          <p className="text-gray-700">
            J-40, Extension pallabi, Mirpur, Dhaka-1216
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-gray-800">LINKS</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <NavLink to="/book-category" className="hover:underline">
                Book Category
              </NavLink>
            </li>
            <li>
              <NavLink to="/writers" className="hover:underline">
                Writers
              </NavLink>
            </li>
            <li>
              <NavLink to="/publication-list" className="hover:underline">
                Publication List
              </NavLink>
            </li>
            <li>
              <NavLink to="/stationary-items" className="hover:underline">
                Stationary Items
              </NavLink>
            </li>
            <li>
              <NavLink to="/islamic-items" className="hover:underline">
                Islamic Items
              </NavLink>
            </li>
            <li>
              <NavLink to="/corporate-sale" className="hover:underline">
                Corporate Sale
              </NavLink>
            </li>
            <li>
              <NavLink to="/writer-publisher" className="hover:underline">
                Writer/Publisher
              </NavLink>
            </li>
            <li>
              <NavLink to="/pre-order" className="hover:underline">
                Pre Order
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-gray-800">COMPANY</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <NavLink to="/about-us" className="hover:underline">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/delivery" className="hover:underline">
                Delivery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/return-refund-cancellation"
                className="hover:underline"
              >
                Return, Refund & Cancellation
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms-conditions" className="hover:underline">
                Terms of Conditions
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-gray-800">MY ACCOUNT</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <NavLink to="/sign-in-register" className="hover:underline">
                Sign In / Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/order-history" className="hover:underline">
                Order History
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorite-lists" className="hover:underline">
                My Favorite Lists
              </NavLink>
            </li>
            <li>
              <NavLink to="/wishlist" className="hover:underline">
                My Wishlist
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-gray-800">CUSTOMER SUPPORT</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <NavLink to="/order-track" className="hover:underline">
                Order Track
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className="hover:underline">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/how-to-shop" className="hover:underline">
                How to Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="hover:underline">
                FAQ
              </NavLink>
            </li>
          </ul>
          <h3 className="mb-4 mt-8 font-bold text-gray-800">
            STAY CONNECTED WITH US
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <LowerFooter />
    </footer>
  );
};

export default Footer;
