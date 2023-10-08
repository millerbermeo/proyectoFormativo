import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Formulario from '../components/Formulario'

function RegistrarResiduos() {
  return (
    <>
        <div className="w-full h-screen flex bg-[#CDE0FF] shadow-lg">
                <Sidebar />
                <div className="w-full sm:0 lg:ml-60">
                    <Navbar />
                    <div className="mt-10">
                    <Formulario/>  
                    </div>
                </div>
            </div>
    </>
  )
}

export default RegistrarResiduos
