
import React from 'react'

import { tecnologias } from '@/data/tecnologias';
import { TecnologiaCard } from '../TecnologiaCard/TecnologiaCard';
import { projetos } from '@/data/projetos';
import { ProjetosCard } from '../ProjetosCard/ProjetosCard';


export default function Principal() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-36">
      {/* Tecnologias */}
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold">Tecnologias</h1>
        <div className="Tecnologias grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
          {tecnologias.map((tecnologia) => (
            <TecnologiaCard key={tecnologia.nome} nome={tecnologia.nome} imagem={tecnologia.imagem} alt={tecnologia.alt} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <h1 className="text-3xl font-bold">Projetos</h1>
        <div className="flex flex-row max-cstm:flex-col gap-4 justify-center">
          {projetos.map((projeto) => (
              <ProjetosCard
                key={projeto.title}
                title={projeto.title}
                description={projeto.description}
                image={projeto.image}
                link={projeto.link}
              />
          ))}
        </div>
      </div>
    </div>

  )
}
