import React from 'react';
import './Home.css'
import img_1 from '../../Images/Home/img_3.jpg'

const Home = () => {
    return (
        <div className='top'>
            <img style={{ height: "100vh", width: "100vw" }} src={img_1} alt="" />
            <div className='bottom font-serif'>
                <h1 className='md:text-5xl text-white font-bold'>Abu Taher<span className='text-secondary'> Sarker</span></h1>
                <p style={{ letterSpacing: "2px" }} className='text-white text-center md:text-lg mt-2 font-semibold'>I am Professional web developer</p>
                
                <div className='text-center mt-12 '>
                    <button className='btn btn-secondary btn-outline px-12'>RESUME</button>
                </div>
            </div>
        </div>
    );
};

export default Home;