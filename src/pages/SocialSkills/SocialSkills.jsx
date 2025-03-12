import React from 'react'
import { CardInfo } from '../../Ul/CardInfo/CardInfo'

export function SocialSkills() {
  return (
    <main>
        <h1 className='flex justify-center text-3xl text-blue-600'>Habilidades Sociales</h1>
      <div className='p-40  gap-10 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mb-10'>  
        <CardInfo
          title="Comunicación"
          content="Habilidad para comunicar ideas de manera efectiva."
          images={[]}
          customClass="small-card"
        />
        <CardInfo
          title="Trabajo en equipo"
          content="Capacidad para trabajar en equipo y colaborar con otros."
          images={[]}
          customClass="small-card"
        />
        <CardInfo
          title="Amable"
          content="Habilidad para ser amable y respetuoso con los demás."
          images={[]}
          customClass="small-card"
        />
        <CardInfo
          title="Resolución de conflictos"
          content="Capacidad para resolver conflictos de manera efectiva."
          images={[]}
          customClass="small-card"
        />
      </div>
    </main>
  )
}
