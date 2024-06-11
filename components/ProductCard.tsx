import { Product } from "@/util/types";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <Link
      className="rounded group relative isolate h-fit overflow-hidden"
      href={`/`}
    >
      <Image
        width={700}
        height={570}
        // className={`w-full  object-cover ${
        //   index === 0 || (index + 1) % 4 === 0
        //     ? "h-[570px] "
        //     : "h-[384px]"
        // }`}
        className="w-full h-[384px] group-hover:brightness-105 group-hover:scale-105 object-cover duration-500 transition-all"
        src={product.image}
        alt={product.title}
      />
      <div className="absolute inset-0  flex items-end">
        <div className="pt-[18px] group-hover:translate-y-0 duration-500 transition-transform translate-y-full   bg-dark-gray/65 w-full px-[18px] pb-6">
          <h3 className="text-2xl font-bold mb-2 line-clamp-2">
            {product.title}
          </h3>
          <div className="flex items-center justify-between">
            <p className="max-w-[460px] line-clamp-2 text-sm text-[#2b2b2b]">
              {product.description}
            </p>
            <span className="text-[28px] font-semibold">${product.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
