import React from 'react'
import Header from '../Header'
import Management from '../Management';
import Apartment from '../Apartment'; 
import Powerful from '../Powerful';
import Resident from '../Resident';
import Gatekeeper from '../Gatekeeper';
import Admin from '../Admin';
import Facility from '../Facility'
import Discover from '../Discover'
import SectionWithAccordionAndImage from '../FAQ';
import Footer from '../Footer'

import "./index.css"


export default function Home () {
  return (
    <div>
      <Header/>
      <Management/>
      <Apartment/>
      <Powerful/>
      <Resident/>
      <Gatekeeper/>
      <Facility/>
      <Admin/>
      <Discover/>
      <SectionWithAccordionAndImage/>
      <Footer/>
    </div>
  )
}