import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
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
          <div className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-1 ease-in duration-300">
          <div>
            <div className="flex w-full items-center justify-between ">
              <Image src="/../public/assets/logo.png" alt="/" className="left-0 top-0" width="150" height="150"/>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer mr-5">
              <AiOutlineClose/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
