import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  const [username,Setusername] = useState("")
  const [email,Setemail] = useState("")
  const [message,Setmessage] = useState("")
  const handlesubmit = ()=>{

  }
  return (
    <div className=' min-h-screen pt-[150px] lg:pt-[100px]'>
    <h1 className='text-center pt-5 text-2xl font-bold text-white mb-10'>Contact us</h1>
    <p className='text-white text-center lg:mb-10'>We value your feedback and are here to assist you with any questions or concerns. <br /> Feel free to reach out to us through our email at ngabodaniel1000@gmail.com or call us at +250 734196604</p>
      <div className="contact flex flex-col lg:flex-row lg:gap-10">
      <div className='flex text-lg flex-col lg:ml-[200px] mt-20 lg:w-[30%] text-white w-full gap-10'>
      <div className='flex flex-row gap-10'>
        <p className='bg-blue-600 w-12 h-12 rounded-full'><FontAwesomeIcon icon={faLocationDot} className='ml-4 mt-4'/></p>
      <div className='flex flex-col'>
        <p>Address</p>
        <p>Rwanda Rubavu,Rugerero</p>
      </div>
      </div>
      <div className='flex flex-row gap-10'>
      <p className='bg-blue-600 w-12 h-12 rounded-full'><FontAwesomeIcon icon={faPhone} className='ml-4 mt-4'/></p>
      <div className='flex flex-col'>
        <p>Phone</p>
        <p>+250 734196604</p>
      </div>
      </div>
      <div className='flex flex-row gap-10'>
      <p className='bg-blue-600 w-12 h-12 rounded-full'><FontAwesomeIcon icon={faEnvelope} className='ml-4 mt-4'/></p>
      <div className='flex flex-col'>
        <p>Email</p>
        <p>ngabodaniel1000@gmail.com</p>
      </div>
      </div>
      </div>
      <div className='lg:w-[40%] w-full'>
      <form onSubmit={handlesubmit} className='flex flex-col h-[500px] bg-[#333] p-10 rounded-2xl text-lg gap-4 text-white '>
      <label htmlFor="username">Username</label>
      <input type="text" name='username' className='outline-none h-[50px] text-[#333]' onChange={(event)=>{
        Setusername(event.target.value)
      }}/>
      <label htmlFor="email">Email</label>
      <input type="email" name='email' className='outline-none h-[50px] text-[#333]' onChange={(event)=>{
    Setemail(event.target.value)
      }}/>
      <label htmlFor="message">Message</label>
      <textarea name="message" cols={20} rows={5} className='outline-none text-[#333]' onChange={(event)=>{
    Setmessage(event.target.value)
      }}></textarea>
      <input type="submit" className='bg-blue-600 p-4 rounded-2xl'/>
      </form>
      </div>

      </div>
      
    </div>
  )
}

export default Contact