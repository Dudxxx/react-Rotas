import { FilhoIndireta } from "./FilhoIndireta"
import { useState } from "react"
export function PaiIndireta() {
    const [nome, setNome] = useState("")
    function alterarNome(novoNome) {
        setNome(novoNome)
        
    }
    return (
        <div className="w-full flex flex-col items-center rounded-md bg-blue-500 text-white">
            <div className="flex gap-3">

            </div>
            <span className="text-xl p-5">{nome}</span>
            <FilhoIndireta alterar = {alterarNome}/>
        </div>
    )
}