import React from 'react'
import Header from '../Header'
import Powerful from '../Powerful';
import Resident from '../Resident';
import Gatekeeper from '../Gatekeeper';
import Admin from '../Admin';
import Facility from '../Facility'
import SectionWithAccordionAndImage from '../FAQ';
import Footer from '../Footer'

import "./index.css"
import Apartment from '../Apartment';


export default function Home () {
  return (
    <div>
      <Header/>
      <Apartment/>
      <Powerful/>
      <Resident/>
      <Gatekeeper/>
      <Facility/>
      <Admin/>
      <SectionWithAccordionAndImage/>
      <Footer/>
    </div>
  )
}