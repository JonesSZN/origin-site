import { ChevronRight, ChevronLeft } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="w-full py-24 flex justify-center bg-[#FFF8E8]">
      <div className="lg:w-full w-[90%] flex justify-center items-center max-w-[1450px]">
        <Content />
      </div>
    </section>
  );
};

const Content = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <Top />
      <Cards />
    </div>
  );
};

const Cards = () => {
  const CARDS_DATA = [
    {
      heading:
        "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. ”",
      profile: {
        img: "images/testimonial-woman-1.png",
        Name: "Andrea",
        school: "Student at ...",
      },
    },
    {
      heading:
        "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. ”",
      profile: {
        img: "images/testimonial-woman-2.png",
        Name: "Sarah",
        school: "Student at ...",
      },
    },
    {
      heading:
        "“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. ”",
      profile: {
        img: "images/testimonial-man-3.png",
        Name: "John",
        school: "Student at ...",
      },
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-6 lg:ml-24">
      {CARDS_DATA.map((card, index) => (
        <div className="border-[2px] z-50 relative border-[#f95533] p-12 flex flex-col gap-4">
          {index === 0 && (
            <div className="absolute bg-[#FFF8E8] -left-5 top-[30%]  lg:flex flex-col hidden gap-4">
              <div className="  rounded-full  flex items-center justify-center border border-black w-12 h-12">
                <ChevronRight />
              </div>
              <div className="rounded-full flex items-center justify-center border border-black w-12 h-12">
                <ChevronLeft />
              </div>
            </div>
          )}
          {
            <div>
              <h2 className="text-[#374151] text-[16px]">{card.heading}</h2>
              <div className="flex gap-4 items-center">
                <img
                  className="w-[48px] object-contain rounded-full"
                  src={card.profile.img}
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[#111827] font-semibold text-[16px]">
                    {card.profile.Name}
                  </p>
                  <p className="text-[14px] text-[#0000008F]">
                    {card.profile.school}
                  </p>
                </div>
              </div>
            </div>
          }
        </div>
      ))}
      <div className=" bg-[#FFF8E8] -left-5 top-[30%]  lg:hidden  flex flex-row  gap-4">
        <div className="  rounded-full  flex items-center justify-center border border-black w-12 h-12">
          <ChevronRight />
        </div>
        <div className="rounded-full flex items-center justify-center border border-black w-12 h-12">
          <ChevronLeft />
        </div>
      </div>
    </div>
  );
};

const Top = () => {
  return (
    <div className="flex flex-col lg:ml-24 gap-4">
      <h2 className="text-[#f95533] lg-[16px] text-[14px] font-semibold">
        TESTIMONIALS
      </h2>
      <p className="text-[#111827] lg:text-[48px] text-[26px] font-semibold">
        Our happy customers
      </p>
    </div>
  );
};

export default Testimonials;
