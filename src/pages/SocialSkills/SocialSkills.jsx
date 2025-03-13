import React from 'react'
import { CardInfo } from '../../Ul/CardInfo/CardInfo'

export function SocialSkills() {
  return (
    <main>
        <h1 className=' truncate flex justify-center items-center text-4xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-red-500 bg-[length:200%_200%] animate-textGradient bg-clip-text text-transparent'>Habilidades Sociales</h1>
      <div className='p-40  gap-10 grid justify-items-center sm:grid-cols-2 transition-all hover:scale-105 '>  
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
