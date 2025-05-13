import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const form = useRef(null); // UseRef for form reference

  const handlesubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm(
        'service_c46s32s', // Replace with your EmailJS service ID
        'template_zs6qnt4', // Replace with your EmailJS template ID
        form.current,
        'eOKgG7otukskK1GHB' // Replace with your EmailJS public key
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your message has been sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send your message. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen pt-[150px] lg:pt-[100px]">
      <h1 className="text-center pt-5 text-2xl font-bold text-white mb-10">
        Contact us
      </h1>
      <p className="text-white text-center lg:mb-10">
        We value your feedback and are here to assist you with any questions or concerns.
        <br />
        Feel free to reach out to us through our email at ngabodaniel1000@gmail.com or call us at +250 734196604
      </p>
      <div className="contact flex flex-col lg:flex-row lg:gap-10">
        {/* Contact Info */}
        <div className="flex text-lg flex-col ml-10 md:ml-[200px] mb-5 lg:ml-[200px] mt-20 lg:w-[30%] text-white w-full gap-10">
          <div className="flex flex-row gap-10">
            <p className="bg-blue-600 w-12 h-12 rounded-full">
              <FontAwesomeIcon icon={faLocationDot} className="ml-4 mt-4" />
            </p>
            <div className="flex flex-col">
              <p>Address</p>
              <p>Rwanda Rubavu, Rugerero</p>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <p className="bg-blue-600 w-12 h-12 rounded-full">
              <FontAwesomeIcon icon={faPhone} className="ml-4 mt-4" />
            </p>
            <div className="flex flex-col">
              <p>Phone</p>
              <p>+250 734196604</p>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <p className="bg-blue-600 w-12 h-12 rounded-full">
              <FontAwesomeIcon icon={faEnvelope} className="ml-4 mt-4" />
            </p>
            <div className="flex flex-col">
                <p>Email</p>
                <p>ngabodaniel1000@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-[40%] w-full mt-2">
          <form
            ref={form} // Attach the form reference here
            onSubmit={handlesubmit}
            className="flex flex-col h-[500px] bg-[#333] p-10 rounded-2xl text-lg gap-4 text-white"
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="from_name"
              className="outline-none h-[50px] text-[#333]"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="to_name"
              className="outline-none h-[50px] text-[#333]"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              cols={20}
              rows={5}
              className="outline-none text-[#333]"
              required
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="bg-blue-600 p-4 rounded-2xl cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
