import ButtonShop from "@/components/ButtonShop";
import ProductCard from "@/components/ProductCard";
import { products } from "@/util/data";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <div>
      <section className="max-w-container mx-auto px-4 pt-section mb-28">
        <header className="mb-8 text-center md:text-start">
          <h5 className="text-3xl font-medium mb-5">Our Products</h5>
          <div className="flex items-center justify-between gap-5 flex-col md:flex-row ">
            <h2 className="text-4xl md:text-5xl font-bold">
              Discover Our Impressive Range
            </h2>
            <ButtonShop>Shop Now</ButtonShop>
          </div>
        </header>
        <div className="grid  md:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default ProductsPage;
