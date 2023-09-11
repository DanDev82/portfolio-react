import React from 'react'
import BootsImg from '../assets/Boots.png'
import AxolotlImg from '../assets/Axolotl.png'
import RMRImg from '../assets/RMR.png'
import TyphoonImg from '../assets/Typhoon.png'
import HwyImg from '../assets/Hwy.png'
import SovaImg from '../assets/Sova.png'
import {useState} from 'react'

function Work() {
  const [darkMode, setDarkMode] = useState(false)
  const boots = 'https://rujoboots.com'
  const axolotl = 'https://axolotlplanet.com'
  const rmr = 'https://rmrsolutions.com?asd'
  const typhoon = 'https://typhoontexas.com'
  const hwy30 = 'https://hwy30tx.com'
  const sova = 'https://sovahotels.com'
  return (
    <div name="work" className="w-full  lg:py-40 py-20 px-5 my-[-2px] bg-[#0a192f] text-gray-300 dark:bg-white">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-500 dark:text-[#0a192f]">Work</p>
          <p className="py-6 dark:text-[#0a192f]">// Check out some of my recent work.</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div style={{backgroundImage: `url(${BootsImg})`}}  
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
           
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Shopify
              </span>
              <div className="pt-8 text-center">
                <a href={boots} target="_blank">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* gird item */}
          <div style={{backgroundImage: `url(${AxolotlImg})`}}  
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
           
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Shopify
              </span>
              <div className="pt-8 text-center">
                <a href={axolotl} target="_blank">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div style={{backgroundImage: `url(${RMRImg})`}}  
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
           
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Shopify
              </span>
              <div className="pt-8 text-center">
                <a href={rmr} target="_blank">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* gird item */}
          <div style={{backgroundImage: `url(${TyphoonImg})`}}  
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
           
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                WordPress
              </span>
              <div className="pt-8 text-center">
                <a href={typhoon} target="_blank">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item */}
          <div style={{backgroundImage: `url(${HwyImg})`}}  
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
           
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                WordPress
              </span>
              <div className="pt-8 text-center">
                <a href={hwy30} target="_blank">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
              </div>
            </div>
          </div>
          {/* gird item */}
          <div style={{backgroundImage: `url(${SovaImg})`}}  
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
           
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                WordPress
              </span>
              <div className="pt-8 text-center">
                <a href={sova} target="_blank">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Work
