import React from 'react';

function Datatable({uno, dos, tres, cuatro, cinco, seis}) {
    return (
        <div className="container mx-auto mt-1 p-5">
            <input
                type="text"
                id="searchInput"
                placeholder="Buscar..."
                className="mb-4 px-4 py-[10px] rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <button class="bg-transparent ml-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Buscar
            </button>
            <button class="bg-blue-500 ml-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Nuevo
            </button>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2">{uno}</th>
                            <th className="px-4 py-2">{dos}</th>
                            <th className="px-4 py-2">{tres}</th>
                            <th className="px-4 py-2">{cuatro}</th>
                            <th className="px-4 py-2">{cinco}</th>
                            <th className="px-4 py-2">{seis}</th>
                            <th className="px-4 py-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        <tr>
                            <td class="px-4 py-2">Nombre</td>
                            <td class="px-4 py-2">Posición</td>
                            <td class="px-4 py-2">Oficina</td>
                            <td class="px-4 py-2">Edad</td>
                            <td class="px-4 py-2">Fecha de Inicio</td>
                            <td class="px-4 py-2">Salario</td>
                            <td className='flex gap-5 justify-center p-2'>
                                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    Editar
                                </button>
                                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red rounded">

                                    Eliminar
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2">Nombre</td>
                            <td class="px-4 py-2">Posición</td>
                            <td class="px-4 py-2">Oficina</td>
                            <td class="px-4 py-2">Edad</td>
                            <td class="px-4 py-2">Fecha de Inicio</td>
                            <td class="px-4 py-2">Salario</td>
                            <td className='flex gap-5 justify-center p-2'>
                                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    Editar
                                </button>
                                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red rounded">

                                    Eliminar
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2">Nombre</td>
                            <td class="px-4 py-2">Posición</td>
                            <td class="px-4 py-2">Oficina</td>
                            <td class="px-4 py-2">Edad</td>
                            <td class="px-4 py-2">Fecha de Inicio</td>
                            <td class="px-4 py-2">Salario</td>
                            <td className='flex gap-5 justify-center p-2'>
                                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    Editar
                                </button>
                                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red rounded">

                                    Eliminar
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2">Nombre</td>
                            <td class="px-4 py-2">Posición</td>
                            <td class="px-4 py-2">Oficina</td>
                            <td class="px-4 py-2">Edad</td>
                            <td class="px-4 py-2">Fecha de Inicio</td>
                            <td class="px-4 py-2">Salario</td>
                            <td className='flex gap-5 justify-center p-2'>
                                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    Editar
                                </button>
                                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red rounded">

                                    Eliminar
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2">Nombre</td>
                            <td class="px-4 py-2">Posición</td>
                            <td class="px-4 py-2">Oficina</td>
                            <td class="px-4 py-2">Edad</td>
                            <td class="px-4 py-2">Fecha de Inicio</td>
                            <td class="px-4 py-2">Salario</td>
                            <td className='flex gap-5 justify-center p-2'>
                                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    Editar
                                </button>
                                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red rounded">

                                    Eliminar
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2">Nombre</td>
                            <td class="px-4 py-2">Posición</td>
                            <td class="px-4 py-2">Oficina</td>
                            <td class="px-4 py-2">Edad</td>
                            <td class="px-4 py-2">Fecha de Inicio</td>
                            <td class="px-4 py-2">Salario</td>
                            <td className='flex gap-5 justify-center p-2'>
                                <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    Editar
                                </button>
                                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red rounded">

                                    Eliminar
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-end gap-4 items-center">
                <button id="prevPage" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-l-md">
                    Anterior
                </button>
                <button id="nextPage" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-md">
                    Siguiente
                </button>
            </div>

        </div>
    );
}

export default Datatable;




