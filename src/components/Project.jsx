import React from 'react'
import Blog from "../assets/images/blog.png"
import Hotel from "../assets/images/hotel.png"
import Worldtech from "../assets/images/worldtech.png"
import Movie from "../assets/images/movie.png"

function Skills() {
  const projectoverview=[
    {
      name:"MERN STACK",
      number:5
    },
    {
      name:"REACT JS",
      number:10
    },
    {
      name:"HTML",
      number:5
    },
    {
      name:"PHP",
      number:3
    },
    {
      name:"EXPRESS JS",
      number:5
    },
    {
      name:"FLUTTER",
      number:2
    }
  ]
  const latestproject = [
    {
      name:"World technology",
      description:"This is project that exhibit now World technology",
      madewith:"React js and tailwind css",
      imageurl:Worldtech,
      ishosted:false,
      githublink:"https://github.com/ngabodaniel1000/react-world-tech",
      hostinglink:""
    },
    {
      name:"Blog app",
      description:"Fullstack blog web application that allow user to create,view,edit and comment on blog",
      madewith:"Mern stack",
      imageurl:Blog,
      ishosted:false,
      githublink:"https://github.com/ngabodaniel1000/Blog-app",
      hostinglink:""
    },
    {
      name:"Hotel website",
      description:"This is real world hotel website developed in express backend & frontend",
      madewith:"Node.js and express.js",
      imageurl:Hotel,
      ishosted:false,
      githublink:"",
      hostinglink:""
    },
    {
      name:"Movie website",
      description:"This is real world hotel website developed in express backend & frontend",
      madewith:"Reactjs",
      imageurl:Movie,
      ishosted:true,
      githublink:"",
      hostinglink:"https://danwatchmovie.netlify.app/"
    },
  
  ]
  return (
    <div className='lg:ml-[200px] flex flex-col gap-5 lg:flex-row min-h-screen pt-[150px] lg:pt-[100px]'>

      <div className='text-white lg:w-[80%] bg-[#333]'>
      <h1 className='text-center pt-5 text-2xl font-bold'>Latest Project</h1>
      <div className='lg:w-[900px] lg:ml-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
     {latestproject.map((latest)=>
     <div className='flex flex-col gap-5'>
      <h2 className='p-4 text-2xl text-center'>{latest.name}</h2>
       <img src={latest.imageurl} alt="Projectimageurl" className='w-[400px] h-[200px]'/>
       <button className='bg-blue-600 rounded-xl p-2 w-[200px] ml-24'>View project</button>
     </div>
    )}
      </div>
      </div>
    </div>
  )
}

export default Skills