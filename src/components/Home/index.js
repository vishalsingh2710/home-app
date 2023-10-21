import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import SectionWithAccordionAndImage from '../FAQ';

import "./index.css"

export default function Home () {
  return (
    <div>
      <Header/>
      <SectionWithAccordionAndImage/>
      <Footer/>
    </div>
  )
}