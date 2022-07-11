import React from 'react';
import img_1 from '../../Images/services/icons8-web-design-64 (1).png'

const Services = () => {
    const services = [
        {
            id: 1,
            icon: img_1,
            name: "Front End",
            details:"Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero."
        },
        {
            id: 2,
            icon: img_1,
            name: "Back End",
            details:"Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero."
        },
        {
            id: 3,
            icon: img_1,
            name: "MERN Stack",
            details:"Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero."
        },
        {
            id: 4,
            icon: img_1,
            name: "Responsive Design",
            details:"Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero."
        },
    ]
    return (
        <div className='text-white mt-16'>
            <div style={{ width: "160px" }}  className='flex mx-auto'>
                <div className='border h-3 mt-7 border-secondary'></div>
                <div className=" font-serif"><h1 className='text-3xl text-center border-b-2 border-secondary px-3 pb-1'>SERVICES</h1></div>
                <div className='border h-3 mt-7 border-secondary'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-16 text-center'>
                {
                    services.map(service => <div className=' p-4 shadow-2xl border-b border-secondary'>
                        <div className='mb-4'>
                            <img className='mx-auto' src={service.icon} alt="" />
                        </div>
                        <h1 className='text-xl mb-3 font-serif '>{service.name}</h1>
                        <h1 className='text-gray-300 text-justify'>{service.details}</h1>
                    </div> )
                }
            </div>
        </div>
    );
};

export default Services;