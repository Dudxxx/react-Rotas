import { useState } from "react";
import { Pagina } from "../Home/Pagina";
import { IconPencilSearch } from "@tabler/icons-react";


export function ContadorMM() {
    const [numero, setNumero] = useState(0)
    const [step, setStep] = useState(0)
    
    function aumentar() {
        setNumero(numero + 1 + step -1)
        console.log(numero)
    }
    function diminuir() {
        setNumero(numero - 1 - step + 1)
        console.log(numero)
    }

    function aumentarstep() {
        setStep(step + 1)
        console.log(numero)
    }
    function diminuirstep() {
        setStep(step - 1)
        console.log(numero)
    }

    return (
        <Pagina titulo="Com Estado" subtitulo="Conceito de Estado no React">
            <div className="flex flex-col">
                <div className="flex flex-wrap">
                    <p className="ml-14">Contador</p><p className="w-screen"></p>
                    <button className="w-16 p-2 bg-purple-400 rounded-md hover:bg-purple-600" onClick={diminuir}>-</button>
                    <div className="ml-5 mr-5 mt-2">{numero}</div>
                    <button className="w-16 p-2 bg-purple-400 rounded-md hover:bg-purple-600" onClick={aumentar}>+</button>
                </div>

                <div className="flex mt-5 ml-7 flex-wrap">
                    <p className="ml-12">step</p><p className="w-screen"></p>
                    <button className="w-10 p-2 bg-purple-400 rounded-full hover:bg-purple-600" onClick={diminuirstep}>-</button>
                    <div className="ml-5 mr-5 mt-2">{step}</div>
                    <button className="w-10 p-2 bg-purple-400 rounded-full hover:bg-purple-600" onClick={aumentarstep}>+</button>
                </div>
            </div>
        </Pagina>
    )
}