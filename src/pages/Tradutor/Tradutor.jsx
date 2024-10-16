import styles from './Tradutor.module.css';
import { Pagina } from "../Home/Pagina";
import { useState, useRef } from "react";

export function Tradutor() {
    const referencia = useRef(0);
    const [charCount, setCharCount] = useState(0);
    const [translatedText, setTranslatedText] = useState('');
    const [inputText, setInputText] = useState('');

    function atualizaContador(event) {
        const texto = event.target.value;
        referencia.current = texto.length;
        setCharCount(texto.length);
        setInputText(texto);
    }

    async function fetchTranslation() {
        const encodedText = encodeURIComponent(inputText);
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodedText}&langpair=pt|en`);
        const data = await response.json();
        setTranslatedText(data.responseData.translatedText);
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
                        <button className={styles.button} onClick={fetchTranslation}>Traduzir</button>
                        <p className={styles.contador}>{charCount}/250</p>
                    </div>
                    <div className={styles.inputGroup}>
                        <h2>Inglês</h2>
                        <textarea
                            className={styles.textarea}
                            placeholder="Tradução"
                            value={translatedText}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </Pagina>
    );
}
