import React from "react";
import Image from "next/image";
import contactImg from "../public/assets/contact.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className=" w-full lg:h-screen pt-16">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-red-500 font-bold">
          Contact
        </p>
        <h2 className="p-4">Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            {/*left*/}
            <div className="flex flex-col items-center justify-center">
              <div className="lg:p-4 h-20 ">
                <div>
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300 "
                    src={contactImg}
                    alt="/"
                  />
                </div>
                <div>
                  <h2 className="py-2">Ivan Leyva</h2>
                  <p className="font-bold text-lg">Front-End Developer</p>
                  <p className="py-4 text-xl">
                    I am available for freelance or full-time positions. Contact
                    me and let`s talk.
                  </p>
                </div>
                <div className="">
                  <p className="uppercase pt-8">Connect With Me</p>
                  <div className="flex items-center justify-between py-4 mb-0">
                    <Link href="https://www.linkedin.com/in/isleyva/">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-green-500">
                      <FaLinkedinIn />
                    </div>
                    </Link>
                    <Link href="https://github.com/isleyva">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-green-500">
                      <FaGithub />
                    </div>
                    </Link>
                    <Link href="/#contact">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-green-500">
                      <AiOutlineMail />
                    </div>
                    </Link>
                    <Link href="">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200 hover:shadow-green-500">
                      <BsFillPersonLinesFill />
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*right*/}
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="rounded-lg p-3 border-2 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="rounded-lg p-3 border-2 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="rounded-lg p-3 border-2 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="rounded-lg p-3 border-2 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="rounded-lg p-3 border-2  border-gray-300"
                    rows={10}
                    type="text"
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#f04242]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
