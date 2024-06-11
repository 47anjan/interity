import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t  border-black/20">
      <section className="max-w-container px-4 mx-auto ">
        <div className="py-12 flex flex-col lg:flex-row gap-20 lg:gap-32">
          <div className="">
            <Logo />
            <p className="max-w-[285px] mt-12 text-light-gray">
              400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
            </p>
          </div>
          <div className="flex-1 flex flex-col md:flex-row lg:justify-evenly gap-20 lg:gap-5">
            <div>
              <h5 className="text-light-gray font-medium mb-12">Links</h5>
              <ul className="flex flex-col text-black font-medium gap-10">
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
                    href="/"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-olive duration-300 transition-all"
                    href="/"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-olive duration-300 transition-all"
                    href="/"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-light-gray font-medium mb-12">Help</h5>
              <ul className="flex flex-col text-black font-medium gap-10">
                <li>
                  <Link
                    className="hover:text-olive duration-300 transition-all"
                    href="/"
                  >
                    Payment Options
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-olive duration-300 transition-all"
                    href="/"
                  >
                    Returns
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-olive duration-300 transition-all"
                    href="/"
                  >
                    Privacy Policies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-light-gray font-medium mb-12">Newsletter</h5>
              <form className=" flex items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="text-light-gray bg-transparent w-full max-w-52 border-black placeholder:text-light-gray focus-visible:outline-none border-b pb-1"
                />
                <button className="border-b pb-1 border-black font-semibold uppercase">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#d9d9d9] mb-9">
          2024 Interity all rights reverved
        </div>
      </section>
    </footer>
  );
};
export default Footer;
