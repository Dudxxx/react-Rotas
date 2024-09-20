export function Pagina(props) {
    return (
        <div className="w-screen h-full bg-slate-200">
            <header className="p-3 bg-zinc-400">
                <h1 className="text-xl font-black">{props.titulo}</h1>
                <h2 className="text-sm font-zinc">{props.subtitulo}</h2>
            </header>
            <main className="flex flex-col p-3 h-screen bg-zinc-700">
                {props.children}
            </main>
        </div>
    )
}