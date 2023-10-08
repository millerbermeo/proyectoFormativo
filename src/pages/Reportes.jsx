import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Reportes() {
    return (
        <>
            <div className="w-full h-screen flex bg-[#CDE0FF]">
                <Sidebar />
                <div className="w-full sm:0 lg:ml-60">
                    <Navbar />
                    <div className="w-full h-[89%] p-10">
                        <div className="w-full h-[100%] bg-white p-5 shadow-xl">
                            <div className="w-full flex justify-start gap-5 items-center pb-2 border-b-2">
                                <i class="fa-solid fa-arrow-left p-3 bg-red-600 text-white font-bold"></i>
                                <h2 className="font-bold text-2xl">
                                    Reporte CAS
                                </h2>
                            </div>

                            <div className="px-5 py-2">
                                <form action="" method="get" class="space-y-4 flex justify-start flex-wrap items-end gap-x-10">
                                    <div>
                                        <label for="fecha-inicial" class="block">Fecha Inicial</label>
                                        <input type="date" id="fecha-inicial" name="fecha-inicial" class="border rounded-md px-3 py-2 w-64" />
                                    </div>
                                    <div>
                                        <label for="fecha-final" class="block">Fecha Final</label>
                                        <input type="date" id="fecha-final" name="fecha-final" class="border rounded-md px-3 py-2 w-64" />
                                    </div>
                                    <div>
                                        <label for="tipo-residuo" class="block">Tipo de Residuo</label>
                                        <select id="tipo-residuo" name="tipo-residuo" class="border rounded-md px-3 py-2 w-64">
                                            <option value="uno">Uno</option>
                                            <option value="dos">Dos</option>
                                            <option value="tres">Tres</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="area" class="block">Área</label>
                                        <select id="area" name="area" class="border rounded-md px-3 py-2 w-64">
                                            <option value="area1">Área 1</option>
                                            <option value="area2">Área 2</option>
                                            <option value="area3">Área 3</option>
                                        </select>
                                    </div>
                                </form>

                            </div>

                            <div className="flex justify-end gap-5 px-5">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Consultar
                                </button>
                                <button class="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Limpiar
                                </button>
                            </div>


                            <div className="p-5 overflow-x-auto">
                                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-4 py-2">id</th>
                                            <th className="px-4 py-2">Nombre</th>
                                            <th className="px-4 py-2">Cantidad</th>
                                            <th className="px-4 py-2">Descripcion</th>
                                            <th className="px-4 py-2">Deposito</th>
                                            <th className="px-4 py-2">Deposito</th>
                                            <th className="px-4 py-2">Area</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tableBody">
                                        <tr>
                                            <td class="px-4 py-2">1</td>
                                            <td class="px-4 py-2">Posición</td>
                                            <td class="px-4 py-2">Oficina</td>
                                            <td class="px-4 py-2">Edad</td>
                                            <td class="px-4 py-2">Fecha de Inicio</td>
                                            <td class="px-4 py-2">Salario</td>
                                            <td class="px-4 py-2">Tics</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="px-5 flex justify-between items-center mt-2">
                                <div>
                                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                        <span>Download</span>
                                    </button>
                                </div>
                                <div className="flex justify-end gap-4 items-center">
                                    <button id="prevPage" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-l-md">
                                        Anterior
                                    </button>
                                    <button id="nextPage" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-md">
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reportes

