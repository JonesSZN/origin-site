import { Container } from "../components/container";

function Content() {
  return (
    <div className="flex flex-col gap-12">
      <Top />
      <div className="flex lg:flex-row lg:gap-32 gap-12 flex-col-reverse">
        <LeftSide />
        <RightImage />
      </div>
    </div>
  );
}

function RightImage() {
  return (
    <img
      className="w-[729px] lg:h-[410px] h-[214px] object-cover "
      src="images/woman-2.jpg"
      alt=""
    />
  );
}

function LeftSide() {
  const SKIN_OBJ = [
    {
      heading: "Plant-based, cruelty-free, and eco-friendly products",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "Plant-based, cruelty-free, and eco-friendly products",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "Plant-based, cruelty-free, and eco-friendly products",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {SKIN_OBJ.map((item) => (
        <>
          <div className="flex gap-4">
            <div className="bg-[#f95533] shrink-0 w-[24px] h-[24px] rounded-full"></div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[#111827] text-[19px] max-w-[650px] font-semibold">
                {item.heading}
              </h2>
              <p className="text-[14px] max-w-[560px] inline-block  text-[#0000008F]">
                {item.description}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

function Top() {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-16 gap-4 lg:items-end mb-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-[#f95533] text-[14px] font-semibold">Why us</h2>
        <p className="lg:text-[48px] max-w-[500px] text-[26px] text-[#111827] font-bold">
          Your Path to Radiant Skin
        </p>
      </div>
      <p className="text-[#000000B8] text-[16px] max-w-[530px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </p>
    </div>
  );
}

function Skin() {
  return (
    <section className="w-full py-32 bg-[#FFF8E8] flex justify-center">
      <Container>
        <Content />
      </Container>
    </section>
  );
}

export { Skin };
