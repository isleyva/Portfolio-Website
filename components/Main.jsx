import React from "react";
import {FaLinkedinIn, FaGithub} from "react-icons/fa";
import {AiOutlineMail,} from "react-icons/ai";
import {BsFillPersonLinesFill} from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1240px], w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase  text-sm tracking-widest text-gray-600">
            Let&apos;s build something together
          </p>
          <h1 className="py-4 text-gray-800">
            Hi, I&apos;m <span className="text-red-500">Ivan</span>{" "}
          </h1>
          <h1 className=" py-1 text-gray-800">A Front End Web Developer</h1>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            I&apos;m a Front-End Web Developer specializing in React and Next.js buildings for creating excepcional digitals experiences. Currently I&apos;m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[300px] m-auto py-4">
          <Link href="https://www.linkedin.com/in/isleyva/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-green-500">
                  <FaLinkedinIn  />
                </div>
                </Link>
               <Link href="https://github.com/isleyva">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-green-500">
                  <FaGithub />
                </div>
                </Link>
                <Link href="/#contact">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-green-500">
                  <AiOutlineMail  />
                </div>
                </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
