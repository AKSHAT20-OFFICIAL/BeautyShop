import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/Productcontext';

const About = () => {
const {myName} = useProductContext();
  const data={
    name:"Beauty Shop Team"
  };
  return (
    <>
    {myName}
    <HeroSection myData={data}/>
    </>
   
  )
}

export default About