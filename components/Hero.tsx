import Link from "next/link";
import ButtonShop from "./ButtonShop";

const Hero = () => {
  return (
    <section className="min-h-[1024px] pt-[190px] bg-hero bg-center bg-cover bg-no-repeat px-4 flex flex-col items-center gap-9 text-center">
      <h1 className="max-w-[1027px] font-bold text-5xl leading-normal md:text-6xl md:leading-snug ">
        Discover Your Perfect Piece of Furniture
      </h1>
      <p className="text-xl">
        Explore our wide selection of high-quality furniture for every room in
        your home.
      </p>
      <ButtonShop>Shop Now</ButtonShop>
    </section>
  );
};
export default Hero;
