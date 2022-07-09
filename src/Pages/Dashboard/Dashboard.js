import React from 'react';
import './Dashboard.css'
import { Link, Outlet } from 'react-router-dom';
import image1 from '../../Images/Home/mf-avatar.svg';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsEnvelope,BsFacebook,BsTwitter,BsGithub,BsLinkedin,BsYoutube } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { FaRegClone } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
    return (
        <div className=''>
            <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col ">
                {/* <!-- Page content here --> */}
                <Navbar/>
                <Outlet/>
                
            </div> 
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label> 
                    <ul style={{
                        width: "200px", background: "#17181b",
                        color:"#777777"
                    }} class="menu
                     overflow-y-auto  bg-base-100 text-base-content parent_class">
                {/* <!-- Sidebar content here --> */}
                <li className='w-2/3 mx-auto'>
                    <img className='relative rounded-full' src={image1} alt="" srcset="" />
                    <h1 className='text-white mx-auto text-md hidden md:block font-serif top-44 left-6 '>ABU TAHER</h1>
                </li>
                
                <li className='text-xs' style={{borderBottom:"1px solid #383737"}}><Link to="/"><div style={{width:"130px"}} className='mx-auto flex items-center'><AiOutlineHome size="1.5rem"/><p className='ml-3'>HOME</p></div></Link></li>
                
                <li className='text-xs' style={{borderBottom:"1px solid #383737"}}><Link to="/about"><div style={{width:"130px"}} className='mx-auto flex items-center'><BsPerson size="1.5rem"/><p className='ml-3'>ABOUT ME</p></div></Link></li>
                
                <li className='text-xs' style={{borderBottom:"1px solid #383737"}}><Link to="/resume"><div style={{width:"130px"}} className='mx-auto flex items-center'><IoDocumentTextOutline size="1.5rem"/><p className='ml-3'>RESUME</p></div></Link></li>
                
                <li className='text-xs' style={{borderBottom:"1px solid #383737"}}><Link to="/portfolio"><div style={{width:"130px"}} className='mx-auto flex items-center'><BsBriefcase size="1.25rem"/><p className='ml-4'>PORTFOLIO</p></div></Link></li>
                
                <li className='text-xs' style={{borderBottom:"1px solid #383737"}}><Link to="/blogs"><div style={{width:"130px"}} className='mx-auto flex'><FaRegClone size="1.25rem"/><p className='ml-4'>BLOGS</p></div></Link></li>
                
                <li className='text-xs' style={{borderBottom:"1px solid #383737"}}><Link to="/contact"><div style={{width:"130px"}} className='mx-auto flex items-center'><BsEnvelope size="1.25rem"/><p className='ml-4'>CONTACT</p></div></Link></li>
                
                <li className='mt-24 child_class'>
                    <div className='grid grid-cols-1'>
                        <div className='flex justify-around'>
                            <BsFacebook size="1.125rem"/>
                            <BsTwitter size="1.125rem"/>
                            <BsGithub size="1.125rem"/>
                            <BsLinkedin size="1.125rem"/>
                            <BsYoutube size="1.25rem"/>
                        </div>
                        <div>
                            <p className='text-center'>2021 @ All Right Reserved</p>
                        </div>
                    </div>
                </li>
                </ul>
            
            </div>
            </div>
        </div>
    );
};

export default Dashboard;