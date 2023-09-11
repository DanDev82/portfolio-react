import React from 'react'
import {useState} from 'react'

function Contact() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ""}>
      <div name="contact" className="w-full  lg:py-40 py-20 px-9 bg-[#0a192f] flex justify-center items-center dark:bg-white">
        <form method="POST" action="https://getform.io/f/99657f2d-48eb-462e-bb07-56b6b63dd0c8" className="flex flex-col max-w-[600px] w-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-300 dark:text-[#0a192f]">Contact</p>
            <p className="text-gray-300 py-4 dark:text-[#0a192f]">// Submit the form below or shoot me an email - ifdanthencool@gmail.com</p>
          </div>
          <input className=" p-2 bg-[#ccd6f6] dark:bg-[#dde0e4] dark:text-[#0a192f]" type="text" placeholder="Name" name='name' />
          <input className="my-4 p-2 bg-[#ccd6f6] dark:bg-[#dde0e4] dark:text-[#0a192f]" type="email" placeholder="Email" name='email' />
          <textarea className="p-2 bg-[#ccd6f6] dark:bg-[#dde0e4] dark:text-[#0a192f]" name="message" rows="10" placeholder="Message"></textarea>
          <button className="text-white border-2 hover:bg-yellow-500 hover:border-yellow-500 dark:text-[#0a192f] dark:border-[#0a192f] hover:text-[#0a192f] px-4 py-3 my-8 mx-auto flex items-center">Let's Connect</button>
        </form>
      </div>

    </div>
  )
}

export default Contact