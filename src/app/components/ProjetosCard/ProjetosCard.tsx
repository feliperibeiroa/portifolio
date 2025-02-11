import Image, { StaticImageData } from "next/image";


export type ProjetosCardProps = {
        title: string;
        description: string;
        image: StaticImageData;
        link: string; 
    };

export const ProjetosCard = ( projeto  : ProjetosCardProps) => {
    return (
        <div className="hover:scale-105 transition-transform duration-300 card w-80 bg-[#3f143f] p-5 rounded-2xl flex flex-col gap-5 shadow-2xl text-white">
        <h2 className="text-center text-2xl font-semibold">{projeto.title}</h2>
        <Image src={projeto.image} width={450} height={400} alt={projeto.title} />
        <p className="w-auto">{projeto.description}</p>
        <div className="flex justify-center">
        <a className="bg-[#631f63] hover:bg-[#5c1d5c] border-2 border-[#8b318b] px-10 py-2 rounded-xl" href={projeto.link} target="_blank" rel="noreferrer">
            Acessar
        </a>
        </div>
        </div>
    );
    };