import React from "react";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px], w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase  text-sm tracking-widest text-gray-600">
            Let´s build something together
          </p>
          <h1 className="py-4 text-gray-800">
            Hi, I'm <span className="text-red-500">Ivan</span>{" "}
          </h1>
          <h1 className=" py-1 text-gray-800">A Front End Web Developer</h1>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            I'm a Front-End Web Developer specializing in React and Next.js buildings for creating excepcional digitals experiences. Currently I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
