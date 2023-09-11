import React from 'react'
import {useState} from 'react'

function About() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ""}>
      <div name="about" className="w-full lg:py-40 py-20 px-4 h-[50vh] mt-[-2px] mb-[-2px] bg-[#0a192f] text-gray-300 dark:bg-white dark:text-[#0a192f]">
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className="max-w-[1200px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
                About
              </p>
            </div> 
            <div></div> 
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi. I'm Dan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className="text-[#8892b0]">I am a self-taught web developer with 8+ years experience who is passionate about all things web. My experience spans from building high converting landing pages to full e-commerce websites. I love problem solving and thrive on finding solutions to daily challenges in web development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About