import React from 'react'

function Nav() {
    return (
        <>
            <nav className='w-full h-[65px] bg-[aliceblue] flex items-center justify-between fixed top-0 z-30 shadow-md'>
                <div className='flex gap-2 pl-10 justify-center items-end'>
                    <img className='w-10 h-10' src="favicon.png" alt="" />
                    <h2 className='font-bold text-3xl'>
                        Cas
                    </h2>
                    <span>
                        Yamboro
                    </span>
                </div>

                <ul className='flex gap-4 pr-10 font-medium'>
                    <li><i class="fa-solid fa-house mx-2"></i><a href="" className=''> Home</a></li>
                    <li><a href="" className='py-5'>Separacion</a></li>
                    <li><a href="" className='py-5'>Aprovechamiento</a></li>
                    <li><a href="" className='py-5'>Residuos</a></li>
                    <li><a href="" className='py-5'><i class="fa-solid fa-bars"></i></a></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
