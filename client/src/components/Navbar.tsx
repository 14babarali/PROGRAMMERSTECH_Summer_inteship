import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link to="home" smooth={true} className="text-white hover:text-gray-400">Home</Link></li>
        <li><Link to="about" smooth={true} className="text-white hover:text-gray-400">About</Link></li>
        <li><Link to="skills" smooth={true} className="text-white hover:text-gray-400">Skills</Link></li>
        <li><Link to="education" smooth={true} className="text-white hover:text-gray-400">Education</Link></li>
        <li><Link to="contact" smooth={true} className="text-white hover:text-gray-400">Contact Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
