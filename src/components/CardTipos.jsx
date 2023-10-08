import React from 'react'

function CardTipos({img}) {
    return (
        <>
            <div className='w-72 h-56 shadow-2xl rounded-md overflow-hidden bg-white'>
                <img className='w-full h-40' src={img} alt="" />
                <span className='w-20 h-auto flex gap-0 p-2 flex-wrap font-semibold text-blue-600'>
                    Residuos
                    Aprovechables
                </span>
            </div>
        </>
    )
}

export default CardTipos
