import React from 'react'
import Navbar from './Navbar'
import CheckBar from './CheckBar'
import CTA from './CTA'
import Feature from './Feature'
import Footer from './Footer'
import HeroSection from './HeroSection'
import CardSection from './CardSection'
import Servies from './Servies'
import Articles from './Articles'
import MajorServices from './MajorServices'

export default function App() {
    return (
        <div>
            <Navbar />
            {/* <HeroSection/> */}
            <CheckBar />
            <CardSection/>
            <Servies/>
            <CTA/>
            <MajorServices/>
            <Articles/>
            <Feature/>
            <Footer/>
        </div>
    )
}
