const Subscriptions = () => {
  return (
    <section className="pt-20 md:pt-section md:pb-section">
      <article className="max-w-container text-white flex text-center items-center px-4 mx-auto pt-20 pb-[86px] md:rounded-[32px] flex-col bg-olive">
        <h2 className=" font-semibold text-[40px] mb-7">
          Subscribe and Earn 30% Off
        </h2>
        <p className="text-lg font-light mx-auto max-w-[628px] mb-12">
          Discover new arrivals and inspiration, plus get 15% off your first
          order on full-priced items.{" "}
        </p>
        <form className="flex items-center flex-col md:flex-row justify-center  w-full gap-6">
          <input
            className="w-full max-w-[500px] text-white focus-visible:outline-none  rounded-md h-14 bg-transparent placeholder:text-white py-[18px] px-[26px] border border-white"
            type="email"
            placeholder="Enter your email "
          />
          <button className="text-xl font-semibold text-olive bg-white rounded-md h-14 grid pt-1 w-full sm:w-fit place-content-center px-8 uppercase">
            SUBSCRIBE
          </button>
        </form>
      </article>
    </section>
  );
};
export default Subscriptions;
