import { NavLink } from "react-router-dom";
import logo from "../assets/image.png";

export default function Header() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
    { name: "Resources", path: "/resources" },
    { name: "About US", path: "/about-us" },
    { name: "Join US", path: "/join-us" },
  ];

  return (
    <header className="bg-black text-white px-4 py-4 flex items-center justify-between">
      <img
        src={logo}
        alt="Logo"
        className="w-[198.1px] h-[47.3px] object-contain"
      />

      <nav className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `relative pb-1 font-bold transition-colors duration-300 ${
                isActive
                  ? "text-orange-500 after:absolute after:left-0 after:-bottom-1 after:w-1/2 after:h-[2px] after:bg-orange-500 after:rounded"
                  : "text-white hover:text-orange-500"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="flex space-x-4 items-center">
        <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition">
          Sign Up
        </button>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
          Schedule Demo
        </button>
      </div>
    </header>
  );
}
