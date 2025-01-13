import React from 'react'

function Contact() {
  const handlesubmit = ()=>{

  }
  return (
    <div className=' min-h-screen pt-[150px] lg:pt-[100px]'>
    <h1 className='text-center pt-5 text-2xl font-bold text-white mb-10'>Contact us</h1>
    <p className='text-white text-center mb-10'>We value your feedback and are here to assist you with any questions or concerns. <br /> Feel free to reach out to us through our email at ngabodaniel1000@gmail.com or call us at +250 734196604</p>
      <div className="contact flex gap-32">
      <div className='flex flex-col lg:ml-10 lg:w-[40%] w-full bg-yellow-300'>
      <div className='flex flex-row'>
      <div className='flex flex-col'>
        <p>Address</p>
        <p>Rwanda Rubavu,Rugerero</p>
      </div>
      </div>
      <div className='flex flex-row'>
      <div className='flex flex-col'>
        <p>Phone</p>
        <p>+250 734196604</p>
      </div>
      </div>
      <div className='flex flex-row'>
      <div className='flex flex-col'>
        <p>Email</p>
        <p>ngabodaniel1000@gmail.com</p>
      </div>
      </div>
      </div>
      <div className='lg:w-[40%] w-full'>
      <form onSubmit={handlesubmit} className='flex flex-col h-[500px] bg-[#333] p-10 rounded-2xl text-lg gap-4 text-white'>
      <label htmlFor="username">Username</label>
      <input type="text" name='username' className='outline-none h-[50px] text-[#333]'/>
      <label htmlFor="email">Email</label>
      <input type="email" name='email' className='outline-none h-[50px] text-[#333]'/>
      <label htmlFor="message">Message</label>
      <textarea name="message" cols={20} rows={5} className='outline-none text-[#333]'></textarea>
      <input type="submit" className='bg-blue-600 p-4 rounded-2xl'/>
      </form>
      </div>
      </div>
      
    </div>
  )
}

export default Contact