import { Menu } from "lucide-react";
import logo from "../../assets/logo-text.png";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="w-full border-b border-gray-100 sticky top-0 z-50 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <img src={logo} alt="" className="h-9 lg:order-1 order-2" />
        <Menu className="lg:hidden order-1" />
        <nav className="hidden items-center gap-8 lg:flex lg:order-2">
          <a href="" className="text-sm font font-medium text-pink-600">
            Home
          </a>
          <a href="" className="text-sm font font-medium text-gray-600">
            Technologies
          </a>
          <a href="" className="text-sm font font-medium text-gray-600">
            Projects
          </a>
          <a href="" className="text-sm font font-medium text-gray-600">
            About
          </a>
          <a href="" className="text-sm font font-medium text-gray-600">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-5 lg:order-3 order-3">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 "
          >
            Sign In
          </a>
          <button className="rounded-full btn-gradient px-5 py-2 text-sm font-semibold text-white shadow-sm ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
