import { useEffect, useState } from "react";
import { Pagina } from "../Home/Pagina";

export function UseEffect() {
    const [url, setUrl] = useState("");

    useEffect(() => {
        fetchImage();
    }, []);

    const fetchImage = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resposta => resposta.json())
            .then(objeto => {
                setUrl(objeto.message);
            })
            .catch(error => console.error("Erro ao buscar a imagem:", error));
    };

    return (
        <Pagina titulo="Use Effect" subtitulo="Conceito de Use Effect com React">
            <div className="items-center flex flex-col">
                <img className="max-w-96" src={url} alt="Cachorro" />
                <button className="bg-purple-400 rounded-md mt-3" onClick={fetchImage}>Trocar Imagem</button>
            </div>
        </Pagina>
    );
}