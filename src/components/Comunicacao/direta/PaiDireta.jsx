import { useState } from "react"
import { FilhoDireta } from "./FilhoDireta"

export function PaiDireta() {
    const [nome, setNome] = useState("")

    return (
        <div className="w-full flex flex-col items-center rounded-md bg-blue-500 text-white">
            <div className="flex gap-4">
            <button className="botao" onClick={()=> setNome("Name1")}>
                Name1
            </button>
            <button className="botao" onClick={()=> setNome("Name2")}>
                Name2
            </button>
            <button className="botao" onClick={()=> setNome("Name3")}>
                Name3
            </button>
            </div>
            <FilhoDireta text={nome}/>
            
        </div>

    )
}