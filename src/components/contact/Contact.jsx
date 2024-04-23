import React, { useRef } from 'react';
import '../contact/Contact.css'
import {MdOutlineMailLock} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jf3krv9', 'template_hqb96fs', form.current, 'XnLtYW0MgMyRNXCU2');

    e.target.reset();

  }


  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailLock className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>shantanupardeshi4@gmail.com</h5>
            <a href="https://shantanupardeshi4@gmail.com" target='_blank'> Send a Message </a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp  className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5> Personal Number </h5>
            <a href="https://api.whatsapp.com/send?phone=+919561865516" target='_blank'> Send a Message </a>
          </article>

          <article className='contact__option'>
            <BsInstagram  className='contact__option-icon'/>
            <h4> Messanger </h4>
            <h5>Shantanu Pardeshi</h5>
            <a href="" target='_blank'> Send a Message </a>
          </article>

        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail} > 

        <input type="text" name='name' placeholder= 'Your Full Name' required />
        <input type="email" name='email' placeholder= 'Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
        <button type='submit' className='btn btn-primary'> Send Message </button>

        </form>
      </div>
   </section>
  )
}

export default Contact
