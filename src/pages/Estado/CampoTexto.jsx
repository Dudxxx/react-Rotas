import { useState } from "react";
import { Pagina } from "../Home/Pagina";


export function CampoTexto() {
    const[texto, setTexto] = useState("")

    return (
        <Pagina titulo="Campo Texto" subtitulo="Conceito de Texto">
            <div className="flex flex-col gap-4 justify-center">
                <input className="w-40 rounded-md" type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>
                <button className="ml-4 w-32 p-2 bg-purple-400 rounded-md hover:bg-purple-600" onClick={ () => setTexto("teste")}>Limpar</button>
                <div className="bg-zinc-600 w-40 text-center"><span className="text-xl text-white">{texto}</span></div>
            </div>
        </Pagina>
    )
}