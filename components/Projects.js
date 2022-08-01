import React from "react";
import Image from "next/image";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import Link from "next/link";
import ProjectsItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-red-500">
          Projects
        </p>
        <h2 className="p-4"> What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItem />
        </div>
      </div>
    </div>
  );
};

export default Projects;
