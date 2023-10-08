import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Datatable from "../components/Datatable";

function ListarResiduos() {
    return (
        <>
            <div className="w-full h-screen flex bg-[#CDE0FF]">
                <Sidebar />
                <div className="w-full sm:0 lg:ml-60">
                    <Navbar />
                    <Datatable  uno="Nombre" dos="Tipo" tres="Cantidad" cuatro="Descripcion" cinco="Deposito" seis="Area"/>
                    
                </div>
            </div>
        </>
    )
}

export default ListarResiduos
