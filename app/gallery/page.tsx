import Image from "next/image";

const GalleryPage = () => {
  return (
    <div className="bg-dark-gray pt-section pb-20">
      <section className="max-w-container px-4 mx-auto">
        <header className="text-center mb-12 text-xl font-bold ">
          <h5 className="text-black text-olive-light mb-3">
            Share your setup with
          </h5>
          <h2 className="text-[40px] font-bold text-olive-dark">#Interity</h2>
        </header>

        <div className="flex flex-col lg:flex-row w-full gap-12">
          <div className="flex-1 flex flex-col gap-12">
            <Image
              src={"/gallery1.jpg"}
              width={800}
              height={400}
              alt="gallery1"
              className="w-full rounded object-cover h-[400px]"
            />

            <div className="flex flex-col md:flex-row flex-grow gap-12">
              <div className="w-full">
                <Image
                  src={"/gallery2.jpg"}
                  width={800}
                  height={400}
                  alt="gallery2"
                  className="w-full  rounded object-cover h-[400px] md:h-[230px]"
                />
              </div>
              <div className="w-full">
                <Image
                  src={"/gallery3.jpg"}
                  width={800}
                  height={400}
                  alt="gallery3"
                  className="w-full rounded object-cover h-[400px] md:h-[230px]"
                />
              </div>
            </div>
          </div>
          <div className="basis-[317px]">
            <Image
              src={"/gallery4.jpg"}
              width={800}
              height={400}
              alt="gallery3"
              className="w-full flex-1 rounded object-cover h-[400px] lg:h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default GalleryPage;
