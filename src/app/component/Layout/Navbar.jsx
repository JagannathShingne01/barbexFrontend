"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiPlus, HiMinus } from 'react-icons/hi';
import { MdOutlineSearch } from "react-icons/md";

const NavItem = ({ nav, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`transition font-bold text-base p-1 hover:scale-105 hover:text-primary flex gap-2 ${isMobile ? "text-white" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {nav.name}
      {nav.name !== "Contact" && (isHovered ? <HiMinus className="mt-1" /> : <HiPlus className="mt-1" />)}
    </div>
  );
};

const Navbar = () => {
  const navigation = [
    { name: "Home" },
    { name: "Pages" },
    { name: "Shop" },
    { name: "Blog" },
    { name: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header className={`w-full fixed z-50 top-0 left-0 shadow-xl transition-colors duration-300 ${scrolled ? "bg-black text-secondary" : "bg-transparent text-white"}`}>
      <div className="mx-auto max-w-screen px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-24">
          {/* Left Section: Logo and Hotline */}
          <div className="flex gap-10 items-center">
            <div className="pr-14 text-4xl xl:border-r-2 xl:border-gray-700">Barbex</div>
            <div className="pl-4 text-xl hidden xl:flex items-center gap-4">
              <FaPhoneVolume className="mt-1" />
              Hotline +125 (895) 658
            </div>
          </div>

          {/* Right Section: Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6">
                {navigation.map((nav) => (
                  <li key={nav.name}>
                    <NavItem nav={nav} />
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex gap-9 items-center">
              <MdOutlineSearch />
              <button className="xl:px-16 px-6 py-1 xl:py-4 bg-primary text-sm xl:text-lg font-medium hover:bg-white hover:text-primary ease-in duration-300">
                Book Now {">>"}
              </button>
            </div>
          </div>

          {/* Hamburger Menu for Mobile/Tablet */}
          <div className="lg:hidden flex items-center">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden block absolute w-full top-16 bg-black transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex flex-col text-base p-8 gap-4">
              {navigation.map((nav) => (
                <div key={nav.name} onClick={() => setIsOpen(false)}>
                  <NavItem nav={nav} isMobile={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
