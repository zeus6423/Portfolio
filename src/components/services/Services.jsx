import React from 'react'
import '../services/Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="services__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML: Expert in structuring web content.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CSS: Proficient in styling web elements.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JavaScript: Skilled in adding interactivity.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React.js: Experienced in building dynamic UIs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Bootstrap: Proficient in responsive design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient in Bloc Management in FLutter .</p>
            </li>
          </ul>

        </article>

         {/* End of frontend */}


         <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="services__list">
            
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Proficient in server-side JavaScript development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Expertise in NoSQL database design and management.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient in writing complex SQL queries for relational databases.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experienced in database design, normalization, and schema optimization.</p>
            </li>

          </ul>

        </article>

        <article className="service">
          <div className="service__head">
            <h3>Other Activities</h3>
          </div>
          <ul className="services__list">
           
            <li>
              <BiCheck className='service__list-icon'/>
              <p></p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p></p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p></p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p></p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p></p>
            </li>

          </ul>

        </article>

      </div>
    </section>
  )
}

export default Services
