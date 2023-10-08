import React from 'react'
import Nav from '../components/Nav'
import CardTipos from '../components/CardTipos'
import CardSenal from '../components/CardSenal'
import { CarouselCustomNavigation } from '../components/CarouselCustomNavigation'

function AcopioPage() {
    return (
        <>
            <Nav />
            <div className='w-full bg-white h-screen flex flex-col justify-center p-20' style={{ backgroundImage: `url('pexels-pixabay-461960.jpg')`, backgroundSize: 'cover' }}>
                <h1 className='font-bold text-7xl text-white mb-10 mt-10'>
                    CENTRO DE <br>
                    </br>
                    ACOPIO YAMBORO
                </h1>
                <p className='text-white mb-5 text-xl'>
                    No arruinemos la tierra, es difícil encontrar
                    un buen planeta
                </p>

                <button class="opacity-70 bg-blue-500 w-32 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Saber Mas
                </button>
            </div>

            {/* <div className='w-[80%] h-56 bg-[#519bdc] m-auto absolute z-20 bottom-[-16%] left-0 right-0 rounded-lg'>

            </div> */}


            <div className='mt-20 mb-10'>

                <h2 className='font-bold text-center text-4xl'>Clasificación de Residuos</h2>
            </div>


            <div className='w-[85%] h-[240px] bg-blue-400 absolute right-0 left-0 m-auto translate-y-40 z-[-1] shadow-xl rounded'>

            </div>

            <div className='w-full grid grid-cols-3 place-items-center gap-10 pl-48 pr-48 p-20 z-20'>
                <CardTipos img="paiuno.jpg" />
                <CardTipos img="paidos.png" />
                <CardTipos img="pai3.avif" />
                {/* <CardTipos />
                <CardTipos />
                <CardTipos /> */}
                <div className='relative w-full right-[-160%]'>
                    <i className="fa-solid fa-circle-chevron-down text-4xl"></i>
                </div>
            </div>

            <div className='w-full h-96 mt-10 mb-32'>
                <CarouselCustomNavigation />
            </div>

            <section className='w-full h-[550px] grid grid-cols-3 place-items-center bg-red-900 pl-20 pr-20 p-10' style={{ backgroundImage: `url('pexels-quang-nguyen-vinh-2649403.jpg')`, backgroundSize: 'cover' }}>
                <CardSenal img="senalizacion.png" title="Señalizacion" texto="Las señalizaciones nos permiten depositar residuos correctamente" />
                <CardSenal img="lista-de-verificacion.png" title="Clasificación" texto="Las señalizaciones nos permiten depositar residuos correctamente" />
                <CardSenal img="transporte.png" title="Entrega" texto="Las señalizaciones nos permiten depositar residuos correctamente" />
                <CardSenal img="capacitacion.png" title="Capacitación" texto="Las señalizaciones nos permiten depositar residuos correctamente" />
                <CardSenal img="globo.png" title="Transformación" texto="Las señalizaciones nos permiten depositar residuos correctamente" />
                <CardSenal img="equipo.png" title="Practicas" texto="Las señalizaciones nos permiten depositar residuos correctamente" />
            </section>

            <section className='flex justify-center items-start w-full p-20'>
                <div className='w-[40%] text-left pr-20'>
                    <p className='leading-loose'>La recolección de residuos es una parte esencial de la gestión de residuos en cualquier comunidad. Este proceso consiste en la recopilación y transporte de materiales desechados desde sus fuentes de generación hasta las instalaciones adecuadas para su disposición final o reciclaje. Aunque a menudo pasa desapercibida en la vida cotidiana, la recolección de residuos desempeña un papel crucial en la preservación del medio ambiente y la salud pública.

                        Existen diferentes métodos de recolección de residuos, que varían según la ubicación geográfica, la densidad poblacional y la infraestructura disponible. Algunos de los métodos más comunes incluyen:</p>
                </div>
                <div className='w-[60%] h-96 flex justify-center' >
                    <CarouselCustomNavigation />
                </div>
            </section>



        </>
    )
}

export default AcopioPage
