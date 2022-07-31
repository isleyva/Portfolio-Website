import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase tracking-widest text-red-500 font-bold text-xl">
          Technologies
        </p>
        <h2 className="py-4">What can I use</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl roundel-xl hover:scale-105 ease-in duration-300 hover:shadow-orange-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl roundel-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl roundel-xl hover:scale-105 ease-in duration-300 hover:shadow-yellow-500">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl roundel-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl roundel-xl hover:scale-105 ease-in duration-300 hover:shadow-black">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl roundel-xl hover:scale-105 ease-in duration-300 hover:shadow-black">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github1.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl roundel-xl hover:scale-105 ease-in duration-300 hover:shadow-orange-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/firebase.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl roundel-xl hover:scale-105 ease-in duration-300 hover:shadow-blue-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  alt="/"
                  width="64px"
                  height="64px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwinds</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
