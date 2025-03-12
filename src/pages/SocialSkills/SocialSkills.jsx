import React from 'react'
import { CardInfo } from '../../Ul/CardInfo/CardInfo'

export function SocialSkills() {
  return (
    <main>
        <h1 className='flex justify-center text-3xl text-blue-600'>Habilidades Sociales</h1>
      <div className='p-40  gap-10 grid justify-items-center sm:grid-cols-2 transition-all hover:scale-95 '>  
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
