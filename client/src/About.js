import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const data={
    name:"Beauty Shop Team"
  };
  return (
   <HeroSection myData={data}/>
  )
}

export default About