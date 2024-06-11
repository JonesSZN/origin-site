import { MenuIcon } from "lucide-react";

function Header() {
  return (
    <header className="w-full fixed z-[999] flex justify-center bg-[#FFF8E8]">
      <div className="lg:w-[68%] w-[90%] max-w-[1450px]">
        <Nav />
      </div>
    </header>
  );
}

function Nav() {
  return (
    <nav className="w-full flex py-4 justify-between items-center">
      <NavLeft />
      <NavRight />
    </nav>
  );
}

function NavLeft() {
  return (
    <ul className="flex  cursor-pointer gap-6 text-[16px] items-center">
      <li>
        <img src="images/logo.svg" alt="" />
      </li>
      <li className="lg:block hidden hover:text-[#f95533] transition-all duration-300``">
        Home
      </li>
      <li className="lg:block hidden hover:text-[#f95533] transition-all duration-300">
        Shop
      </li>
      <li className="lg:block hidden hover:text-[#f95533] transition-all duration-300">
        Blog
      </li>
      <li className="lg:block hidden hover:text-[#f95533] transition-all duration-300">
        Get a Consultation
      </li>
    </ul>
  );
}
function NavRight() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-1">
        <img
          className="w-[23px] cursor-pointer"
          src="images/shopping-cart.svg"
          alt=""
        />
        <p className="text-[#f95533] text-[14px] font-bold">0</p>
      </div>

      <MenuIcon className="lg:hidden" color="black" size={30} />
      <button className="bg-[#f95533] lg:block hidden `hover:bg-[#FB9847] transition-all duration-300` py-3 px-8 rounded-full text-white">
        Shop
      </button>
    </div>
  );
}

export default Header;
