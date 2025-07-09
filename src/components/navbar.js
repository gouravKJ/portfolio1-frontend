import { useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa";

function Navbar(){

    const[isopen,setisopen]=useState(false);

    return(
        <nav style={{backgroundColor:'#000814'}} className=" px-4 py-3 shadow-md sticky top-0 z-50 border-b-4 drop-shadow-lg">
            <div className="flex justify-between items-center">
            <h1 onClick={()=>window.scrollTo({behavior:'smooth',top:0})} className="text-white text-3xl font-bold  ml-2 mt-2 font-mono">Gourav<span style={{color:'#A7FC00'}}>KJ</span></h1>
            <ul style={{color:'#A7FC00'}} className="hidden md:flex gap-10 text-xl font-mono ml-2 px-8 ">
                <li><a className="hover:underline" href='#intro'>Home</a> </li>
                <li><a className="hover:underline" href='#about'>About ME</a></li>
                <li><a className="hover:underline" href='#projects'>Projects</a></li>
                <li><a className=" hover:underline" href='#contact'>Contact</a></li>
            </ul>
        
        <button style={{color:'#A7FC00'}} className="md:hidden text-2xl" onClick={()=>setisopen(!isopen)}>{isopen?<FaTimes /> : <FaBars />}</button>
</div>
        {isopen && (
                    <div style={{color:'#A7FC00'}} className="absolute font-mono right-4 top-full mt-2 bg-[#000814] p-4 rounded-l-lg shadow-md flex flex-col space-y-3 text-right z-40 px-10 ">
          <a href="#intro" onClick={() => setisopen(false)}>Home</a>
          <a href="#about" onClick={() => setisopen(false)}>About</a>
          <a href="#projects" onClick={() => setisopen(false)}>Projects</a>
          <a href="#contact" onClick={() => setisopen(false)}>Contact</a>
</div>
        )}
        </nav>

    )
}
export default Navbar;