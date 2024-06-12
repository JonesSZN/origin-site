import { Container } from "../components/container";

function Content() {
  return (
    <div className="flex flex-col gap-12">
      <Top />
      <div className="flex lg:flex-row lg:gap-32 gap-12 flex-col">
        <LeftImage />
        <RightSide />
      </div>
    </div>
  );
}

function LeftImage() {
  return (
    <img className="w-[510px] object-cover " src="images/woman-1.webp" alt="" />
  );
}

function RightSide() {
  const SKIN_OBJ = [
    {
      heading: "Acne",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "Aging and Wrinkles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "Dull and lifeless Skin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "Uneven Texture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {SKIN_OBJ.map((item) => (
        <>
          <div className="flex gap-6">
            <div className="bg-[#f95533] shrink-0 w-[24px] h-[24px] rounded-full"></div>
            <div className="flex flex-col">
              <h2 className="text-[#111827] text-[19px] font-semibold">
                {item.heading}
              </h2>
              <p className="text-[14px]  text-[#0000008F]">
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
    <div className="flex flex-col gap-2">
      <h2 className="text-[#f95533] text-[14px] font-semibold">FOR WHOM</h2>
      <p className="lg:text-[48px] text-[26px] text-[#111827] font-bold">
        What skin problems we solve
      </p>
    </div>
  );
}

function Solve() {
  return (
    <section className="w-full bg-[#FFF8E8] flex justify-center">
      <Container>
        <Content />
      </Container>
    </section>
  );
}

export { Solve };
