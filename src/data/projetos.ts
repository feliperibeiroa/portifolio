import { ProjetosCardProps } from "../components/ProjetosCard/ProjetosCard";
import projeto1 from "../../public/projeto1.png";
import projeto2 from "../../public/projeto2.png";
import wip from "../../public/wip.jpg";
import nimbusImage from "../../public/nimbusImage.png";




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
    },
    {
        title:"GpsMottu",
        description:"Nossa solução utiliza câmeras com algoritmos de visão computacional para identificar automaticamente as motos e associá-las a tags UWB, obtendo localização em tempo real com precisão de 20–30 cm. Um servidor atualiza continuamente a posição em um mapa interativo, oferecendo agilidade, controle operacional e escalabilidade para diversas unidades da empresa.",
        image: wip,
        link: "https://github.com/GPMoto"
    },
    {
        title:"Nimbus",
        description: "Projeto de uma API para previsão de desastres naturais, desenvolvida em Java com Spring Boot. Coleta e processa dados de previsão do tempo e localização, usando modelos avançados de inteligência artificial para fornecer alertas precisos e em tempo real, auxiliando na prevenção e segurança contra eventos climáticos extremos.",
        image: nimbusImage,
        link: "https://github.com/GSNimbus"
    }
]