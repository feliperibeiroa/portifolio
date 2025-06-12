import Image, { StaticImageData } from "next/image";


export type ProjetosCardProps = {
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
};

export const ProjetosCard = (projeto: ProjetosCardProps) => {
    return (
        <div className="hover:scale-105 w-80 max-sm:w-60 min-h-[36rem] transition-transform duration-300 card border-[#ad31ad] border-2 bg-[#361833] p-5 rounded-2xl flex flex-col gap-5 shadow-2xl text-white">
            <h2 className="text-center text-2xl font-semibold">{projeto.title}</h2>
            <Image src={projeto.image} width={450} height={400} alt={projeto.title} />
            <p className="w-auto">{projeto.description}</p>
            <div className="flex justify-center mt-auto">
                <a className="border-[#ad31ad] bg-[#361833] hover:bg-[#5c1d5c] border-2  px-10 py-2 rounded-xl" href={projeto.link} target="_blank" rel="noreferrer">
                    Acessar
                </a>
            </div>
        </div>
    );
};