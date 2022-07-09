import React from 'react';

const Navbar = () => {
    return (
        <div className='lg:hidden'>
            <div class="navbar bg-black text-white font-semibold">
                <div class="flex-1 ">
                    <h1 className='mx-auto text-xl font-bold font-serif'>Md. Abu Taher Sarker</h1>
                </div>
                <div class="flex-none mr-4 bg-white text-black p-2 rounded-full">
                    <label for="my-drawer-2" class="drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;