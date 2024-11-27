import React from "react"
import  About  from "../pages/About"
import Contact  from "../pages/Contact"
import Services  from "../pages/Services"
import  Hero  from "./Hero"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact /> 
    </>
  )
}



export default Home;