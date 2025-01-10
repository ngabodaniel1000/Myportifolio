import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Testomonials from "./components/Testomonials";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#1b1a1a]">
      <nav className="fixed w-full top-0 z-1000 bg-[#333] flex flex-col lg:flex-row h-fit pb-5 lg:h-20vh">
        <h1 className="text-white lg:ml-[200px] mt-10 text-xl"><span className="text-blue-600 font-extrabold">Dev</span>Portifolio</h1>
        <ul className="ml-4 lg:ml-[400px] md:ml-[200px] text-lg inline-flex">
          <li className="mr-5 mt-10 text-white"><a href="#home">Home</a></li>
          <li className="mr-5 mt-10 text-white"><a href="#skills">Skills</a></li>
          <li className="mr-5 mt-10 text-white"><a href="#projects">Projects</a></li>
          <li className="mr-5 mt-10 text-white"><a href="#testimonials">Testimonials</a></li>
          <li className="mr-5 mt-10 text-white"><a href="#contact">Contact</a></li>
          <li className="ml-5 mt-8 lg:mt-8 text-white">
            <button className="absolute lg:relative top-0 left-[250px] md:left-[600px] lg:mt-0 lg:left-0 mt-7 bg-blue-600 hover:bg-blue-800 rounded-lg p-2">Download CV</button>
          </li>
        </ul>
      </nav>
      <hr className="text-yellow-300 lg:ml-[120px] mt-10 w-full lg:w-[80%] text-center"/>
      <div id="home">
        <Home />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="testimonials">
        <Testomonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}