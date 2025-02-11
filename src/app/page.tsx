import Image from "next/image";
import imagem from "./public/download.jpg";
import Links from "./components/Links/Links";
import linkedin from './public/linkedin.png'
import github from './public/github.png'
import { tecnologias } from "./data/tecnologias";
import { TecnologiaCard } from "./components/TecnologiaCard/TecnologiaCard";
import { projetos } from "./data/projetos";
import { ProjetosCard } from "./components/ProjetosCard/ProjetosCard";


export default function Home() {

  
  return (
    <div className="w-full h-full flex items-center justify-center min-h-screen bg-[#3b0a35] p-5 text-white">
    <div className="min-h-full flex flex-col shadow-2xl w-4/5 items-center bg-[#3b0a35] justify-center gap-5">
        <div className="flex flex-row justify-around mt-10 gap-5">
          <div className="flex flex-col w-1/3 text-center items-center justify-center gap-5">
            <h1 className="text-4xl font-bold text-center">
              Felipe Ribeiro Tardochi Da Silva
            </h1>
            <div className="flex flex-col items-center justify-center">
              <p>
                Olá, meu nome é Felipe Ribeiro Tardochi da Silva, sou desenvolvedor Fullstack.
              </p>
              <p>
                Atualmente sou estudante de Análise e desenvolvimento de Sistemas na FIAP, indo para o quarto semestre, e estou em busca de uma oportunidade de estágio.
              </p>
              <p>
                Sou uma pessoa muito dedicada e esforçada, que busca sempre aprender mais e mais, para poder sempre agregar ao meu conhecimento.
              </p>
            </div>

          </div>
          <div className="flex flex-col items-center justify-center gap-5 ">
            <Image src={imagem} height={300} width={300} className=" rounded-full" alt="Imagem de perfil Felipe"></Image>
            <div className="flex items-center justify-center flex-row gap-5">
              <Links nome="Linkedin" imagem={linkedin} link="https://www.linkedin.com/in/felipe-ribeiro-tardochi-da-silva-112b712b5/"></Links>
              <Links nome="Github" imagem={github} link="https://github.com/cotete"></Links>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl font-bold">Tecnologias</h1>
          </div>
          <div className="Tecnologias flex flex-row gap-2">
            {tecnologias.map((tecnologia) => (<TecnologiaCard key={tecnologia.nome} nome={tecnologia.nome} imagem={tecnologia.imagem} alt={tecnologia.alt}></TecnologiaCard>))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <div>
          <h1 className="text-3xl font-bold">Projetos</h1>
          </div>
          <div className="Projetos flex flex-row justify-around gap-5">
            {projetos.map((projeto) => (<ProjetosCard key={projeto.title} title={projeto.title} description={projeto.description} image={projeto.image} link={projeto.link}></ProjetosCard>))}
          </div>
        </div>

    </div>
    </div>
  );
}
