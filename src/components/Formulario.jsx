import React from 'react'
import { Link } from 'react-router-dom'

function Formulario() {
    return (
        <>
            <form action="#" method="POST" class="max-w-4xl mx-auto p-4 grid grid-cols-2 gap-4 bg-gray-100">
                <div class="col-span-2 mb-4">
                    <label for="nombre" class="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Nombre"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div class="mb-4">
                    <label for="tipo" class="block text-gray-700 text-sm font-bold mb-2">Tipo</label>
                    <select
                        id="tipo"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="tipo1">Tipo 1</option>
                        <option value="tipo2">Tipo 2</option>
                        <option value="tipo3">Tipo 3</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label for="cantidad" class="block text-gray-700 text-sm font-bold mb-2">Cantidad</label>
                    <input
                        id="cantidad"
                        type="number"
                        placeholder="Cantidad"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div class="mb-4">
                    <label for="descripcion" class="block text-gray-700 text-sm font-bold mb-2">Descripción</label>
                    <textarea
                        id="descripcion"
                        placeholder="Escribe tu descripción aquí"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                </div>
                <div class="mb-4">
                    <label for="deposito" class="block text-gray-700 text-sm font-bold mb-2">Depósito</label>
                    <select
                        id="deposito"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="deposito1">Depósito 1</option>
                        <option value="deposito2">Depósito 2</option>
                        <option value="deposito3">Depósito 3</option>

                    </select>
                </div>
                <div class="mb-4">
                    <label for="area" class="block text-gray-700 text-sm font-bold mb-2">Área</label>
                    <select
                        id="area"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="area1">Área 1</option>
                        <option value="area2">Área 2</option>
                        <option value="area3">Área 3</option>

                    </select>
                </div>
                <div class="col-span-2 gap-4 flex justify-center">
                    <Link to="/listar">
                        <button
                            type="submit"
                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Atras
                        </button>
                    </Link>

                    <button
                        type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Enviar
                    </button>
                </div>
            </form>




        </>
    )
}

export default Formulario
