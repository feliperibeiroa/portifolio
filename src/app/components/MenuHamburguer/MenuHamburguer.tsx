'use client'
import Image from 'next/image';

import React, { useState } from 'react'
import hamburguer from '../../public/hamburguer.svg';

interface MenuHamburguerProps {
    setConteudo: (conteudo: string) => void;
}


export default function MenuHamburguer({ setConteudo }: MenuHamburguerProps) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='hidden'>
            <div onClick={() => setIsOpen(!isOpen)} className='flex flex-col justify-between items-center cursor-pointer'>
                <Image onClick={() => setIsOpen(!isOpen)} src={hamburguer} alt='menu hamburguer' className=' invert' width={40} height={40}></Image>
                <div className={` ${isOpen ? 'backdrop-blur-md' : 'hidden'} transition-transform duration-1000 fixed inset-0 z-50`}>
                    <div className='flex flex-col h-full w-full items-center justify-center gap-5 bg-opacity-50'>
                        <div className='flex text-center select-none flex-col h-3/5 gap-5'>
                            <h1 onClick={()=>setConteudo('Principal')} className='text-2xl font-bold text-white'>Inicio</h1>
                            <h1 onClick={()=>setConteudo('Contato')} className='text-2xl font-bold text-white'>Contato</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}