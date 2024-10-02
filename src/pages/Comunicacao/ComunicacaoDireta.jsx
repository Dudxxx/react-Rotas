import { FilhoDireta } from "../../components/Comunicacao/direta/FilhoDireta";
import { PaiDireta } from "../../components/Comunicacao/direta/PaiDireta";
import { Pagina } from "../Home/Pagina";


export function ComunicacaoDireta() {

    return (
        <Pagina titulo="Comunicação Direta" subtitulo="Conceito de Comunicação com React">
            <PaiDireta>
            <FilhoDireta></FilhoDireta>
            </PaiDireta>
            
        </Pagina>
    )
}