import styles from './Tradutor.module.css';
import { Pagina } from "../Home/Pagina";
import { useState } from "react";
import { useRef} from "react";

export function Tradutor() {
    const referencia = useRef(0);
    const [charCount, setCharCount] = useState(0);

    function atualizaContador(event) {
        const texto = event.target.value;
        referencia.current = texto.length;
        setCharCount(texto.length);
    }

    return (
        <Pagina titulo="Use Effect" subtitulo="Conceito de Use Effect com React">
            <div className={styles.container}>
                <h1>Tradutor</h1>
                <div className={styles.translatorBox}>
                    <div className={styles.inputGroup}>
                        <h2>Português</h2>
                        <textarea
                            className={styles.textarea}
                            placeholder="Digite aqui"
                            onChange={atualizaContador}
                            maxLength={250}
                        />
                        <button className={styles.button}>Traduzir</button>
                        <p className={styles.contador} > {charCount}/250</p>
                    </div>
                    <div className={styles.inputGroup}>
                        <h2>Inglês</h2>
                        <textarea
                            className={styles.textarea}
                            placeholder="Tradução"
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </Pagina>
    );
}
