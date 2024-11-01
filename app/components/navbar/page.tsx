"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiUser, HiSearch } from "react-icons/hi";

const Header: React.FC = () => {
  const CurrentRoute = usePathname();

  return (
    <>
      <header
        className="px-4 sm:px-6 md:px-10 lg:px-20 flex justify-between items-center bg-black bg-opacity-20 w-full"
        style={{ height: "160px" }}
      >
        {/* Left Logo */}
        <Image
          src="/images/COFFOHOLICS.png"
          alt="Coffoholics logo"
          width={120}
          height={120}
          priority
          className="object-contain cursor-pointer"
        />

        {/* Navigation Links */}
        <nav className="hidden md:flex flex-1 justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
          <Link
            href={"/"}
            className={`${
              CurrentRoute === "/" ? "opacity-100 bg-red-600" : "opacity-60"
            } hover:opacity-100 hover:bg-red-600 py-2 px-4 md:py-4 md:px-6 shadow-sm font-outfit text-[#FFF8DB] transition duration-200 ease-in-out`}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={`${
              CurrentRoute === "/about" ? "opacity-100 bg-red-600" : "opacity-60"
            } hover:opacity-100 font-outfit hover:bg-red-600 py-2 px-4 md:py-4 md:px-6 shadow-sm text-[#FFF8DB] transition duration-200 ease-in-out`}
          >
            About
          </Link>
          <Link
            href={"/coffees"}
            className={`${
              CurrentRoute === "/coffees" ? "opacity-100 bg-red-600" : "opacity-60"
            } hover:opacity-100 font-outfit hover:bg-red-600 py-2 px-4 md:py-4 md:px-6 shadow-sm text-[#FFF8DB] transition duration-200 ease-in-out`}
          >
            Coffees
          </Link>
          <Link
            href={"/contact"}
            className={`${
              CurrentRoute === "/contact" ? "opacity-100 bg-red-600" : "opacity-60"
            } hover:opacity-100 font-outfit hover:bg-red-600 py-2 px-4 md:py-4 md:px-6 shadow-sm text-[#FFF8DB] transition duration-200 ease-in-out`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <HiSearch
            className="opacity-60 hover:opacity-100 h-10 w-10 md:h-16 md:w-16 hover:bg-red-600 p-2 md:p-4 rounded-full shadow-sm transition duration-200 ease-in-out"
            style={{ color: "#FFF8DB" }}
            aria-label="Search"
          />
          <Link
            href={"/login"}
            className="opacity-60 hover:opacity-100 text-md md:text-lg font-outfit py-1 px-2 md:py-2 md:px-4 flex items-center rounded shadow-lg hover:bg-red-600 transition duration-200 ease-in-out"
            style={{ color: "#FFF8DB" }}
          >
            <HiUser className="h-5 w-5 md:h-6 md:w-6 mr-1 md:mr-2" style={{ color: "#FFF8DB" }} />
            Login
          </Link>
        </div>
      </header>

      {/* Centered Container */}
      <div
        className="relative flex flex-col items-center mt-6 mx-4 sm:mx-10 md:mx-auto bg-black bg-opacity-50 justify-start max-w-xl md:max-w-3xl lg:max-w-4xl text-center"
        style={{ height: "auto", paddingTop: "40px", paddingBottom: "40px" }}
      >
        <h1 className="font-aclonica text-2xl sm:text-3xl md:text-4xl mt-4 sm:mt-10 text-[#FFF8DB]">
          Welcome to our coffee shop!
        </h1>
        <h2 className="font-aclonica text-lg sm:text-xl md:text-2xl mt-4 sm:mt-8 text-[#FFF8DB]">
          Brewed to Perfection, Served with Love!
        </h2>

        <p className="font-outfit text-base sm:text-lg md:text-xl mt-6 sm:mt-8 max-w-xl md:max-w-3xl leading-relaxed text-[#FFF8DB]">
          At the heart of Coffoholics is a commitment to quality. We source our beans from sustainable farms, ensuring
          that every sip you take is packed with rich, bold flavors. Our expert baristas are passionate about the craft,
          serving up everything from the classic espresso to unique specialty drinks. Whether you're a coffee
          connoisseur or just starting to explore the world of coffee, you'll find something to fall in love with here.
        </p>

        {/* Button Container */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6 sm:mt-10">
          {/* First Button */}
          <Link
            href="/about"
            className="text-sm sm:text-md font-outfit font-bold text-white py-3 px-10 md:py-4 md:px-14 bg-red-600 flex items-center justify-center rounded shadow-lg hover:bg-white hover:text-red-600 transition-colors duration-200 ease-in-out tracking-wider mt-4 sm:mt-0"
          >
            ABOUT US
          </Link>

          {/* Second Button */}
          <Link
            href="/contact"
            className="text-sm sm:text-md font-outfit font-bold text-black py-3 px-10 md:py-4 md:px-14 bg-white flex items-center justify-center rounded shadow-lg hover:bg-red-600 hover:text-white transition-colors duration-200 ease-in-out tracking-wider mt-4 sm:mt-0"
          >
            CALL NOW
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
