import React, { useState } from "react";

// react router dom
import { Link } from "react-router-dom";

// icons
import { RiMenuFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const links = ["Home", "Education", "Work Experience", "Personal Projects"];

const Navigation: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:block border-b border-orange">
        <ul className="flex justify-end">
          {links.map((link) => (
            <Link
              className="p-4 hover:text-[#F9A03F]"
              to={link === "Home" ? "/" : `/${link}`}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
      <div
        className={`flex ${
          isNavOpen ? "justify-between" : "justify-end"
        }  m-8  lg:hidden`}
      >
        {isNavOpen && (
          <ul className="flex flex-col   h-screen w-[60%] border-r border-t border-b border-orange">
            {links.map((link) => (
              <Link
                className="p-4 border-b border-orange hover:text-[#F9A03F]"
                to={link === "Home" ? "/" : `/${link}`}
              >
                {link}
              </Link>
            ))}
          </ul>
        )}

        <div
          className="cursor-pointer"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {!isNavOpen ? <RiMenuFill size={30} /> : <IoMdClose size={30} />}
        </div>
      </div>
    </>
  );
};

export default Navigation;
