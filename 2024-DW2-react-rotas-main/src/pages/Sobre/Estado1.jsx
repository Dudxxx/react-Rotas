import { useState } from "react";
import { Pagina } from "../Home/Pagina";


export function Estado1() {
    const [num, setNum] = useState (0)

    const  [texto, setTexto] = useState("olá, seja bem vindo")
    console.log(num)

    function incrementar() {
        setNum(num + 1)
    }
    
    return (
        <Pagina titulo="Estado 1" subtitulo="Conceito Estado 1">
            <div>
                <div>{num}</div>
                <button onClick={incrementar} className="bg-zinc-600 p-4 rounded-md w-32" type="button">incrementar</button>
            </div>
            
            <div>
                <br />
                <div><input type="text" className="bg-zinc-400" onChange={(e) => setTexto(e.target.value)}/>
                <button className="mx-2 h-6 bg-zinc-600 rounded-md w-32" onClick={() => setTexto("")}>incrementar</button></div><br />
                <span>{texto}</span>
            </div>
        </Pagina>
    )
}