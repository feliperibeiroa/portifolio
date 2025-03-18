import Image, { StaticImageData } from "next/image";
import React from "react";

export interface TecnologiaProps {

        nome:string;
        imagem:StaticImageData;
        alt:string;
    }


export const TecnologiaCard = ( tecnologia : TecnologiaProps) => {
  return (
    <div className="tecnologia-card flex justify-center items-center min-w-32 flex-col gap-2 text-white border-[2.5px] select-none border-[#ad31ad] bg-[#361833] hover:bg-[#5c1d5c] rounded-2xl p-4">
      <Image width={40} height={40} src={tecnologia.imagem} className="invert" alt={tecnologia.alt} ></Image>
      <h3>{tecnologia.nome}</h3>
    </div>
  );
}