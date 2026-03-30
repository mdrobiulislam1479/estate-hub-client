"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../ui/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Estate", href: "/browse-estate" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 border-b border-white/6 bg-[#0a0a0f]/75 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo />

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-[13.5px] tracking-wide rounded-lg transition-colors duration-200 group
                      ${
                        isActive
                          ? "text-white font-medium"
                          : "text-white/50 hover:text-white/90 font-normal"
                      }`}
                  >
                    {link.name}
                    {/* Animated underline */}
                    <span
                      className={`absolute inset-x-4 bottom-1.5 h-px bg-linear-to-r from-violet-500 to-purple-400 rounded-full transition-transform duration-300 origin-left
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="text-[13px] text-white/50 hover:text-white border border-white/10 hover:border-white/25 hover:bg-white/4 px-4.5 py-1.75 rounded-lg transition-all duration-200 tracking-wide">
                Log in
              </button>
              <button className="text-[13px] font-medium text-white bg-linear-to-br from-violet-600 to-purple-500 px-5 py-1.75 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_4px_24px_rgba(139,92,246,0.4)] hover:-translate-y-px transition-all duration-200 tracking-wide">
                Register
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center gap-1.25 w-10 h-10 rounded-lg border border-white/10 hover:border-white/25 text-white/60 hover:text-white transition-all duration-200"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-4.5 h-px bg-current rounded-full transition-all duration-300
                  ${isOpen ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`block w-4.5 h-px bg-current rounded-full transition-all duration-300
                  ${isOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block w-4.5 h-px bg-current rounded-full transition-all duration-300
                  ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-350 ease-in-out border-t border-white/6 bg-[#0a0a0f]/95 backdrop-blur-xl
            ${isOpen ? "max-h-80 py-3" : "max-h-0 py-0"}`}
        >
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative block px-8 py-3 text-sm tracking-wide transition-colors duration-200
                    ${
                      isActive
                        ? "text-white bg-violet-500/[0.07]"
                        : "text-white/50 hover:text-white hover:bg-white/3"
                    }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-[20%] bottom-[20%] w-0.5 bg-linear-to-b from-violet-500 to-purple-400 rounded-r" />
                  )}
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <div className="flex gap-2.5 px-8 pt-3 mt-2 border-t border-white/6">
              <button className="flex-1 text-[13px] text-white/50 border border-white/10 py-2 rounded-lg transition-all duration-200">
                Log in
              </button>
              <button className="flex-1 text-[13px] font-medium text-white bg-linear-to-br from-violet-600 to-purple-500 py-2 rounded-lg">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
