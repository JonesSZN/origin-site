import { Container } from "../components/container";

const Content = () => {
  const CARDS = [
    {
      img: "images/service-1.webp",
      heading: "Tips and tricks for a Healthy Glow",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Inventore veritatis et quasi architecto.",
    },
    {
      img: "images/service-2.webp",
      heading: "Skin Care Mistakes You Could be Making and How to Fix Them",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Inventore veritatis et quasi architecto.",
    },
    {
      img: "images/service-3.webp",
      heading: "5 Anti-aging Skin Care Tips to Keep Your Skin looking Young",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Inventore veritatis et quasi architecto.",
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
                borderTopRightRadius: index === 1 ? "190px" : "",
              }}
              className="lg:h-[300px] object-cover h-[200px] transition transform group-hover:scale-105 duration-300"
              src={card.img}
              alt=""
            />
            <div
              style={{
                backgroundColor: index === 1 ? "#DAEDC9" : "",
              }}
              className="p-6 h-full bg-[#E7E1AF]"
            >
              <h2 className="text-[#111827] mb-2 text-[24px]">
                {card.heading}
              </h2>
              <p className="text-[111827] text-[16px]">{card.description}</p>
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
      <p className="text-[#111827] font-semibold text-center lg:text-[48px] text-[26px] mt-2">
        Read our blog
      </p>
    </div>
  );
};

const Button = () => {
  return (
    <div className="flex justify-center items-center">
      <button className="border border-black font-semibold text-black lg:w-auto w-full rounded-full  py-4 px-12 hover:bg-[#EDDE70] transition-all duration-300">
        See all Articles
      </button>
    </div>
  );
};

const Blog = () => {
  return (
    <section className="w-full py-16 flex justify-center bg-[#FFF8E8]">
      <Container>
        <Content />
      </Container>
    </section>
  );
};

export { Blog };
