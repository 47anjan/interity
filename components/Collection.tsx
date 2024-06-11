import { collections } from "@/util/data";
import Image from "next/image";
import Link from "next/link";

const Collection = () => {
  return (
    <section className="max-w-container px-4 mx-auto py-section">
      <header className="text-center mb-11">
        <h2 className="text-5xl font-semibold mb-6">
          Explore Our Stunning Collection
        </h2>
        <p className="text-lg max-w-[616px] text-light-dark mx-auto">
          Browse through our curated selection of exquisite furniture pieces
          designed to elevate your living space.
        </p>
      </header>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <Link
            className=" group transition-all duration-500  "
            key={collection.id}
            href={"/"}
          >
            <Image
              width={393}
              height={503}
              alt={collection.title}
              src={collection.image}
              className="w-full h-[503px] object-cover"
            />
            <div className="py-6 group-hover:bg-olive text-light-dark group-hover:text-white transition-all duration-500">
              <h4 className=" text-3xl font-semibold text-center">
                {collection.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Collection;
