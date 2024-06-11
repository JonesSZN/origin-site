import { Facebook, Youtube, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section className=" w-full bg-[#E6E7B4]">
      <Content />
    </section>
  );
};

const Content = () => {
  return (
    <div className="flex lg:flex-row flex-col">
      <ContentLeft />
      <ContentRight />
    </div>
  );
};

const ContentLeft = () => {
  return (
    <div
      style={{
        backgroundImage: `url(images/flower-contact.webp)`,
      }}
      className="w-full bg-no-repeat bg-cover bg-center lg:h-auto min-h-1 aspect-square h-[350px] bg-black"
    >
      {/* <img
        className="w-full h-full object-cover"
        src="images/flower-contact.webp"
        alt=""
      /> */}
    </div>
  );
};

const ContentRight = () => {
  return (
    <div className="bg-[#E6E7B4] lg:p-0 p-6  lg:w-full aspect-square h-auto  flex lg:justify-center items-center ">
      <div className=" flex flex-col  justify-center  gap-12">
        <div>
          <h1 className="text-[#f95533] font-bold mb-2 lg:text-[48px] text-[26px]">
            Contact us
          </h1>
          <hr className="border-[1px] border-black/20" />
        </div>

        <ContentInfo />
        <SocialMedia />
      </div>
    </div>
  );
};

const ContentInfo = () => {
  return (
    <div>
      <h3 className="text-[24px] font-semibold text-[#111827]">
        Contact information
      </h3>
      <p className="text-[#0000008F] text-[18px]">+ 1000 000 0000</p>
      <p className="text-[#0000008F] text-[18px]">name@email.com</p>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[#111827] font-semibold text-[24px]">Social Media</h1>
      <SocialIcons />
    </div>
  );
};

const SocialIcons = () => {
  const ICONS = [
    "images/facebook.svg",
    "images/youtube.svg",
    "images/instagram.svg",
  ];
  return (
    <div className="flex gap-3 items-center">
      {ICONS.map((icon) => (
        <img className="cursor-pointer" src={icon} alt="" />
      ))}
    </div>
  );
};
export default Contact;
