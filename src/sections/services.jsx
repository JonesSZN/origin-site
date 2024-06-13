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
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {CARDS.map((card, index) => (
          <div className="group flex cursor-pointer flex-col overflow-hidden">
            <img
              style={{
                borderTopRightRadius: index === 2 ? "190px" : "",
              }}
              className="h-[200px] transform object-cover transition duration-300 group-hover:scale-105 lg:h-[300px]"
              src={card.img}
              alt=""
            />
            <div
              style={{
                backgroundColor: index === 2 ? "#DAEDC9" : "",
              }}
              className="h-full bg-[#F8D1AD] p-6"
            >
              <h2 className="mb-2 text-[24px] text-[#111827]">
                {card.heading}
              </h2>
              <p className="mb-6 text-[14px] text-[#0000008F]">
                {card.subheading}
              </p>
              <div className="flex items-center gap-1">
                <p className="text-[18px] text-[#111827]">{card.price}</p>
                <p className="text-[18px] text-[#0000008F] line-through">
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
    <div className="flex flex-col items-center">
      <h2 className="text-[14px] font-bold text-[#f95533]">OUR SERVICES</h2>
      <p className="mt-2 text-center text-[26px] font-semibold text-[#111827] lg:text-[48px]">
        Our most popular products
      </p>
    </div>
  );
};

const Button = () => {
  return (
    <div className="flex items-center justify-center">
      <button className="w-full rounded-full bg-[#f95533] px-12 py-4 text-white transition-all duration-300 hover:bg-[#FB9847] lg:w-auto">
        Go to our shop
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <section className="flex w-full justify-center bg-[#FFF8E8] py-44">
      <Container>
        <Content />
      </Container>
    </section>
  );
};

export { Services };
