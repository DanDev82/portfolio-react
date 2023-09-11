import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/js.png'
import ReactImg from '../assets/react.png'
import Shopify from '../assets/shopify.png'
import WordPress from '../assets/wp.png'
import {useState} from 'react'

function Skills() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ""}>
      <div name="skills" className="w-full lg:py-40 py-20 my-[-2px] bg-[#0a192f] px-4 text-gray-300 dark:bg-white">
        {/* container */}
        <div className="max-w-[1200px] mx-auto flex flex-col justify-center px-4">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-yellow-500 dark:text-[#0a192f]">Skills</p>
            <p className="py-4 dark:text-[#0a192f]">// These are the technologies I work with. </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] dark:shadow-gray-300 hover:scale-110 duration-500 pt-2">
              <div className="rounded-full bg-gray-200 w-[100px] h-[100px] mx-auto pt-3 dark:bg-[#0a192f]">
                <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
              </div>
              <p className="my-4 dark:text-[#0a192f]">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] dark:shadow-gray-300 hover:scale-110 duration-500 pt-2">
              <div className="rounded-full bg-gray-200 w-[100px] h-[100px] mx-auto pt-3 dark:bg-[#0a192f]">
              <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
              </div>
              <p className="my-4 dark:text-[#0a192f]">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] dark:shadow-gray-300 hover:scale-110 duration-500 pt-2">
              <div className="rounded-full bg-gray-200 w-[100px] h-[100px] mx-auto pt-3 dark:bg-[#0a192f]">
              <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
              </div>
              <p className="my-4 dark:text-[#0a192f]">JavaScript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] dark:shadow-gray-300 hover:scale-110 duration-500 pt-2">
              <div className="rounded-full bg-gray-200 w-[100px] h-[100px] mx-auto pt-3 dark:bg-[#0a192f]">
              <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
              </div>
              <p className="my-4 dark:text-[#0a192f]">React</p>
            </div>
            <div className="shadow-md shadow-[#040c16] dark:shadow-gray-300 hover:scale-110 duration-500 pt-2">
              <div className="rounded-full bg-gray-200 w-[100px] h-[100px] mx-auto pt-3 dark:bg-[#0a192f]">
              <img className="w-20 mx-auto" src={Shopify} alt="Shopify icon" />
              </div>
              <p className="my-4 dark:text-[#0a192f]">Shopify</p>
            </div>
            <div className="shadow-md shadow-[#040c16] dark:shadow-gray-300 hover:scale-110 duration-500 pt-2">
              <div className="rounded-full bg-gray-200 w-[100px] h-[100px] mx-auto pt-3 dark:bg-[#0a192f]">
              <img className="w-20 mx-auto" src={WordPress} alt="WordPress icon" />
              </div>
              <p className="my-4 dark:text-[#0a192f]">WordPress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills