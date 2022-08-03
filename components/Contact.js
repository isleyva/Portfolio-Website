import React from "react";
import Image from "next/image";
import contactImg from "../public/assets/contact.jpg";
import { FaLinkedinIn, FaGithub, } from "react-icons/fa";
import { AiOutlineMail, } from "react-icons/ai";
import { BsFillPersonLinesFill, } from "react-icons/bs";

const Contact = () => {
  return (
    <div className=" w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-red-500">
          Contact
        </p>
        <h2 className="p-4">Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="cols-span-3 lg:col-spam-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            {/*left*/}
            <div className="flex flex-col items-center justify-center">
              <div className="lg:p-4 h-full">
                <div>
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300 "
                    src={contactImg}
                    alt="/"
                  />
                </div>
                <div>
                  <h2 className="py-2">Ivan Leyva</h2>
                  <p>Front-End Developer</p>
                  <p className="py-4">
                    I am available for freelance or full-time positions. Contact
                    me and let's talk.
                  </p>
                </div>
                <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
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
            {/*Right*/}
          </div>
        </div>
      
  );
};

export default Contact;
