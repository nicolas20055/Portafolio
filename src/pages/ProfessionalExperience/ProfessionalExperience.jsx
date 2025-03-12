import React from 'react'
import { CardInfo } from '../../Ul/CardInfo/CardInfo'

export function ProfessionalExperience() {
  return (
        <main>
             <h1 className='flex justify-center text-3xl text-blue-600'>Experiencia Profesional</h1>
           <div className='p-40 grid justify-items-center transition-all hover:scale-95 '>  
             <CardInfo
            
               content="Actualmente soy estudiante sena por lo cual no tengo experiencia laboral, pero cada dia con proyectos que hago voy aprendiendo  metodologias y tecnologias que me ayudan a mi crecimiento profesional y personal" 
               customClass="medium-card"
             />
         
           </div>
         </main>
  )
}
