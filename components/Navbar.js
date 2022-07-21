import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full px-2 2xl:px-16 h-20 ">
        <Image
          src="/../public/assets/logo.png"
          alt="/"
          width="200"
          height="200"
        />
        <div>
          <ul className="hidden md:flex pr-2">
            <Link href="/">
              <li className="ml-10 text-base uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-base uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-base uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-base uppercase hover:border-b">Proyects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-base uppercase hover:border-b">Contact</li>
            </Link>
          </ul>
          <div className="md:hidden">
              <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
