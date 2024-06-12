import { Container } from "../components/container";

const Content = () => {
  const CARDS = [
    {
      img: "images/service-1.webp",
      heading: "Dry Shampoo",
      subheading: "60mi",
      price: "120.00 USD",
      discount: "$240",
    },
    {
      img: "images/service-2.webp",
      heading: "Canella Asiatica Toner",
      subheading: "60mi",
      price: "180.00 USD",
      discount: "$240",
    },
    {
      img: "images/service-3.webp",
      heading: "Canella Asiatica calming serum",
      subheading: "60mi",
      price: "200.00 USD",
      discount: "$240",
    },
    {
      img: "images/service-4.webp",
      heading: "Face Oil",
      subheading: "60mi",
      price: "90.00 USD",
      discount: "$240",
    },
    {
      img: "images/service-5.webp",
      heading: "Cabekka asuatuca eye cream",
      subheading: "60mi",
      price: "150.00 USD",
      discount: "$240",
    },
    {
      img: "images/service-6.webp",
      heading: "Vitamin C cleansing gel",
      subheading: "60mi",
      price: "150.00 USD",
      discount: "$240",
    },
  ];
  return (
    <div className="flex flex-col gap-12">
      <Top />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        {CARDS.map((card, index) => (
          <div className="flex flex-col cursor-pointer overflow-hidden group">
            <img
              style={{
                borderTopRightRadius: index === 2 ? "190px" : "",
              }}
              className="lg:h-[300px] object-cover h-[200px] transition transform group-hover:scale-105 duration-300"
              src={card.img}
              alt=""
            />
            <div
              style={{
                backgroundColor: index === 2 ? "#DAEDC9" : "",
              }}
              className="p-6 h-full bg-[#F8D1AD]"
            >
              <h2 className="text-[#111827] mb-2 text-[24px]">
                {card.heading}
              </h2>
              <p className="text-[#0000008F] mb-6 text-[14px]">
                {card.subheading}
              </p>
              <div className="flex gap-1 items-center">
                <p className="text-[#111827] text-[18px]">{card.price}</p>
                <p className="text-[#0000008F] text-[18px] line-through">
                  {card.discount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button />
    </div>
  );
};

const Top = () => {
  return (
    <div className="flex flex-col   items-center">
      <h2 className="text-[#f95533] font-bold text-[14px]">OUR SERVICES</h2>
      <p className="text-[#111827] font-semibold text-center lg:text-[48px] text-[26px] mt-2">
        Our most popular products
      </p>
    </div>
  );
};

const Button = () => {
  return (
    <div className="flex justify-center items-center">
      <button className="bg-[#f95533] lg:w-auto w-full rounded-full text-white py-4 px-12 hover:bg-[#FB9847] transition-all duration-300">
        Go to our shop
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <section className="w-full py-44 flex justify-center bg-[#FFF8E8]">
      <Container>
        <Content />
      </Container>
    </section>
  );
};

export { Services };
