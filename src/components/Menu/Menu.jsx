import { IconAddressBook, IconHome, IconInfoCircle, IconMessageDown, IconMessageUp, IconRouteAltLeft, IconSquareRoundedNumber1, IconSquareRoundedNumber2, IconSquareRoundedNumber3, IconSquareRoundedNumber4 } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export function Menu() {
 
  const getEstilo = (props) => {
   
    let estilo =
      "flex gap-3 text-slate-700 px-3 py-4 hover:bg-slate-800 hover:text-slate-200 ";
    let ativo = "border-r-4 border-solid border-slate-800 border-white"

    // let final
    // if (props.isActive){
    //     final = estilo + ativo
    // } else {
    //     final = estilo
    // }
    let final = props.isActive ? estilo + ativo : estilo

    return final;
  };

  return (
    <aside className="bg-black w-60 h-screen">
      <header className="w-40 flex gap-1 justify-center items-center px-1 py-5 border-b-2 border-solid border-slate-200 ">
        <span className="font-bold text-white">React Rotas</span>
        <IconRouteAltLeft className="text-white"/>
      </header>

      <nav className="flex flex-col">
        <NavLink to="home" className={getEstilo}>
          <IconHome />
          Home
        </NavLink>
        <NavLink to="contato" className={getEstilo}>
          <IconAddressBook />
          Contato
        </NavLink>
        <NavLink to="sobre" className={getEstilo}>
          <IconInfoCircle />
          Sobre
        </NavLink>
        <span className="text-white ml-6">Estados</span>
        <NavLink to="estado1" className={getEstilo}>
          <IconSquareRoundedNumber1 />
          Estado 1
        </NavLink>
        <NavLink to="comEstado" className={getEstilo}>
          <IconSquareRoundedNumber2 />
          com Estado
        </NavLink>
        <NavLink to="campoTexto" className={getEstilo}>
          <IconSquareRoundedNumber3 />
          Campo Texto
        </NavLink>
        <NavLink to="contadorMM" className={getEstilo}>
          <IconSquareRoundedNumber4 />
          Contador Mais ou Menos
        </NavLink>
        <span className="text-white ml-6">Comunicação</span>
        <NavLink to="comunicacaoD" className={getEstilo}>
          <IconMessageDown/>
          Comunicação Direta
        </NavLink>
        <NavLink to="comunicacaoI" className={getEstilo}>
          <IconMessageUp/>
          Comunicação Indireta
        </NavLink>
      </nav>

      <footer className="absolute bottom-0 p-2 flex justify-center">
        <span className="text-white text-xs">Desenvolvimento Web 2</span>
      </footer>
    </aside>
  );
}
