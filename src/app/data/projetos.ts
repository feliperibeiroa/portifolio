import { ProjetosCardProps } from "../components/ProjetosCard/ProjetosCard";
import projeto1 from "../public/projeto1.png";
import projeto2 from "../public/projeto2.png";




export const projetos : ProjetosCardProps[] = [
    {
        title: "SecureCar",
        description: "Projeto de um Sistema Full Stack para a Porto Seguro em parceria com a minha faculdade, consistindo na criação de de um Chatbot, Back End em Java e Python. Front End em TypeScript e React.",
        image: projeto1,
        link: "https://securecar-challenge.vercel.app/"
    },
    {
        title: "Genlight",
        description: "Projeto de um Sistema Full Stack integrado com modelos de Inteligência Artificial para a predição de quanto um sitio energético, eólico ou solar, geraria no dia de acordo com a localização, em parceria com empresas como SAP, ultragaz e outras empresas junto a minha faculdade. ",
        image: projeto2,
        link: "https://genlight.vercel.app/"
    }
]