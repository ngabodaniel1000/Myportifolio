import React from 'react'
import Elysee from "../assets/images/elysee.jpg"
import Fils from "../assets/images/aimefils.jpg"
import Hirwamj from "../assets/images/profile.jpg"
import Enock from "../assets/images/enock.jpg"
import Mom from "../assets/images/mum.png"
import Friend from "../assets/images/Friend.jpg"
const testimonials=[
  {
  name: "Mukunzi elyseee",
  description: "I am teacher of ngabo daniel \n He is hardworking student good at all \n either school course or programming",
  imageurl: Elysee,
},
  {
  name: "Byiringiro aime fils",
  description: "I am co-worker and classmate of ngabo daniel \n He can achieve everything he set as goal",
  imageurl: Fils,
},
  {
  name: "Hirwa mj",
  description: "I am brother of Ngabo daniel \n He is pussy coder on the code he is the fellow ghost",
  imageurl: Hirwamj,
},
  {
  name: "Dusabe enock",
  description: "I am friend of ngabo daniel \n He appreciate and support everyone ideas\n",
  imageurl: Enock,
},
  {
  name: "Jay kay",
  description: "I am his friend and ex-classmate of ngabo daniel \n He had vision in his life he was honest and patient ",
  imageurl: Friend,
},
  {
  name: "Mom",
  description: "Ngabo daniel is my fellow boy he respect elders and he always know wht to do in life",
  imageurl: Mom,
},
]

function Testomonials() {
  return (
    <div className='min-h-screen pt-[150px] lg:pt-[100px]'>
      <h1 className='text-2xl text-white text-center font-bold'>Testimonials</h1>
      <div className='w-[90%] ml-2 lg:ml-[100px] mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {testimonials.map((testimonial)=>
        <div className="flex flex-col gap-5 text-white bg-[#333] rounded-xl  w-[400px] h-[300px] mt-4">
        <img src={testimonial.imageurl} alt="Images" className='w-20 h-20 rounded-full mt-2 ml-40'/>
        <p className='text-xl ml-[80px]'>{testimonial.name}</p>
        <q className='ml-[80px]'>{testimonial.description}</q>
        </div>
        )}
      </div>
    </div>
  )
}

export default Testomonials