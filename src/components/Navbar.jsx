import {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const [darkMode, setDarkMode] = useState(false)
  
  const newLocal = "md:hidden z-10 cursor-pointer"
 
  return (
    <div className={darkMode ? 'dark' : ""}>
      
      <div className="fixed w-full h-[80px] flex justify-between items-center px-5 bg-[#0a192f] text-gray-300 dark:bg-white dark:text-[#0a192f]">
        {/* logo */}
        <div>
          <h2 className="sm:text-lg md:text-xl"><span className="text-[#eab308]">Dan</span>.Coria</h2>
        </div>

        {/* menu */}

        <ul className="hidden md:flex">
          <li className="li hover:scale-110 duration-200 hover:text-[#eab308]">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="li hover:scale-110 duration-200 hover:text-[#eab308]">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="li hover:scale-110 duration-200 hover:text-[#eab308]">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="li hover:scale-110 duration-200 hover:text-[#eab308]">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="li hover:scale-110 duration-200 hover:text-[#eab308]">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* hamburger */}
        <div onClick={handleClick} className={newLocal}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>


        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center dark:bg-white dark:text-[#0a192f]'}>
          <li className="py-6 text-4xl">
            <Link  onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link></li>
          <li className="py-6 text-4xl">
            <Link  onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link  onClick={handleClick} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link  onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link  onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar