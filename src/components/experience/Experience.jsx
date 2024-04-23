import React from 'react'
import '../experience/Experience.css'
import {BsFillPatchCheckFill  } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
          <div className="experience__frontend">

            <h3>Frontend Development</h3>
            <div className="experience__content">

              <article className='experince__details'>
                <BsFillPatchCheckFill  className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>

              </article>
              <article className='experince__details'>
                <BsFillPatchCheckFill  className=' experience__details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className='experince__details'>
                <BsFillPatchCheckFill  className=' experience__details-icon'/>
                <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className='experince__details'>
                <BsFillPatchCheckFill  className=' experience__details-icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className='experince__details'>
                <BsFillPatchCheckFill  className=' experience__details-icon'/>
                <div>
                <h4>React JS</h4>
                <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className='experince__details'>
                <BsFillPatchCheckFill  className=' experience__details-icon'/>
                <div>
                <h4>Flutter</h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>

            </div>

          </div>
          {/* End of Frontend */}

          <div className="experience__backend">

            <h3>Backend Development</h3>

            <div className="experience__content">

            <article className='experince__details'>
                <BsFillPatchCheckFill  className=' experience__details-icon'/>
                <div>
                <h4>Node JS</h4>
                <small className="text-light">Learning</small>
                </div>
              </article>
              <article className='experince__details'>
                <BsFillPatchCheckFill  className=' experience__details-icon'/>
                <div>
                <h4>SQL</h4>
                <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className='experince__details'>
                <BsFillPatchCheckFill  className=' experience__details-icon'/>
                <div>
                <h4>JAVA</h4>
                <small className="text-light">Learning</small>
                </div>
              </article>

            </div>

          </div>
      </div>
    </section>
  )
}

export default Experience
