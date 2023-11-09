import Link from "next/link";
import MenuItem from "./menu-item";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import DarkModeSwitch from "./darkmode-switch";

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto  py-6">
      
      <div className="menu flex">
        <MenuItem title="HOME" Icon={AiFillHome} address="/" />
        <MenuItem title="ABOUT" Icon={AiFillInfoCircle} address="/about" />
      </div>

      <h2 className="text-2xl flex items-center">
        <DarkModeSwitch/>
        <Link href="/" className="ml-2">
          <span className="font-bold bg-amber-500 py-1 px-2 mr-1 rounded-lg inline-block">
            IMDb
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </h2>
    </div>
  );
};

export default Header;
