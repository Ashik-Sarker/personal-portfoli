import React from 'react';
import './Home.css'
import img_1 from '../../Images/Home/img_3.jpg'
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='top' data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        >
            <img style={{ height: "100vh", width: "100vw" }} src={img_1} alt="" />
            <div className='bottom font-serif'>
                <h1 className='text-3xl md:text-5xl text-white font-bold'>Abu Taher<span className='text-secondary'> Sarker</span></h1>
                
                <div className='text-white text-xl text-center'>
                    <div>
                        <p>I am a professional</p>
                    </div>
                    <div className='text-secondary'>
                        <Typewriter
                        options={{
                        strings: ['Front End developer ⏱', 'React Developer ⏱', 'MERN Stack developer ⏱'],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        }}
                        />
                    </div>
                    
                </div>
                
                <div className='text-center mt-12 '>
                    <button className='btn btn-secondary btn-outline px-12'>RESUME</button>
                </div>
            </div>
        </div>
    );
};

export default Home;