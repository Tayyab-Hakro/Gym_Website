import { AiOutlineHome, AiOutlineInfoCircle, AiOutlinePhone } from 'react-icons/ai';
import { FaUsers, FaAddressBook } from 'react-icons/fa';
import { GiGymBag } from 'react-icons/gi';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Left: Title */}
        <div className="text-2xl font-bold">
          Fitness World
        </div>

        {/* Right: Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="flex items-center gap-1 hover:text-gray-300 transition-all duration-300"
          >
            <AiOutlineHome /> Home
          </a>
          <a
            href="#about"
            className="flex items-center gap-1 hover:text-gray-300 transition-all duration-300"
          >
            <AiOutlineInfoCircle /> About
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1 hover:text-gray-300 transition-all duration-300"
          >
            <AiOutlinePhone /> Contact Us
          </a>
          <a
            href="#trainers"
            className="flex items-center gap-1 hover:text-gray-300 transition-all duration-300"
          >
            <GiGymBag /> Trainers
          </a>
          <a
            href="#numbers"
            className="flex items-center gap-1 hover:text-gray-300 transition-all duration-300"
          >
            <FaUsers /> Numbers
          </a>
          <a
            href="#address"
            className="flex items-center gap-1 hover:text-gray-300 transition-all duration-300"
          >
            <FaAddressBook /> Address
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {/* You can add a hamburger menu here for mobile navigation */}
          <button className="text-2xl">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
