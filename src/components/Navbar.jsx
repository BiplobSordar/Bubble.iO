import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';

const links = [
  { name: "Home", to: "/" },
  { name: "App", to: "/apps" },
  { name: "Installation", to: "/installation" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigate();

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50 h-[78px] w-full max-w-[1600px] mx-auto">
      <div className="max-w-[1400px] h-full mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full px-4">

          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/assets/logo.png" className="h-[40px] w-[40px]" alt="Main Logo" />
              <h1 className="text-[16px] font-bold gradient-text">HERO.IO</h1>
            </Link>
          </div>

          <div className="flex justify-between items-center">
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block text-[16px] transition-all duration-300 font-medium ${
                      isActive
                        ? "bg-[linear-gradient(to_right,#632EE3,#9F62F2)] bg-clip-text text-transparent font-semibold border-b-2 border-[#632EE3]"
                        : "text-black hover:font-semibold hover:bg-[linear-gradient(to_right,#632EE3,#9F62F2)] hover:bg-clip-text hover:text-transparent"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="w-[145px] h-[43px] gradient-bg flex justify-center items-center gap-2 rounded-md">
              <Github />
              <span className="font-semibold text-[16px]">Contribute</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black focus:outline-none"
            >
              <Menu />
            </button>
          </div>

        </div>
      </div>

      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-primary pb-4 px-6 space-y-4 z-50 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >

        <div className="flex justify-end pt-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-black hover:text-secondary transition"
          >
            <X size={28} />
          </button>
        </div>


        <div className="flex flex-col space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `block text-[16px] py-3 transition-all duration-300 font-medium ${
                  isActive
                    ? "bg-[linear-gradient(to_right,#632EE3,#9F62F2)] bg-clip-text text-transparent font-semibold border-b-2 border-[#632EE3]"
                    : "text-black hover:font-semibold hover:bg-[linear-gradient(to_right,#632EE3,#9F62F2)] hover:bg-clip-text hover:text-transparent"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
           <button className="w-[145px] h-[43px] gradient-bg flex justify-center items-center gap-2 rounded-md">
              <Github />
              <span className="font-semibold text-[16px]">Contribute</span>
            </button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
