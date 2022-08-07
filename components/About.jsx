import React from "react";
import Image from "next/image";
import aboutImg from "../public/assets/about.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 mt-16">
          <p className="uppercase text-xl tracking-widest text-red-500 font-bold">
            
            About
          </p>
          <h2 className="py-4"> Who I Am</h2>
          <p className="py-2 text-red-500">
             Passionate for building digital experiences
          </p>
          <p className="py-2 text-black text-lg">
            Hi, my name is Ivan and I have more than 2 years of experience in
            the world of informatic. Started whith Cibersecurity a couple of
            years ago, I learned alot of systems in specially about Linux. After
            this I started to learn about React and starting to build web
            proyects. I&apos;m in continuous learning and starting to make new
            proyects using different technologies like Next.js,Tailwinds and
            more cool stuff. Also looking for take a professional career into
            programming.
          </p>
          <Link href="/#projects">
          <p className="py-2 text-black underline cursor-pointer">
            Check out some of my lastest proyects
          </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-grey-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={aboutImg} alt="about" />
          
        </div>
      </div>
    </div>
  );
};

export default About;
