// src/components/Header.jsx
import React, { useState } from "react";
import { AiFillHome, AiOutlineUnorderedList } from "react-icons/ai";
import { FaBlog, FaBookOpen, FaPenNib } from "react-icons/fa";
import {
  MdContactMail,
  MdEvent,
  MdLocalGroceryStore,
  MdShoppingCart,
} from "react-icons/md";
import { Link } from "react-router-dom";
import FirstHeader from "./FirstHeader";
import SubMenu from "./SubMenu";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-slate-800 shadow">
      <FirstHeader />

      <nav className="bgThemeColor shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex space-x-7">
            <Link to="/" className="menuHeader flex items-center">
              <AiFillHome className="mr-1" /> {/* Home icon */}
              হোম
            </Link>

            <Link to="/category" className="menuHeader flex items-center">
              <AiOutlineUnorderedList className="mr-1" />
              বিষয়সমূহ
            </Link>

            <Link to="/authors" className="menuHeader flex items-center">
              <FaPenNib className="mr-1" />
              লেখক
            </Link>

            <Link to="/publishers" className="menuHeader flex items-center">
              <FaBookOpen className="mr-1" />
              প্রকাশক
            </Link>

            <div className="menuHeader flex items-center">
              <SubMenu />
            </div>

            <Link to="/book-fair" className="menuHeader flex items-center">
              <MdEvent className="mr-1" />
              বইমেলা 2024
            </Link>

            <Link to="/pre-order" className="menuHeader flex items-center">
              <MdShoppingCart className="mr-1" />
              প্রি-অর্ডার
            </Link>

            <Link
              to="/islamic-products"
              className="menuHeader flex items-center"
            >
              <MdLocalGroceryStore className="mr-1" />
              ইসলামিক পণ্য
            </Link>

            <Link
              to="/blogList"
              className="flex items-center rounded-full bg-gradient-to-r  from-blue-500 to-purple-600 p-2 text-white transition hover:text-black"
            >
              <FaBlog className="mr-2" />
              ব্লগসমুহ
            </Link>
          </div>

          <div>
            <Link to="/contact" className="menuHeader flex items-center">
              <MdContactMail className="mr-1" />
              যোগাযোগ
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
