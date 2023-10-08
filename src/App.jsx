import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Options from "./pages/Options"
import ListarResiduos from "./pages/ListarResiduos"
import RegistrarResiduos from "./pages/RegistrarResiduos"
import AcopioPage from "./pages/AcopioPage"
import ListarUser from "./pages/ListarUser"
import Reportes from "./pages/Reportes"

function App() {
 
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/options" element={<Options/>}/>
      <Route path="/listar" element={<ListarResiduos/>}/>
      <Route path="/listar-user" element={<ListarUser/>}/>
      <Route path="/registrar" element={<RegistrarResiduos/>}/>
      <Route path="/acopiopage" element={<AcopioPage/>}/>
      <Route path="/reportes" element={<Reportes/>}/>
     </Routes>
    </>
  )
}

export default App
