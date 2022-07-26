import React from 'react'


const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
            <p className='py-4 uppercase'> About</p>
            <h2> Who I Am</h2>
            <p>// Passionate for building digital experiences</p>
            <p>
              Hi, my name is Ivan and I have more than 2 years of experience in the world of informatic.
              Started whith Cibersecurity a couple of years ago, i learned alot of systems in specialy about Linux.
              After this i started to learn about React and starting to build competitives web proyects.
              I'm in continuous learning and starting to make new proyects using different technologies like Next.js,Tailwinds and more cool stuff.
              And also looking for take a professional career into programming.
            </p>
            <p>Check out some of my lastest proyects</p>
            </div>
            <div>
              <img src="" alt='about' className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default About