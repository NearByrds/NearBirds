import React, { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../../../assets/logo.png";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between px-7 md:px-32 py-5 border-b-2 border-gray-100">
        <div className="flex md:items-center  md:gap-32">
          <a href="#">
            <img className="w-[120px] h-[20px]" src={logo} alt="logo" />
          </a>
          <ul className=" hidden md:flex items-center gap-7 color-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Map</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
          </ul>
        </div>
        {!isNavOpen && (
          <IoMenuOutline
            onClick={() => setIsNavOpen(true)}
            className="text-5xl flex md:hidden hover:cursor-pointer"
          />
        )}
        {isNavOpen && (
          <IoCloseOutline
            onClick={() => setIsNavOpen(false)}
            className="text-5xl flex md:hidden hover:cursor-pointer"
          />
        )}
        <ul className=" hidden md:flex  items-center gap-8">
          <li>
            <a href="#">
              <AiOutlineGithub className="color-1 w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineInstagram className="color-1 w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="#">
              <TiSocialFacebook className="color-1 w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineTwitter className="color-1 w-8 h-8" />
            </a>
          </li>
        </ul>
      </div>

      {isNavOpen && (
        <div className="absolute z-1000 back-1 left-0 right-0 md:hidden">
          <div className="flex flex-col pt-16 pb-8  items-center space-y-4 ">
            <ul className="flex flex-col gap-5 color-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Map</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
            </ul>
            <ul className="flex  items-center gap-8">
              <li>
                <a href="#">
                  <AiOutlineGithub className="color-1 w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineInstagram className="color-1 w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="#">
                  <TiSocialFacebook className="color-1 w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineTwitter className="color-1 w-8 h-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
