import React from "react";
import Image from "next/image";
import contactImg from "../public/assets/contact.jpg";

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
              </div>
            </div>
            {/*Right*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
