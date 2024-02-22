import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'
function NavBar() {
  const [nav, setnav] = useState(false);
  const link = [
    {
      id: "home",
      link: "home",
    },
    {
      id: "about",
      link: "about",
    },
    {
      id: "cat",
      link: "cat",
    },
    {
      id: "dog",
      link: "dog",
    },
    {
      id: 'adoption',
      link: "adoption",
    },
    {
      id: "contact",
      link: "contact",
    },
    
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-yellow-500 bg-cyan-900 fixed">
      <div>
        <h1 className="text-5xl font-signature">Pat-Pals</h1>
      </div>
      <ul className=" hidden md:flex">
        {link.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-yellow-500 hover:scale-105 duration-200"
          >
            
            <Link to={link.id} smooth duration={500}>{link.link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setnav(!nav)}
        className="cursor-pointer pr-4 z-10 text-yellow-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b 
        from-black to-gray-800 text-yellow-500"
        >
          {link.map(({id,link}) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-4xl py-6 "
            >
               <Link  onClick={()=>setnav(!nav)} to={id} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
