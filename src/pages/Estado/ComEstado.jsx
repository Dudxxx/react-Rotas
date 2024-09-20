import { useState } from "react";
import { Pagina } from "../Home/Pagina";


export function ComEstado() {
    const [numero, setNumero] = useState(0)
    
    function incrementar() {
        setNumero(numero + 1)
        console.log(numero)
    }

    return (
        <Pagina titulo="Com Estado" subtitulo="Conceito de Estado no React">
            <div className="flex flex-col">
                <div>{numero}</div>
                <button className="w-40 p-2 bg-purple-400 rounded-md hover:bg-purple-600" onClick={incrementar}>incrementar</button>
            </div>
        </Pagina>
    )
}