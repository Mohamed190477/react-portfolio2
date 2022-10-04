import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <HeroImage2 heading="CONTACT." text="Let's Have A Chat" />
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default Contact