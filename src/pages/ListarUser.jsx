import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Datatable from "../components/Datatable";

function ListarUser() {
    return (
        <>
            <div className="w-full h-screen flex bg-[#CDE0FF]">
                <Sidebar />
                <div className="w-full sm:0 lg:ml-60">
                    <Navbar />
                    <Datatable  uno="Nombre" dos="Apellido" tres="Identificacion" cuatro="Email" cinco="Password" seis="image"/>
                    
                </div>
            </div>
        </>
    )
}

export default ListarUser

