import React from 'react'
import Header from '../Header'
import Powerful from '../Powerful';
import Resident from '../Resident';
import SectionWithAccordionAndImage from '../FAQ';
import Footer from '../Footer'

import "./index.css"

export default function Home () {
  return (
    <div>
      <Header/>
      <Powerful/>
      <Resident/>
      <SectionWithAccordionAndImage/>
      <Footer/>
    </div>
  )
}