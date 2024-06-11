import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed z-50 top-[30px] w-full bg-transparent px-2">
      <nav className="max-w-7xl   w-full py-2  px-2 mx-auto rounded-full  flex items-center justify-between">
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
          className="h-10 rounded-full bg-transparent grid place-content-center px-7 border border-black text-black font-semibold"
          href="/"
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
};
export default Header;
