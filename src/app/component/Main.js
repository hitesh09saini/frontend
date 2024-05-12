import React from 'react'
import { Header, Hero, Cursor, About, Projects, Footer, Experience } from './exports'
const Main = () => {
  return (

    <div className={`select-none min-h-screen relative cursor-none bg-[#EEE9EB] main`} data-scroll-container>
     <Cursor />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
     
     

     
    </div>
  )
}

export default Main
