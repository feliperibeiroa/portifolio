import React, {useEffect, useState } from 'react'

import { tecnologias } from '@/data/tecnologias'; 
import { TecnologiaCard, TecnologiaProps } from '../TecnologiaCard/TecnologiaCard'; 

export default function CarrouselTecnologias() {
    const [index, setIndex] = useState(0);
    const [listaTecnologias, setListaTecnologias] = useState<TecnologiaProps[]>();



    const nextTech = () => {
        setIndex((prevIndex) => (prevIndex + 1) % tecnologias.length);
    }

    const prevTech = () => {
        setIndex((prevIndex) => (prevIndex - 1 + tecnologias.length) % tecnologias.length);
    }

    useEffect(() => {
        const listaProv : TecnologiaProps[]=[];
        for(let i = index; i < index +7; i++){
            if(i < 0){
                listaProv.push(tecnologias[tecnologias.length + i]);
            }else if( i >= tecnologias.length){
                listaProv.push(tecnologias[i - tecnologias.length]);
            }else{
                listaProv.push(tecnologias[i]);
            }
        }
        setListaTecnologias(listaProv);
        console.log(listaProv)
    }, [index])

  return (
    <div className='flex flex-row items-center gap-2'>
        <div>
        <h1 onClick={()=>nextTech()}>{"<------"}</h1>
        </div>
        <div className='flex flex-row gap-2'>
            {listaTecnologias?.map((tecnologia) => (<TecnologiaCard key={tecnologia.nome} nome={tecnologia.nome} imagem={tecnologia.imagem} alt={tecnologia.alt}></TecnologiaCard>))}
        </div>
        <div>
            <h1 onClick={()=>prevTech()}>{"------>"}</h1>
        </div>
    </div>
  )
}
