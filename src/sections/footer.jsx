const footer = () => {
  return (
    <footer className="w-full flex py-12 justify-center bg-[#000000] ">
      <div className="lg:w-[68%] w-[90%] max-w-[1450px]">
        <FooterContent />
      </div>
    </footer>
  );
};

const FooterContent = () => {
  return (
    <div>
      <FooterTop />
      <FooterNav />
      <FooterBottom />
    </div>
  );
};

const FooterTop = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between mb-12 gap-4 lg:items-center">
      <img className="lg:w-auto w-[56px]" src="images/footer-logo.svg" alt="" />
      <div className="flex gap-4 cursor-pointer">
        <img
          style={{
            backgroundColor: "white",
            borderRadius: "899px",
          }}
          src="images/facebook.svg"
          alt=""
        />
        <img
          style={{
            backgroundColor: "white",
            borderRadius: "899px",
          }}
          src="images/youtube.svg"
          alt=""
        />
        <img
          style={{
            backgroundColor: "white",
            borderRadius: "899px",
          }}
          src="images/instagram.svg"
          alt=""
        />
      </div>
    </div>
  );
};

const FooterNav = () => {
  return (
    <div className="lg:flex lg:flex-row grid grid-cols-2 lg:gap-56 ">
      <FooterLeftCol1 />
      <FooterLeftCol2 />
      <FooterLeftCol3 />
    </div>
  );
};

function FooterLeftCol1() {
  const FOOTER_COL1 = ["Navigation", "Home", "Shop", "Blog"];

  return (
    <ul className="flex flex-col gap-3">
      {FOOTER_COL1.map((item, index) => (
        <li
          style={{
            color: index === 0 ? "white" : "",
            fontSize: index === 0 ? "20px" : "",
            fontWeight: index === 0 ? "bold" : "", // Add margin-bottom for index 0
          }}
          className="text-[#FFFFFF8F] hover:text-white transition-all duration-200 cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function FooterLeftCol2() {
  const FOOTER_COL1 = [
    "Utility",
    "Get Started",
    "Changelog",
    "Styleguide",
    "License",
    "Animation",
    "Marketing utilities",
  ];

  return (
    <ul className="flex flex-col gap-3">
      {FOOTER_COL1.map((item, index) => (
        <li
          style={{
            color: index === 0 ? "white" : "",
            fontSize: index === 0 ? "20px" : "",
            fontWeight: index === 0 ? "bold" : "", // Add margin-bottom for index 0
          }}
          className="text-[#FFFFFF8F] hover:text-white transition-all duration-200 cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function FooterLeftCol3() {
  const FOOTER_COL1 = [
    "Origin",
    "1 000 000 0000",
    "help@thesprkl.com",
    "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  ];

  return (
    <ul className="flex flex-col gap-3">
      {FOOTER_COL1.map((item, index) => (
        <li
          style={{
            color: index === 0 ? "white" : "",
            fontSize: index === 0 ? "20px" : "",
            fontWeight: index === 0 ? "bold" : "", // Add margin-bottom for index 0
          }}
          className="text-[#FFFFFF8F] hover:text-white transition-all duration-200 cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

const FooterBottom = () => {
  return (
    <div className="flex lg:flex-row mt-16 flex-col gap-4 justify-between">
      <p className="text-[#FFFFFF8F] text-center">
        Copyright ⓒ Origin Webflow Template. Designed by{" "}
        <span className="text-[#f95533] cursor-pointer hover:text-[#320905] transition-all duration-200">
          EGO
        </span>
      </p>
      <div className="flex lg:flex-row flex-col items-center gap-4 ">
        <p className="cursor-pointer hover:text-white text-[#FFFFFF8F] transition-all duration-200">
          More Templates
        </p>
        <p className="text-[#FFFFFF8F]">
          Powered by{" "}
          <span className="text-white cursor-pointer  hover:text-neutral-500 transition-all duration-200">
            Webflow
          </span>
        </p>
      </div>
    </div>
  );
};

export default footer;
