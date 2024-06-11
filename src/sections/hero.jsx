function Hero() {
  return (
    <section className="w-full py-44 flex justify-center bg-[#FFF8E8]">
      <div className="lg:w-[70%] w-[95%] flex justify-center max-w-[1450px]">
        <Content />
      </div>
    </section>
  );
}

function Content() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[#111827] lg:text-6xl text-4xl mb-8 font-semibold text-center lg:max-w-[800px] max-w-[400px]">
        Professional Skincare in harmony with nature
      </h1>
      <p className="text-[#0000008F] text-[18px] lg:max-w-[950px] max-w-[390px] text-center">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <Buttons />
      <img
        className="lg:w-auto w-[382px]"
        src="images/hero-image.webp"
        alt=""
      />
    </div>
  );
}

function Buttons() {
  return (
    <div className="flex lg:flex-row flex-col gap-4 my-12 items-center">
      <button className="py-4 px-12 hover:bg-[#FB9847] transition-all duration-300 text-white bg-[#f95533] rounded-full">
        Get a consultation
      </button>
      <button className="border py-4 lg:w-auto w-full px-12 hover:bg-[#FFF079] transition-all duration-300 border-black rounded-full">
        Shop
      </button>
    </div>
  );
}

export default Hero;
