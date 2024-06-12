import { ChevronDown } from "lucide-react";
import { Container } from "../components/container";

const Content = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <Top />
      <div className="flex lg:flex-row flex-col-reverse gap-8 lg:gap-44">
        <Left />
        <Right />
      </div>
    </div>
  );
};

const Left = () => {
  const LIST_ARR = [
    "Can I return or exchange products if they don't work for me?",
    "Are your products cruelty-free and not tested on animals?",
    "Do you offer any loyalty or rewards program for customers?",
    "Can I contact your customer service for further assistance or product recommendations?",
    "Can I purchase gift cards?",
  ];

  return (
    <div className="flex flex-col gap-12">
      {LIST_ARR.map((item) => (
        <div className="flex gap-4 cursor-pointer">
          <ChevronDown color=" #374151" size={20} />
          <p className="text-[#374151] font-semibold text-[16px] max-w-[400px]">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

const Right = () => {
  return (
    <img
      className="h-[599px] w-[399px] object-cover"
      src="images/faq-image.jpg"
      alt=""
    />
  );
};

const Top = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[#f95533] font-bold text-[14px] lg:text-center">
        FAQ
      </h2>
      <p className="text-[#111827] font-bold lg:text-[48px] text-[26px]">
        Frequently asked questions
      </p>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="w-full py-24 flex justify-center bg-[#FFF8E8]">
      <Container>
        <Content />
      </Container>
    </section>
  );
};

export { Faq };
