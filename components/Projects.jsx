import React from "react";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import Link from "next/link";
import ProjectsItem from "./ProjectItem";
import spacexImg from "../public/assets/projects/spacexApiphoto.jpg";

const Linkto = () => {
  ruturn (
    <Link href="spacex-api-deepman42.vercel.app/"/>
  )
} 

const Projects = () => {
  return (
    <div id="projects" className="w-full  pt-16">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-red-500 font-bold">
          Projects
        </p>
        <h2 className="p-4"> What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItem title="Crypto Base" backgroundImg={cryptoImg} projectUrl="https://crypto-base.vercel.app/"/>
          <ProjectsItem title="Spacex Api" backgroundImg={spacexImg} projectUrl="https://spacex-api-deepman42.vercel.app/"/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
