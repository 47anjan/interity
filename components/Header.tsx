"use client";

import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const scroll = useScroll();
  const scrollDir = scroll.y > 85 ? "down" : "up";

  return (
    <header
      className={twMerge(
        "fixed z-50 transition-all duration-500 w-full  px-2",
        scrollDir === "down" ? "top-0 bg-white" : "top-[30px] bg-transparent"
      )}
    >
      <nav className="max-w-7xl  w-full py-2  px-2 mx-auto rounded-full  flex items-center justify-between">
        <Link className="font-bold ml-2 text-2xl" href="/">
          Interity
        </Link>

        <ul className="hidden md:flex items-center gap-10 lg:gap-16 text-xl">
          <li>
            <Link
              className="hover:font-bold duration-300 transition-all"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:font-bold duration-300 transition-all"
              href="/"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className="hover:font-bold duration-300 transition-all"
              href="/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:font-bold duration-300 transition-all"
              href="/"
            >
              Gallery
            </Link>
          </li>
        </ul>
        <Link
          className="h-10 rounded-full bg-transparent grid place-content-center px-7 border hover:bg-olive hover:text-white transition-all duration-500 border-black text-black font-semibold"
          href="/"
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
};
export default Header;
