import React from 'react';
import Navbar from '../components/Navbar';
import HeroImage2 from '../components/HeroImage2';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Project = () => {
    return (
        <div>
            <Navbar/>
            <HeroImage2 heading="PROJECTS." text="Some Of My Most Recent Works" />
            <Work />
            <PricingCard />
            <Footer/>
        </div>
    )
}

export default Project