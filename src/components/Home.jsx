import React from 'react'
import Typewriter from 'react-typewriter-effect'
import CountUp from 'react-countup';
import Portofolioimage from "../assets/images/portfolio.JPG"

function Home() {
  return (
    <div className='flex flex-col lg:flex-row min-h-screen bg-[#1b1a1a] pt-[150px] lg:pt-[10px]'>
      <div className='text-white lg:mt-48 ml-0 pl-5 lg:ml-48 w-full lg:w-1/2 '>
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
      <p><span className='text-blue-600 font-bold'><CountUp start={0} end={2} duration={5} suffix=""/>+</span> years expreience</p>
      <p><span className='text-blue-600 font-bold'><CountUp start={0} end={20} duration={10}/>+</span> Successful project</p>
      </div>
      </div>
      <div className='w-full ml-0 pb-5 pl-16 mt-5 lg:ml-10 lg:mt-48 lg:w-1/2'>
      <img src={Portofolioimage} alt="my image" className='w-2/3 lg:w-1/2 rounded-full'/>
      </div>
      
    </div>
  )}

export default Home