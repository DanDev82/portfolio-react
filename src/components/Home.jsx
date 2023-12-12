import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full flex justify-center items-center lg:pt-40 lg:pb-40 lg:py-40 py-20 mt-[-2px] dark:bg-white dark:text-[#0a192f]">
      
      {/* container */}
      <div className="lg:flex block max-w-[1200px] mx-auto">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col  justify-center h-full">
        <p className="text-yellow-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] dark:text-[#0a192f]">Dan Coria</h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0] my-3 dark:text-[#050f1dc7]">I'm a Front End Developer</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">I used to believe that being a web developer would involve secluded cubicle work, with headphones on, tirelessly debugging and constructing the next groundbreaking technology that would revolutionize the world. However, as I gained experience over the past 5+ years in the industry, it became clear that I haven't quite had that exact experience. Being a web developer is actually more focused on identifying the optimal solution for the problem at hand. This can involve writing code, and exploring third-party solutions.</p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-500 dark:bg-yellow-500 dark:border-yellow-500 hover:text-[#0a192f]">
            <Link to="work" smooth={true} duration={500}>
                View Work
              </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
      <div className="px-4 flex lg:w-[45%] w-[100%]">
        <img src="https://xaplclpxalpltojhiqtx.supabase.co/storage/v1/object/public/Images/_Me.png" className="lg:w-[70%] w-[200px] lg:h-[90%] h-[250px] justify-center lg:items-end items-center mt-6 lg:mt-0" alt="" />
      </div>
      </div>
      {/* End container */}
    </div>
  )
}

export default Home