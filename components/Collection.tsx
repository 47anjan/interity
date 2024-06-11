import { collections } from "@/util/data";
import Image from "next/image";
import Link from "next/link";
import CollectionCard from "./CollectionCard";

const Collection = () => {
  return (
    <section className="max-w-container px-4 mx-auto mb-20 pt-section">
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
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  );
};
export default Collection;
