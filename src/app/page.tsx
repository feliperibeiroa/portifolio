'use client';
import { useState } from "react";
import MenuHamburguer from "./components/MenuHamburguer/MenuHamburguer";
import Principal from "./components/Principal/Principal";
import Image from "next/image";
import imagem from "../../public/eu.jpeg";
import Links from "./components/Links/Links"; 
import linkedin from '../../public/linkedin.png'
import github from '../../public/github.png'


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
    <div className="w-full h-full flex flex-col items-center min-h-screen bg-[#291326] p-5 text-white">
    <div className="min-h-full flex flex-col shadow-2xl w-4/5 items-center p-5 bg-[#361833] justify-center gap-36">
      <div className="w-full flex justify-start">
      <MenuHamburguer setConteudo={conteudoHandler}/>
      </div>
          <div className="flex flex-row justify-around h-[30rem] mt-10 gap-5">
          <div className="flex flex-col w-1/3 items-center gap-5">
              <h1 className="text-4xl font-bold text-left">
                  Felipe Ribeiro Tardochi Da Silva
              </h1>
          <div className="flex flex-col text-left items-center ">
              <p>
              Olá, meu nome é Felipe Ribeiro Tardochi da Silva, sou desenvolvedor Fullstack.
              </p>
              <p>
              Atualmente sou estudante de Análise e desenvolvimento de Sistemas na FIAP, no terceiro semestre, e estou em busca de uma oportunidade de estágio.
              </p>
              <p>
              Sou uma pessoa muito dedicada e esforçada, que busca sempre aprender mais e mais, para poder sempre agregar ao meu conhecimento.
              </p>
          </div>
      </div>
      <div className="flex flex-col gap-5 ">
        <Image src={imagem} height={300} width={300} className=" rounded-full" alt="Imagem de perfil Felipe"></Image>
        <div className="flex items-center justify-center flex-row gap-5">
          <Links nome="Linkedin" imagem={linkedin} link="https://www.linkedin.com/in/felipe-ribeiro-tardochi-da-silva-112b712b5/"></Links>
          <Links nome="Github" imagem={github} link="https://github.com/cotete"></Links>
        </div>
      </div>
      </div>
        {changeConteudo()}
        </div>
    </div>

  );
}
