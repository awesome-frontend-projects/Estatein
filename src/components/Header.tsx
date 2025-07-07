"use client";
import { navItems } from "@/data/data";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  return (
    <header className="w-full border border-grey-15 bg-grey-10">
      {/* Top bar */}
      <div className="bg-grey-15 text-center flex items-center gap-2 justify-center flex-wrap py-4">
        <p>✨Discover Your Dream Property with Estatein</p>
        <Link href="#" className="hover:underline text-sm sm:text-base">
          Learn More
        </Link>
      </div>
      {/* Nav bar */}
      <div className="container flex items-center justify-between pt-4 md:pt-7 pb-3.5 lg:pb-5">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={114} height={34} />
        </Link>

        {/* Mobile menu */}
        <nav className={`navbar ${isOpen ? "active" : ""}`}>
          {/* wrapper */}
          <button
            className="absolute top-10 right-5 border border-grey-30"
            aria-label="close menu"
            onClick={handleClick}
          >
            <RiCloseLine size={30} aria-hidden="true" focusable="false" />
          </button>

          <ul className="grid gap-3.5">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`hover:text-white transition-colors text-lg ${
                    pathname === item.href ? "text-white" : ""
                  }`}
                  onClick={handleClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Button */}
          <Link
            href={"#"}
            className="primary-btn block mt-10"
            onClick={handleClick}
          >
            Contact Us
          </Link>
        </nav>

        {/* Lg menu */}
        <ul className="max-lg:hidden flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`hover:text-white transition-colors text-lg ${
                  pathname === item.href ? "text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Open Menu */}
        <button
          className="lg:hidden"
          onClick={handleClick}
          aria-label="Open Menu"
        >
          <RiMenuLine size={30} aria-hidden="true" focusable="false" />
        </button>

        {/* Button */}
        <Link href={"#"} className="primary-btn max-lg:hidden">
          Contact Us
        </Link>
      </div>
    </header>
  );
}
