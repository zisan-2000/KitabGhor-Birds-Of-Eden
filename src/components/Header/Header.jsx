import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai"; // Import the home icon
import { Link } from "react-router-dom";
import FirstHeader from "./FirstHeader";
import SubMenu from "./SubMenu";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <FirstHeader />
      <nav className="h-16 bg-pink-100">
        <div className="mx-auto flex max-w-7xl gap-6 space-x-4 p-5 ">
          <Link to="/" className="flex items-center hover:text-red-500">
            <AiFillHome className="mr-1" /> {/* Home icon */}
            হোম
          </Link>
          <Link to="/category/:category" className=" hover:text-red-500">
            বিষয়সমূহ
          </Link>
          <Link to="/authors" className="hover:text-red-500">
            লেখক
          </Link>
          <Link to="/publishers" className="hover:text-red-500">
            প্রকাশক
          </Link>

          <SubMenu />

          <Link to="/book-fair" className="hover:text-red-500">
            বইমেলা 2024
          </Link>
          <Link to="/pre-order" className="hover:text-red-500">
            প্রি-অর্ডার
          </Link>
          <Link to="/islamic-products" className="hover:text-red-500">
            ইসলামিক পণ্য
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
