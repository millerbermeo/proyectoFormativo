import React from 'react'



function Navbar() {
    return (
        <>
            <div className='w-full h-[70px] bg-blue-300 flex justify-end items-center gap-[56.5%] pr-10'>
                <div className="items-center border-none rounded-lg overflow-hidden hidden xl:flex">
                    <div className="p-2 bg-gray-200 ">
                        <i className="text-gray-600 fas fa-search"></i>
                    </div>
                    <input
                        className="w-full py-2 px-3 outline-none text-gray-700"
                        type="search"
                        placeholder="Buscar..."
                    />
                </div>


                <div className='flex gap-5 justify-center items-center'>
                <div className='text-2xl flex gap-2 text-blue-500'>
                        <i class="fa-solid fa-bell"></i>
                        <i class="fa-solid fa-right-to-bracket"></i>
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col gap-0 w-[100px]'>
                            <p className='text-sm text-right pr-2'>Miller Rivera
                            </p>
                            <span className='text-[12px] font-bold text-gray-800 text-right pr-2'>Admin</span>
                        </div>
                        <img className='w-10 h-10' src="personas.png" alt="" />
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Navbar
