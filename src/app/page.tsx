'use client';
import { useState } from "react";
import MenuHamburguer from "./components/MenuHamburguer/MenuHamburguer";
import Principal from "./components/Principal/Principal";


export default function Home() {

  const [conteudo, setConteudo] = useState('Principal');

  const conteudoHandler = (conteudo: string) => {
    setConteudo(conteudo);
  }

  const changeConteudo = () => {
    switch (conteudo) {
      case 'Principal':
        return <Principal />;
      case 'Contato':
        return <h1>Contato</h1>;
      default:
        return <Principal />;
    }
  }


  return (
    <div className="w-full h-full flex items-center justify-center min-h-screen bg-[#3b0a35] p-5 text-white">
    <div className="min-h-full flex flex-col shadow-2xl w-4/5 items-center p-5 bg-[#3b0a35] justify-center gap-5">
    <div className="w-full flex justify-start">
    <MenuHamburguer setConteudo={conteudoHandler}/>
    </div>
        {changeConteudo()}
    </div>
    </div>
  );
}
