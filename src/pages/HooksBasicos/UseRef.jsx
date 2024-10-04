import { useState } from "react";
import { Pagina } from "../Home/Pagina";
import { useRef } from "react";

export function UseRef() {
    const [estado, setEstado] = useState(0)
    const referencia = useRef(0)

    function incrementaEstado() {
        setEstado(estado + 1)
    }

    function incrementaReferencia() {
        referencia.current += 1
    }
    return (
        <Pagina titulo="Use Ref" subtitulo="Conceito de Use Ref com React">
            <div className="flex flex-col">
                {`Ref:${referencia.current} | State: ${estado}`}
                <div className="">
                <button className="bg-purple-400 p-4 w-24 m-1"
                onClick={incrementaReferencia}>
                    Ref+
                </button>
                <button className="bg-red-400 p-4 w-24"
                onClick={incrementaEstado}>
                    Estado+
                </button>
                </div>
            </div>
            
        </Pagina>
    )
}