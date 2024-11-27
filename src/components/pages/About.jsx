import React from 'react'
import  Heading  from "../common/Heading"
import { about } from "../data/dummydata"
const About = () => {
  return (
    <>
     <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' style={{ width: '300px', height: 'auto' }} />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button className='primaryBtn' data-aos='fade-up-right'>
            <a
              href="Kartik_Kumar_Agrahari_Resume.pdf"
              download="Kartik_Kumar_Agrahari_Resume.pdf" // File download name
              data-aos="fade-up-right"
            >
              Download CV
            </a>
            </button>
                <button className='primaryBtn' data-aos='fade-up-right'>
            <a
              href="Kartik_Kumar_Agrahari_Resume.pdf"
              download="Kartik_Kumar_Agrahari_Resume.pdf" // File download name
              data-aos="fade-up-right"
            >
              Download CV
            </a>
            </button>
              </div>
            </>
          ))}
        </div>
      </section> 
    </>
  )
}

export default About
