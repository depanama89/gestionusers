import React from "react";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Avatar } from "../assets/index";
const Navbar = () => {
  return (
    <header className=" w-full py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
            <RiContactsFill />
          </div>
          <span className="dark:text-white  text-black text-lg font-bold md:text-2xl lg:text-3xl">
            UserHub
          </span>
        </Link>

        <ul className=" items-center gap-8 hidden md:flex">
          <Link to="/"><li className="font-semibold px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition-colors cursor-pointer dark:text-gray-100">Accueil</li></Link>
          <li className="font-semibold px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition-colors cursor-pointer dark:text-gray-100">Fonctionnalités</li>
          <li className="font-semibold px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition-colors cursor-pointer dark:text-gray-100">Tarifs</li>
          <li className="font-semibold px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition-colors cursor-pointer dark:text-gray-100">Documentatio/API</li>
          <li className="font-semibold px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition-colors cursor-pointer dark:text-gray-100">Blog/Actualités</li>
        </ul>
        <div>
         <div className="flex gap-2 md:gap-4">
            <img
              src={Avatar}
              alt="user"
              className="w-10 md:w-12 h-10 md:h-12 object-cover rounded-full"
            />
            <div>
                <span>Name</span>
            </div>
         </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
