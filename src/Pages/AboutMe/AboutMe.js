import React from 'react';
import About from './About';
import Clients from './Clients';
import Services from './Services';
import Testimonials from './Testimonials';

const AboutMe = () => {
    return (
        <div data-aos="zoom-in" className='p-12'>
            <About />
            <Services />
            <Clients />
            <Testimonials />
        </div>
    );
};

export default AboutMe;