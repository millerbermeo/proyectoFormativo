import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Formulario from "../components/Formulario";

const Sidebar = () => {
   const [isOpen1, setIsOpen1] = useState(false);
   const [isOpen2, setIsOpen2] = useState(false);

   const toggleAccordion1 = () => {
      setIsOpen1(!isOpen1);
      // Si abrimos el acordeón 1, cerramos el acordeón 2
      if (isOpen2) {
         setIsOpen2(false);
      }
   };

   const toggleAccordion2 = () => {
      setIsOpen2(!isOpen2);
      // Si abrimos el acordeón 2, cerramos el acordeón 1
      if (isOpen1) {
         setIsOpen1(false);
      }
   };

   return (
      <>








         <div onClick={menuLateral} id='menu-hamburguesa' className='absolute z-20 sm:block lg:hidden left-4 top-2 border pl-2 pr-2 text-lg'>
            <i class="fa-solid fa-bars"></i>
         </div>
         <div id='barra-lateral' className="w-60 bg-blue-500 h-screen flex flex-col fixed">
            <aside className="w-64 h-screen p-6 pt-5 flex flex-col justify-start gap-4">
               <div className='pt-10 lg:pt-3'>
                  <p className='text-white'><span className='font-bold text-white text-3xl'>CAS </span> Centro Acopio</p>
               </div>

               <ul className='mt-10'>
                  <Link to="/">
                     <li className="mb-8 flex gap-5">
                        <img className='w-5' src="apps-sharp.png" alt="" />
                        <a href="#" className="text-white hover:text-gray-400">Dashdoard</a>
                     </li>
                  </Link>
                  {/* Item del Acordeón 1 */}
                  <li className="mb-2">
                     <button
                        onClick={toggleAccordion1}
                        className="w-full text-left text-white flex items-center justify-between"
                     >
                        <div className='flex gap-5'>
                           <i className="text-2xl fa-solid fa-trash-can-arrow-up"></i>
                           <span>Residuos</span>
                        </div>
                        <svg
                           className={`w-4 h-4 fill-current transform ${isOpen1 ? 'rotate-180' : 'rotate-0'
                              } transition-transform duration-300`}
                        >
                           <path d="M5 8l4 4 4-4" />
                        </svg>
                     </button>
                     <ul className={`pl-4 ${isOpen1 ? 'block' : 'hidden'}`}>
                        <Link to="/registrar">
                        <li id="abrirModal" className="mb-2 ">
                           <a className="text-gray-300 hover:text-white">
                              Registar
                           </a>
                        </li>
                        </Link>
                        <Link to="/listar">
                           <li className="mb-2">
                              <a href="#" className="text-gray-300 hover:text-white">
                                 Listar
                              </a>
                           </li>
                        </Link>
                        <li className="mb-2">
                           <a href="#" className="text-gray-300 hover:text-white">
                              Buscar
                           </a>
                        </li>
                     </ul>
                  </li>
                  {/* Item del Acordeón 2 */}
                  <li className="mb-2">
                     <button
                        onClick={toggleAccordion2}
                        className="w-full text-left text-white flex items-center justify-between"
                     >
                        <div className='flex gap-5'>
                           <i class="text-2xl fa-solid fa-circle-user"></i>
                           <span>Usuarios</span>
                        </div>
                        <svg
                           className={`w-4 h-4 fill-current transform ${isOpen2 ? 'rotate-180' : 'rotate-0'
                              } transition-transform duration-300`}
                        >
                           <path d="M5 8l4 4 4-4" />
                        </svg>
                     </button>
                     <ul className={`pl-4 ${isOpen2 ? 'block' : 'hidden'}`}>
                        <li className="mb-2">
                           <a href="#" className="text-gray-300 hover:text-white">
                              Registar
                           </a>
                        </li>
                        <Link to="/listar-user">
                        <li className="mb-2">
                           <a href="#" className="text-gray-300 hover:text-white">
                              Listar
                           </a>
                        </li>
                        </Link>
                        <li className="mb-2">
                           <a href="#" className="text-gray-300 hover:text-white">
                              Buscar
                           </a>
                        </li>
                     </ul>
                  </li>

                  <Link to="/reportes">
                  <li className="mb-2">
                     <div className='flex gap-5'>
                        <i class="text-2xl fa-solid fa-folder-open text-white"></i>
                        <a href="#" className="text-white hover:text-gray-400">Reportes</a>
                     </div>
                  </li>
                  </Link>
                  <li className="mb-2">
                     <div className='flex gap-5'>
                        <i class="text-2xl fa-solid fa-square-minus text-white"></i>
                        <a href="#" className="text-white hover:text-gray-400">Elementos</a>
                     </div>
                  </li>
                  <li className="mb-2">
                     <div className='flex gap-5'>
                        <i class="text-2xl fa-solid fa-pen-to-square text-white"></i>
                        <a href="#" className="text-white hover:text-gray-400">Tareas</a>
                     </div>
                  </li>
                  <Link to="/acopiopage">
                  <li className="mb-2">
                     <div className='flex gap-5'>

                        <i class="text-2xl fa-solid fa-images text-white"></i>
                        <a href="#" className="text-white hover:text-gray-400">Page</a>
                     </div>
                  </li>
                  </Link>
               </ul>
               <div className='absolute left-0 bottom-0 lg:bottom-6 p-2 flex justify-center text-white bg-blue-400 w-60'>
                  <span>copyright reserved ©</span>
               </div>
            </aside>
         </div>
      </>
   );
};

export default Sidebar;
