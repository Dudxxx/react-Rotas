import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'

import { Home } from "./pages/Home/Home"
import { Contato } from "./pages/Contato/Contato"
import { Sobre } from "./pages/Sobre/Sobre"
import { Pagina404 } from "./pages/Pagina404/Pagina404"
import { Layout } from './pages/Layout'
import { Estado1 } from './pages/Estado/Estado1'
import { ComEstado } from './pages/Estado/ComEstado'
import { CampoTexto } from './pages/Estado/CampoTexto'
import { ContadorMM } from './pages/Estado/ContadorMM'
import { ComunicacaoIndireta } from './pages/Comunicacao/ComunicacaoIndireta'
import { ComunicacaoDireta } from './pages/Comunicacao/ComunicacaoDireta'
import { UseRef } from './pages/HooksBasicos/UseRef'
import { UseEffect } from './pages/HooksBasicos/UseEffect'
import { Tradutor } from './pages/Tradutor/Tradutor'





// const rotas = createBrowserRouter([
//   {path:"/", element: <Home/>},
//   {path:"/home", element: <Home/>},
//   {path:"/contato", element: <Contato/>},
//   {path:"/sobre", element: <Sobre/>},
//   {path:"*", element: <Pagina404/>},
// ])

const rotas = createBrowserRouter(createRoutesFromElements(
  <Route path='/'element={<Layout />} > 
    <Route index element={<Home/>} />
    <Route path='home' element={<Home/>} />
    <Route path='contato' element={<Contato/>} />
    <Route path='sobre' element={<Sobre/>} />
    <Route path='estado1' element={<Estado1/>} />
    <Route path='comEstado' element={<ComEstado/>} />
    <Route path='campoTexto' element={<CampoTexto/>}/>
    <Route path='contadorMM' element={<ContadorMM/>}/>
    <Route path='comunicacaoD' element={<ComunicacaoDireta/>}/>
    <Route path='comunicacaoI' element={<ComunicacaoIndireta/>}/>
    <Route path='useRef' element={<UseRef/>}/>
    <Route path='useEffect' element={<UseEffect/>}/>
    <Route path='*' element={<Pagina404/>} />
    <Route path='tradutor' element={<Tradutor />} />
  </Route>
  
))

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={rotas} />

  </StrictMode>,
)
