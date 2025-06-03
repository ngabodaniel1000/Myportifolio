import React from 'react'
import Typewriter from 'react-typewriter-effect'
import CountUp from 'react-countup';
import Portofolioimage from "../assets/images/Copy of a.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


function Home() {
  return (
    <div className='flex flex-col lg:flex-row min-h-screen bg-[#1b1a1a] pt-[150px] lg:pt-[10px]'>
      <div className='text-white lg:mt-48 ml-10 pl-5  md:ml-20 lg:ml-48 w-full lg:w-1/2 '>
      <h1 className="text-2xl lg:text-4xl font-bold mt-5">
        <Typewriter
          text="I am Ngabo Daniel"
          textStyle={{
            fontFamily: 'monospace',
            fontWeight: 'bold',
          }}
          typeSpeed={350}
          cursor={false}
        />
      </h1>
      <h2 className="text-2xl lg:text-3xl font-medium mt-5">
        <Typewriter
          text="Junior Web Developer"
          textStyle={{
            fontFamily: 'monospace',
            fontWeight: 'normal',
          }}
          typeSpeed={350}
          startDelay={7000}
        />
      </h2>
      <p className='mt-10'> a creative and detail-oriented web developer. I love bringing concepts to life with <br /> clean efficient code and visually appealing designs. Whether it's front-end interfaces <br />or back-end logic. My passion lies in solving complex problems through code</p>
      
      <div className='flex flex-col mt-4 gap-5 lg:flex-row text-2xl'>
      <p><span className='text-blue-600 font-bold'><CountUp start={0} end={2} duration={5} suffix=""/>+</span> years exprience</p>
      <p><span className='text-blue-600 font-bold'><CountUp start={0} end={20} duration={10}/>+</span> Completed project</p>
      </div>
      <div className="flex space-x-10 mb-4 md:mb-0 mt-10">
                <a
                  href="https://www.linkedin.com/in/ngabo-daniel-011118283/"
                  className="hover:text-blue-700"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a
                  href="https://github.com/ngabodaniel1000"
                  className="hover:text-blue-600"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a
                  href="https://instagram.com/odegaard_daniel"
                  className="hover:text-blue-600"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a
                  href="https://twitter.com/@odegaard_dan"
                  className="hover:text-blue-500"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </div>
              <button className="w-40 text-xl mt-7 bg-blue-600 hover:bg-blue-800 rounded-lg p-2"><a href="https://www.linkedin.com/in/ngabo-daniel-011118283/" target='_blank'>Hire me</a></button>
      </div>
      <div className='w-full pb-5 pl-16 mt-20 md:32 ml-5 lg:ml-10 lg:mt-48 lg:w-1/2'>
      <img src={Portofolioimage} alt="my image" className='rounded-full'/>
      </div>
      
    </div>
  )}

export default Home