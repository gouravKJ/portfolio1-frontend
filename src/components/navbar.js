import { useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa";

function Navbar(){
    const[isopen,setisopen]=useState(false);
    return(
        <nav className="sticky top-0 z-50 bg-[#000814] px-4 py-3 shadow-md border-b-4 drop-shadow-lg">
            <div className="flex justify-between items-center">
                <h1
                    onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
                    className="text-white text-3xl font-bold ml-2 mt-2 font-mono cursor-pointer"
                >
                    Gourav<span className="text-[#A7FC00]">KJ</span>
                </h1>
                <ul className="hidden md:flex gap-10 text-xl font-mono ml-2 px-8 text-[#A7FC00]">
                    <li><a className="hover:underline" href="#intro">Home</a></li>
                    <li><a className="hover:underline" href="#about">About</a></li>
                    <li><a className="hover:underline" href="#projects">Projects</a></li>
                    <li><a className="hover:underline" href="#contact">Contact</a></li>
                </ul>
                <div className="md:hidden relative">
                    <button
                        className="text-2xl text-[#A7FC00]"
                        onClick={() => setisopen(!isopen)}
                    >
                        {isopen ? <FaTimes /> : <FaBars />}
                    </button>
                    {isopen && (
                        <div className="absolute font-mono right-0 top-full mt-2 bg-[#000814] p-4 rounded-l-lg shadow-md flex flex-col space-y-3 text-right z-50 text-[#A7FC00] px-10 min-w-max">
                            <a href="#intro" onClick={() => setisopen(false)} className="hover:underline">Home</a>
                            <a href="#about" onClick={() => setisopen(false)} className="hover:underline">About</a>
                            <a href="#projects" onClick={() => setisopen(false)} className="hover:underline">Projects</a>
                            <a href="#contact" onClick={() => setisopen(false)} className="hover:underline">Contact</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
