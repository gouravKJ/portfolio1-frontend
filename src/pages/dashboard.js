import { useState } from "react";
import { FaFileAlt, FaGithub, FaNodeJs } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { SiMongodb, SiExpress,SiJson, SiTailwindcss, SiVercel,SiMysql, SiSocketdotio, SiRender, SiBootstrap,SiPostman, SiJsonwebtokens} from 'react-icons/si';
import { FaLinkedin,FaGitAlt,FaNpm,FaReact,FaHtml5,FaCss3Alt,FaJs} from 'react-icons/fa';
import myPhoto from '../assets/photo_6289599432123073927_y.jpg'; 
import "./dashboard.css";
import { useEffect } from "react";
import myPhoto1 from '../assets/Screenshot 2025-06-21 233316.png'; 
import myphoto2 from '../assets/Screenshot 2025-07-04 171215.png';
import myphoto3 from '../assets/Screenshot 2025-05-15 192524.png';
import myphoto4 from '../assets/Screenshot 2025-07-09 131658.png';
import AOS from 'aos';
import { MdMail } from "react-icons/md";
import {  toast } from 'react-toastify';
  


import 'aos/dist/aos.css';




function Dashboard(){
    const projects=[{
        title:'stayFinder',
        description:'StayFinder is a full-stack web application designed for discovering and booking budget-friendly, verified accommodations. Users can explore property listings without login and securely book stays after registration.Public listing browsing with detailed view pages JWT-based user authentication (register/login/logout),Booking functionality tied to authenticated users,Admin panel to add/edit listings with image upload (Multer)',
        image:myPhoto1,
        github:'https://github.com/gouravKJ/stayfinder1-frontend.git',
        live:'https://stayfinder1-frontend.vercel.app',
    techStack: [
  <FaReact className="text-[#61DAFB] text-4xl" title="ReactJS" />,
  <FaCss3Alt className="text-[#264de4] text-4xl" title="CSS3" />,
  <FaNodeJs className="text-[#3C873A] text-4xl" title="NodeJS" />,
  <SiExpress className="text-gray-500 text-4xl" title="ExpressJS" />,
  <SiMongodb className="text-[#4DB33D] text-4xl" title="MongoDB" />,
  <SiJsonwebtokens className="text-red-500 text-4xl" title="JWT" />,
  <SiVercel className="text-white text-4xl" title="Vercel" />,
  <SiRender className="text-purple-600 text-4xl" title="Render" />,]
    },
{
        title:'PortFolio',
        description:'This is a modern and responsive personal portfolio website built using React.js and Tailwind CSS, designed to showcase my skills, projects, and professional journey. It serves as a digital resume and an interactive platform to connect with potential employers, collaborators, and clients. Visitors can explore detailed project showcases, access my resume, and get in touch through a secure contact form.',


        image:myphoto4,
        github:'',
        live:'https://gouravkj.vercel.app/',
      techStack: [
  <FaReact className="text-[#61DAFB] text-3xl" title="React" />,
  <FaNodeJs className="text-[#3C873A] text-3xl" title="Node.js" />,
  <SiExpress className="text-gray-600 text-3xl" title="Express" />,
  <SiMongodb className="text-green-600 text-3xl" title="MongoDB" />,
  <SiTailwindcss className="text-sky-400 text-3xl" title="Tailwind CSS" />,
  <SiVercel className="text-white text-3xl" title="Vercel" />,
  <SiRender className="text-purple-500 text-3xl" title="Render" />
]
},
{
        title:'taskify',
        description:'TaskIfy is a real-time collaborative task management web app with a Kanban-style board. Users can register, log in, create and assign tasks, and track their progress across Todo, In Progress, and Done columns. It features smart task assignment, conflict handling, and supports dark mode with responsive design for both desktop and mobile devices.Built for productivity, TaskIfy enables teams to stay organized and collaborate seamlessly in real-time.',
        image:myphoto2,
        github:'https://github.com/gouravKJ/taskify1-frontend.git',
        live:'https://taskify1-frontend.vercel.app/',
        techStack: [
  <FaReact className="text-[#61DAFB] text-3xl" title="React" />,
  <FaCss3Alt className="text-[#264de4] text-3xl" title="CSS3" />,
  <FaNodeJs className="text-[#3C873A] text-3xl" title="Node.js" />,
  <SiExpress className="text-gray-700 text-3xl" title="Express.js" />,
  <SiMongodb className="text-green-600 text-3xl" title="MongoDB" />,
  <SiJsonwebtokens className="text-red-500 text-3xl" title="JWT" />,
  <SiSocketdotio className="text-white text-3xl" title="Socket.IO" />,
  <SiVercel className="text-white text-3xl" title="Vercel" />,
  <SiRender className="text-purple-500 text-3xl" title="Render" />
]

    },{
        title:'VSSUT CGPA PREDICT',
        description:'VSSUT CGPA Predictor is a smart and user-friendly web tool designed specifically for first year students of Veer Surendra Sai University of Technology (VSSUT) to calculate their CGPA based on semester-wise performance. Whether youre entering marks or grades, this tool simplifies the process and delivers quick, accurate results.It enhances academic planning by providing instant insights, helping students set clearer performance goals.',
        image:myphoto3,
        github:'https://github.com/gouravKJ/vssut-cgpa-predict.git',
        live:'https://vssut-cgpa-predict.vercel.app/',
      techStack: [
  <FaHtml5 className="text-orange-600 text-3xl" title="HTML5" />,
  <FaCss3Alt className="text-blue-600 text-3xl" title="CSS3" />,
  <FaJs className="text-yellow-400 text-3xl" title="JavaScript" />,
  <SiVercel className="text-white text-3xl" title="Vercel" />
]


    },
];
const roles=[
  'I am Mern stack',    "I am Frontend",
    "I am Backend"
];

const [index,setindex]=useState(0);
useEffect(()=>{
  const interval=setInterval(()=>{
    setindex((prev)=>(prev+1)%roles.length);
  },2000);
  return()=>clearInterval(interval);
},[]);


//animation up and down
useEffect(()=>{
  AOS.init({
    duration:2000,
    once:false,
  });
},[]);
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [message,setmessage]=useState('');

    const handlesubmit=async(e)=>{
        e.preventDefault();
        const res=await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/message`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name,email,message})

        });
        const data=await res.json();
        if(res.ok){
           toast.success(' Message sent successfully!');
            setname('');
            setemail('');
            setmessage('');
        }else{
           toast.error('Failed to send message ');
        }
    }
    

        return(
            <div className="bg-white">
                <section id='intro' className="flex flex-col items-center justify-between px-6 py-12 bg-[#000814] text-white scroll-mt-24">
                    <img  className='photo'src={myPhoto} title='photo'/>
                    <h1 className="mt-6 sm:mt-8 font-bold font-mono text-3xl sm:text-4xl md:text-5xl text-center md:text-left">
  Gourav Kumar Jaiswal
</h1>

                  <h2 className="dev font-semibold font-mono">{roles[index]}<span className="text-[#A7FC00]"> Developer!</span></h2>
<p className="text-gray-400 -mt-2 sm:-mt-2 text-base sm:text-lg md:text-xl font-mono font-semibold text-center md:text-left">
  🔭 Currently building: Real-world full-stack web apps
</p>

<p className="text-gray-400 mt-2 text-base sm:text-lg md:text-xl font-mono font-semibold text-center md:text-left">
  👯 Open to: Collaborating on open source and hackathons
</p>
                  
                  <div className="flex gap-6 mt-6 text-4xl justify-center md:justify-start text-[#A7FC00]" >
            <a href='https://www.linkedin.com/in/gourav-kumar-jaiswal-b8b55a33b/' target="_blank" rel='noopenerferrer' className="hover:scale-110 transition-transform"><FaLinkedin/></a>
            <a href='https://github.com/gouravKJ'  target="_blank" rel='noopenerferrer' className="hover:scale-110 transition-transform" title="github"><FaGithub/></a>
           <a
  href="/Gourav_Resume.pdf"  
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-110 transition-transform"
  title="Resume"
>
  <FaFileAlt />
</a>
</div>
<a href='#contact' className=" hire  whitespace-nowrap bg-white px-2 py-2 mt-7 font-mono transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#A7FC00]" id='#contact'>Hire Me</a>

                </section>
   <section id="about" className="bg-[#212529] py-16 px-6 md:px-20  font-mono scroll-mt-24">
  <h2 className="text-3xl font-bold text-center text-white mb-12">
    About  <span className="text-[#A7FC00]">Me</span>
    <div className="w-36 h-1 mt-4 md:mt-2 bg-[#A7FC00] mx-auto mb-12 rounded shadow-[0_0_15px_5px_#A7FC00]"></div>
  </h2>

  <div className="relative border-l-4 border-[#A7FC00] pl-4 space-y-10 ">
    
    <div className="relative">
      <div className="absolute -left-[13px] top-1 w-6 h-6 bg-[#A7FC00] rounded-full border-2  border-white shadow-[0_0_10px_2px_#A7FC00]"></div>
      <div className="bg-[#f9f9f9] p-6 rounded-lg border-2 border-[#A7FC00] hover:shadow-[0_0_10px_2px_#A7FC00] transition duration-300">
        <h3 className="text-xl font-semibold text-[#000814]">Schooling</h3>
        <p className="text-gray-700"> I completed my schooling from <strong>DAV Public School, KNG, Bhubaneswar</strong>, where I developed a solid academic foundation. Both my matriculation and intermediate were from the same institution, providing a consistent environment for growth and curiosity in science and computers.
      </p>

      </div>
    </div>

    
<div className="relative">
  
  <div className="absolute -left-[13px] top-1 w-6 h-6 bg-[#A7FC00] rounded-full border-2 border-white shadow-[0_0_10px_2px_#A7FC00]"></div>

  
  <div className="bg-white p-6 rounded-lg border-2 border-[#A7FC00] hover:shadow-[0_0_12px_#A7FC00] transition duration-300">
    <h3 className="text-xl font-semibold text-[#000814]">College/University</h3>
    <p className="text-gray-700">
      I am currently pursuing my <strong >B.Tech in Electronics and Telecommunication Engineering</strong> at
      <strong> Veer Surendra Sai University of Technology (VSSUT), Burla</strong>. My journey here has strengthened my logical thinking and technical skills through diverse academic and practical exposure.
    </p>
  </div>
</div>


    
    <div className="relative">
      <div className="absolute -left-[13px] top-1 w-6 h-6 bg-[#A7FC00] rounded-full border-2 border-white  shadow-[0_0_10px_2px_#A7FC00]"></div>
      <div className="bg-[#f9f9f9] p-6 rounded-lg border-2 border-[#A7FC00] hover:shadow-[0_0_10px_2px_#A7FC00]">
        <h3 className="text-xl font-semibold text-[#000814]">Beyond Academics</h3>
        <p className="text-gray-700">  I enjoy hackathons, exploring open-source, and staying updated with emerging tech. I am passionate about building digital solutions that create real-world impact, and I thrive on learning and collaborating with like-minded peers.
      </p>
      </div>
    </div>
  </div>

  <div>
    
  </div>
</section>
<section className="bg-black text-white font-mono px-6 py-12  ">
  <h2 className="text-3xl font-bold text-center  mb-8"><span className="gear">⚙️</span>My tech <span className="text-[#A7FC00]">Stack</span>
  <div className="w-40 h-1 mt-4 md:mt-4 bg-[#A7FC00] mx-auto mb-12 rounded shadow-[0_0_15px_5px_#A7FC00]"></div>
</h2>
<div className="max-w-4xl mx-auto mt-10">
  <h3 className="text-4xl font-bold mb-10 text-center text-white">Frontend</h3>

  <div className="flex gap-12 flex-wrap justify-center">
    <div className="flex flex-col items-center text-center" data-aos='fade-up'>
      <FaHtml5 className="text-orange-600 text-6xl" title="HTML" />
      <p className="text-xl mt-3 font-mono font-semibold text-white">HTML</p>
    </div>

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <FaCss3Alt className="text-blue-600 text-6xl" title="CSS" />
      <p className="text-xl mt-3 font-mono font-semibold text-white">CSS</p>
    </div>

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <FaJs className="text-yellow-400 text-6xl" title="JavaScript" />
      <p className="text-xl mt-3 font-mono font-semibold text-white">JavaScript</p>
    </div>

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <FaReact className="text-cyan-400 text-6xl" title="React" />
      <p className="text-xl mt-3 font-mono font-semibold text-white">React</p>
    </div>

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <SiTailwindcss className="text-sky-400 text-6xl" title="Tailwind CSS" />
      <p className="text-xl mt-3 font-mono font-semibold text-white">Tailwind</p>
    </div>

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <SiBootstrap className="text-purple-600 text-6xl" title="Bootstrap" />
      <p className="text-xl mt-3 font-mono font-semibold text-white">Bootstrap</p>
    </div>
  </div>
 <div className="max-w-4xl mx-auto mt-10">
  <h3 className="text-4xl font-bold mb-10 text-center text-white">Backend</h3>
  <div className="flex gap-12 flex-wrap justify-center">

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <FaNodeJs className="text-green-600 text-5xl" title="NodeJS" />
      <p className="text-xl mt-3 font-mono font-semibold text-white">NodeJS</p>
    </div>

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <SiExpress className="text-gray-300 text-5xl" title="ExpressJS" />
      <p className="text-xl mt-3 font-mono font-semibold text-white">ExpressJS</p>
    </div>

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <span className="text-yellow-400 text-5xl" title="REST API">🛠️</span>
      <p className="text-xl mt-3 font-mono font-semibold text-white">REST API</p>
    </div>

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <SiSocketdotio className="text-white text-5xl" title="Socket.IO" />
      <p className="text-xl mt-3 font-mono font-semibold text-white">Socket.IO</p>
    </div>

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <SiJsonwebtokens className="text-red-500 text-5xl" title="Socket.IO" />
      <p className="text-xl mt-3 font-mono font-semibold text-white">JWT</p>
    </div>

  </div>
</div>
<div className="max-w-4xl mx-auto mt-10">
  <h3 className="text-4xl font-bold mb-10 text-center text-white">DataBase</h3>
  <div className="flex gap-12 flex-wrap justify-center">

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <SiMongodb className="text-green-500 text-5xl" title="MongoDB" />
      <p className="text-xl mt-3 font-mono font-semibold text-white">MongoDB</p>
    </div>

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <SiMysql className="text-blue-500 text-5xl" title="MySQL" />
      <p className="text-xl mt-3 font-mono font-semibold text-white">MySQL</p>
    </div>
</div>
</div>

<div className="max-w-4xl mx-auto mt-10">
  <h3 className="text-4xl font-bold mb-10 text-center text-white">Dev Tools</h3>
  <div className="flex gap-12 flex-wrap justify-center">

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <FaGitAlt className="text-orange-500 text-5xl" title="Git" />
      <p className="text-xl mt-2 font-mono font-semibold text-white">Git</p>
    </div>

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <FaGithub className="text-white text-5xl" title="GitHub" />
      <p className="text-xl mt-2 font-mono font-semibold text-white">GitHub</p>
    </div>

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <FaNpm className="text-red-600 text-5xl" title="npm" />
      <p className="text-xl mt-2 font-mono font-semibold text-white">npm</p>
    </div>

<div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <SiJson className="text-orange-400 text-5xl" title="Vercel" />
      <p className="text-xl mt-2 font-mono font-semibold text-white">JSON</p>
    </div>


    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <SiPostman className="text-orange-600 text-5xl" title="Postman" />
      <p className="text-xl mt-2 font-mono font-semibold text-white">Postman</p>
    </div>

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <SiVercel className="text-white text-5xl" title="Vercel" />
      <p className="text-xl mt-2 font-mono font-semibold text-white">Vercel</p>
    </div>

    <div className="flex flex-col items-center text-center"data-aos='fade-up'>
      <SiRender className="text-purple-400 text-5xl" title="Render" />
      <p className="text-xl mt-2 font-mono font-semibold text-white">Render</p>
    </div>

  </div>
</div>

</div>

</section>

      <section id='projects' className="bg-[#212529] font-mono px-6 py-12 scroll-mt-24">
  <h2 className="text-3xl text-white font-bold  text-center mb-6"> Featured <span className="text-[#A7FC00]">Projects</span></h2>
  <div className="w-40 h-1 bg-[#A7FC00] mx-auto mb-12 mt-4 shadow-[0_0_15px_5px_#A7FC00]"></div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
    {projects.map((project, index) => (
      <div key={index} className="border p-4 border-white bg-black rounded shadow 
             transition-all duration-300 transform hover:scale-105 
             hover:shadow-[0_0_20px_#A7FC00] hover:border-[#A7FC00] 
             hover:bg-[#0a0a0a] " data-aos={
   window.innerWidth<768? index%2===0? 'fade-left':'fade-right':'fade-up'
       } >
        <img src={project.image} alt={project.title} className="w-full h-50 lg:h-60 object-cover rounded mb-2 " />
        <h3 className="text-2xl text-[#A7FC00] font-semibold">{project.title}</h3>
        <p className="text-white my-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-3 text-2xl text-gray-600 mt-2">
          <span className="gear text-xl" >⚙️</span><p className="text-white font-bold mr-20">Tech stack</p>
          </div>
            <div className="flex flex-wrap gap-6 mt-3 ml-10">
          {project.techStack.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
         
        </div>

      <div className="flex gap-6 mt-4 text-xl text-white justify-center">
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-[#A7FC00]"
      >
        <FaGithub />
        <span>GitHub</span>
      </a>
    )}
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 hover:text-[#A7FC00] "
    >
      <BiLinkExternal />
      <span>Live</span>
    </a>
  </div>
      </div>
    ))}
  </div>
</section>


                <section id='contact' className="bg-black text-white px-6 py-12  font-mono scroll-mt-22">
                    <MdMail className="text-4xl mx-auto" data-aos='fade-left'/>
                    <h2  className="text-3xl font-bold text-center "> Contact <span className="text-[#A7FC00]">Me</span></h2>
                    <div className="w-32 h-1 bg-[#A7FC00] mx-auto mb-12 mt-4 shadow-[0_0_15px_5px_#A7FC00]"></div>
                    <div className="flex flex-col justify-center items-center gap-10">
                    <form onSubmit={handlesubmit} className="w-full max-w-2xl text-white p-6 rounded-lg shadow-md space-y-4">
                        <input className="w-full px-4 py-2 border-[#A7FC00] bg-[#212529] border rounded  focus:outline-none focus:ring-2 focus:ring-[#A7FC00] focus:shadow-[0_0_10px_2px_#A7FC00] "type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)} required/>
                        <input className="w-full px-4 py-2 border-[#A7FC00] bg-[#212529] border rounded focus:outline-none focus:ring-2 focus:ring-[#A7FC00] focus:shadow-[0_0_10px_2px_#A7FC00]" type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)} required/>
                        <textarea className="w-full px-4 py-2 border-[#A7FC00] bg-[#212529] border rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#A7FC00] focus:shadow-[0_0_10px_2px_#A7FC00]" placeholder="message GouravKJ" value={message} onChange={(e)=>setmessage(e.target.value)} required/>
                            <button className="w-full bg-[#A7FC00] text-black font-semibold py-2 rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white"type='submit'>Send Message</button>
                    </form>
                    </div>
                    
                </section>

                <footer className=" relative bg-[#212529] font-mono px-6 py-12 items-center text-white font-semibold  -mt-8">
                  <div className="w-96 h-0.5 bg-white mx-auto mb-3">

                  </div>
                   <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
                   className="absolute top-4 right-6 px-3 py-1 z-50 bg-[#A7FC00] rounded hover:bg-[#d0ff4f] transition animate-bounce text-white ">⬆</button>
                  <p className="text-center -mb-6">@2025 Gourav Kumar Jaiswal rights reserved</p>
                </footer>
           </div>
        );
    }


export default Dashboard;