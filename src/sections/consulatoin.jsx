const Consulatoin = () => {
  return (
    <section className="w-full py-24 flex justify-center bg-[#E6E7B4]">
      <div className="max-w-[1450px] lg:w-auto w-[90%] flex justify-center items-center">
        <Content />
      </div>
    </section>
  );
};

const Content = () => {
  const INPUT_ARRAY = ["Name", "Email address"];
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="lg:text-[48px] text-[26px] text-center mb-6 font-semibold">
        Get a consultation on your skin type
      </h1>
      <form className="flex flex-col lg:w-[500px] w-[382px]  items-center justify-center gap-4">
        {INPUT_ARRAY.map((input) => (
          <input
            className="text-black outline-none border w-full placeholder-gray-900 bg-[#E6E7B4] border-black rounded-full py-3 px-6"
            placeholder={input}
            type="text"
          />
        ))}
        <select
          name="skinType"
          id="skinType"
          class="text-black border bg-[#E6E7B4] w-full border-black rounded-full py-3 px-6 "
        >
          <option value="">Select your skin type</option>
          <option value="oily">Oily</option>
          <option value="dry">Dry</option>
          <option value="combination">Combination</option>
          <option value="normal">Normal</option>
        </select>
        <textarea
          className="w-full py-3 px-6 rounded-full outline-none placeholder-gray-900 border border-black bg-transparent"
          placeholder="Additional information..."
          name=""
          id=""
        ></textarea>
        <button className="bg-[#f95533] text-white w-full rounded-full py-3 px-8 hover:bg-[#FB9847] transition-all duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Consulatoin;
