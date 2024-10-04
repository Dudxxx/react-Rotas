import { useState } from "react"
export function FilhoIndireta(props) {
    const [nome, setNome] = useState()
    return (
        <div className="w-full flex flex-col items-center rounded-md bg-blue-500 text-white">
            <div className="flex gap-3">
            <button className="botao"
            onClick={()=> props.alterar("João")}>
                
            </button>
            <button className="botao"
            onClick={()=> props.alterar("Maria")}>
                
            </button>
            <button className="botao"
            onClick={()=> props.alterar("José")}>
                
            </button>
            </div>
            <span className="text-xl p-5">{nome}</span>
        </div>
    )
}