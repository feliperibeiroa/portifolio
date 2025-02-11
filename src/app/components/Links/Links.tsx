import Image, { StaticImageData } from 'next/image'
import React from 'react'


type LinksProps = {
    nome: string;
    imagem: StaticImageData;
    link: string;
    }

export default function Links({nome,imagem,link}: LinksProps) {
  return (
    <a href={link} className={`flex rounded-full flex-row items-center p-3 border-2 justify-center gap-5 ${nome == 'Linkedin' ? 'border-[#0077B5] bg-[#0077B5] hover:bg-blue-700 hover:border-blue-700' : 'border-slate-900 bg-slate-900 hover:bg-slate-950 hover:border-slate-950'}`}>
        <Image src={imagem} alt='imagem rede social' className={`${nome == 'Linkedin'?'':'invert'}`} width={30} height={30}></Image>
        <h1 className='text-xl'>{nome}</h1>
    </a>
  )
}
