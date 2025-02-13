'use client'
import Link from 'next/link';
import React, { useState } from 'react'

export default function MenuHamburguer() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={()=>setIsOpen(!isOpen)} className='h-10 w-10 bg-red-800 flex flex-col justify-between items-center cursor-pointer'>
            <div className={` ${isOpen ? 'backdrop-blur-sm':'hidden'} transition-transform duration-1000 absolute z-50 w-full h-full min-h-screen`}> 
                <div className='flex flex-col h-full w-full items-center justify-center gap-5'>
                    <div className='flex text-center flex-col h-3/5 gap-5'>
                        <Link className='text-2xl font-bold ' href={"/"}>Inicio</Link>
                        <Link className='text-2xl font-bold ' href={"/contato"}>Contato</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
