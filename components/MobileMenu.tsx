"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Logo from "./Logo";
import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [closeMenu]);

  return (
    <>
      <button onClick={openMenu}>
        <LuMenu className="text-3xl text-olive" />
      </button>
      {open &&
        createPortal(
          <>
            <RemoveScroll>
              <FocusLock returnFocus>
                <div className="fixed  z-50 inset-0 p-4">
                  <div
                    onClick={closeMenu}
                    className="backdrop absolute inset-0 z-40  bg-opacity-50 backdrop-blur-[3px]"
                  />
                  <div className="drawer bg-white absolute top-0 bottom-0 w-full max-w-md text-white  z-50  flex flex-col right-0">
                    <header className="px-4 pt-6  pb-8   flex justify-between items-center">
                      <Logo />
                      <button onClick={closeMenu}>
                        <IoClose className="text-3xl text-olive" />
                      </button>
                    </header>
                    <div className="flex-1 pt-1 px-7 overflow-auto">
                      <ul className="flex flex-col text-xl font-medium text-black gap-6 ">
                        <li>
                          <Link
                            className="hover:text-olive duration-300 transition-all"
                            href="/"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="hover:text-olive duration-300 transition-all"
                            href="/products"
                          >
                            Products
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="hover:text-olive duration-300 transition-all"
                            href="/about"
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="hover:text-olive duration-300 transition-all"
                            href="/gallery"
                          >
                            Gallery
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <footer className="pt-2 pb-7 px-7 flex items-center justify-between gap-4">
                      <Link
                        className=" w-full grid h-10 rounded-full bg-transparent  place-content-center px-7 border hover:bg-olive hover:text-white transition-all duration-500 border-black text-black font-semibold"
                        href="/"
                      >
                        Sign In
                      </Link>
                    </footer>
                  </div>
                </div>
              </FocusLock>
            </RemoveScroll>
          </>,
          document.body
        )}
    </>
  );
};
export default MobileMenu;
