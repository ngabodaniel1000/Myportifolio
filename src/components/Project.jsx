import React from 'react'

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
      
    }
  ]
  return (
    <div className=' flex flex-col gap-5 lg:flex-row min-h-screen pt-[150px] lg:pt-[100px]'>
      <div className='text-white  lg:ml-[200px] w-full h-[400px] lg:w-1/3 bg-[#333]'>
      <h1 className='text-center pt-5 text-2xl font-bold'>Project Overview</h1>
      <div className='ml-10 grid grid-cols-3'>
      {projectoverview.map((project)=>
      <div className='flex rounded-2xl flex-col w-[100px] lg:w-[150px] h-[100px] mt-10 bg-blue-950'>
        <h2 className='p-4 text-center'>{project.name}</h2>
        <h2 className='rounded-xl text-blue-600 font-extrabold text-center'>{project.number}</h2>
      </div>
      )}
      </div>
      </div>
      <div className='w-full lg:w-1/2 bg-green-900'>
      <h1>Latest Project</h1>
      </div>
    </div>
  )
}

export default Skills