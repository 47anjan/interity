import { Collection } from "@/util/types";
import Image from "next/image";
import Link from "next/link";

interface CollectionPops {
  collection: Collection;
}

const CollectionCard = ({ collection }: CollectionPops) => {
  return (
    <Link className=" group transition-all duration-500  " href={"/"}>
      <div className="overflow-hidden">
        <Image
          width={393}
          height={503}
          alt={collection.title}
          src={collection.image}
          className="w-full group-hover:scale-105 transition-all duration-300  group-hover:brightness-105 h-[503px] object-cover"
        />
      </div>
      <div className="pt-6 group-hover:text-olive text-light-dark  transition-all duration-500">
        <h4 className=" text-3xl font-semibold text-center">
          {collection.title}
        </h4>
      </div>
    </Link>
  );
};
export default CollectionCard;
