import React from 'react'

function CardSenal({img, title, texto }) {
    return (
        <>
            <div className='w-[340px] h-48 bg-[aliceblue] flex flex-col justify-center items-center rounded-lg'>
                <img src={img} alt=""  className='rounded-full w-16 h-16'/>
                <h2 className='font-bold text-lg'>{title}</h2>
                <p className='text-center text-gray-600 text-sm font-medium px-5 mt-1'>{texto}</p>
            </div>
        </>
    )
}

export default CardSenal