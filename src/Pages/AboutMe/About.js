import React from 'react';
import { BsPerson } from 'react-icons/bs';

const About = () => {
    return (
        <div className='text-secondary'>
            <div className='flex justify-between border-b border-dashed border-gray-500 pb-2 font-serif'>
                <div>
                    <h1 className='text-4xl'>About Me.</h1>
                </div>
                <div>
                    <BsPerson size="2.5rem"/>
                </div>
            </div>
            {/* <div class="divider"></div>  */}
            <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-white'>
                <div className = 'col-span-2 leading-6'>
                    <h1 className='text-3xl font-serif mb-4'>Web Designer & Developer</h1>
                    <p className='mb-4 text-justify text-gray-300'>Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerum</p>
                    <p className='mb-4 text-justify text-gray-300'>Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid excepturi laudantium? Illo architecto aliquam velit illo magnam neque perferendis sint Incidunt eius ipsa inventore labore eos velit. Minus hic magni reiciendis necessitatibus ex Quidem officia deleniti accusamus obcaecati dolores. Porro culpa quibusdam impedit porro praesentium excepturi. Alias ab consequatur?</p>
                    <h1 className='text-6xl text-secondary font-extralight'>Signature</h1>
                </div>
                <div className='md:ml-8 mt-12 md:mt-0'>
                    <h1 className='text-3xl md:text-2xl mb-6 md:mb-4 font-serif'>Personal Information</h1>
                    <p className='text-gray-400 mb-3'><span className='text-white font-bold mr-3 border-b border-secondary pb-1'>Name: </span>Ashik Sarker</p>
                    <p className='text-gray-400 mb-3'><span className='text-white font-bold mr-3 border-b border-secondary pb-1'>Age: </span>27 Years</p>
                    <p className='text-gray-400 mb-3'><span className='text-white font-bold mr-3 border-b border-secondary pb-1'>Residence: </span> Bangladesh</p>
                    <p className='text-gray-400 mb-3'><span className='text-white font-bold mr-3 border-b border-secondary pb-1'>Address: </span>123, Dhaka</p>
                    <p className='text-gray-400 mb-3'><span className='text-white font-bold mr-3 border-b border-secondary pb-1'>Email: </span>ashiksarker89@gmail.com</p>
                    <p className='text-gray-400 mb-3'><span className='text-white font-bold mr-3 border-b border-secondary pb-1'>Phone: </span>+880 1749531677</p>
                    <p className='text-gray-400 mb-6'><span className='text-white font-bold mr-3 border-b border-secondary pb-1'>Freelance: </span>Available</p>
                    <button className='btn btn-secondary btn-outline w-2/3'>Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default About;