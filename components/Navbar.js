import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose, AiOutlineMail, } from "react-icons/ai";
import { FaGithub, FaLinkedinIn,  } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
      
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/logo.png"
          alt="/"
          width="200"
          height="200"
        />
        <div>
          <ul className="hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-base uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-base uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-base uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-base uppercase hover:border-b">
                Proyects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-base uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : "" }>
        <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-1 ease-in duration-300" : "fixed left-[-100%] top-0  ease-in duration-300"}>
          <div>
            <div className="flex w-full items-center justify-between h-20">
              <Image
                src="/../public/assets/logo.png"
                alt="/"
                className="object-cover h-48 w-96 "
                width="150"
                height="150"
              />
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mr-5">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-0 ml-10 ">
              <p className="w-[85%] md:w-[90$] py-4">
                Let´s build your dream proyect together
              </p>
            </div>
          </div>
          <div>
            <ul className="ml-10 mt-5 uppercase">
              <Link href="/">
                <li className="py-4 text-sm font-bold">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm font-bold">About </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm font-bold">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm font-bold">Proyects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm font-bold">Contact</li>
              </Link>
            </ul>
            <p className="uppercase tracking-widest text-[#4eb534] pt-32 ml-10 font-bold">
                {" "}
                Let´s connect
              </p>
            <div className="pt-6 p-4">
             
              <div className="flex items-center justify-between my-4 w-full sm:w-[80$]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-green-500">
                  <FaLinkedinIn  />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-green-500">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-green-500">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-green-500">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
