import React from "react";
import logo from "../assets/dumbell.svg";

const navbarPages = [
  { name: "Acasa", path: "/" },
  { name: "Despre noi", path: "/about" },
  { name: "Servicii", path: "/services" },
  { name: "Echipa noastra", path: "/our-team" },
  { name: "Cariera", path: "/career" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <div>
      <nav className="fixed w-full z-50 bg-primary-blue py-1">
        <div className="max-w-5xl mx-auto flex flex-row justify-between items-center">
          <a href="/">
            <img src={logo} alt="logo" width={80} />
          </a>

          <ul className=" flex flex-row ">
            {navbarPages.map((page, index) => (
              <li
                key={index}
                className="text-xl pl-5 text-white hover:text-gray-300 ease-out duration-300"
              >
                <a href={page.path}>{page.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div style={{ height: 88 }} />
    </div>
  );
}

export default Navbar;
