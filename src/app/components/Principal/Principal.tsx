
import React from 'react'

import { tecnologias } from '@/app/data/tecnologias'; 
import { TecnologiaCard } from '../TecnologiaCard/TecnologiaCard'; 
import { projetos } from '@/app/data/projetos'; 
import { ProjetosCard } from '../ProjetosCard/ProjetosCard'; 


export default function Principal() {
  return (
    <div className='flex flex-col items-center justify-center gap-36'>    
  <div className="flex flex-col items-center justify-center gap-5">
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-bold">Tecnologias</h1>
    </div>
    <div className="Tecnologias grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-9 gap-2">
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

  )
}
