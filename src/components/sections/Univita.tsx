'use client'
import React from 'react'
import Image from "next/image";
import {Card} from '@/types/ui_components'
import {univita} from '@/types/univita'
import {ActiveLink} from "@/components/ui/Router";

export default function Univita() {
  return (
    <div className='place-content-center w-full h-full place-items-center justify-evenly bg-[#000EA1] text-white lg:space-y-10'>
        <section className='Univita flex flex-col xl:flex-row place-items-center p-2 gap-5 mt-5'>
          
          <Image
            className='bg-transparent w-sm sm:w-[26rem] h-[22rem] rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500'
            src={"https://res.cloudinary.com/dnfvfft3w/image/upload/v1758471006/logo_ev8dso.png"}
            alt='logo'
            width={700}
            height={700}
          />

          <div className='texto w-sm sm:w-[32rem] md:w-[48rem] xl:w-[40rem] 2xl:w-[48rem] place-content-center text-justify'>
            <h3 className='text-[3rem]'>Univita</h3>
             <p className='text-[18px] ml-3 p-1'>                
                Bienvenido a Univita, el nuevo capítulo de la Universidad de Margarita se escribe a través de este módulo: un bastión de eficiencia forjado para la excelencia. Es la plataforma que consolida el espíritu de comunidad, la energía del deporte y la riqueza de la cultura bajo una misma arquitectura digital, garantizando que cada registro, evento y logro se convierta en parte de la historia de nuestra casa de estudios.
              <span className='text-[18px]'> En Univita no solo te inscribes, ¡vives la experiencia! </span>
              </p> 
          </div>
        </section>
        <section className=' flex flex-wrap xl:gap-10 justify-center place-items-center w-full h-full mb-10'>
          {univita.map((card)=>(
            <Card key={card.id} className='flex flex-row rounded-none group border-dashed not-last:border-b-2 first:border-b-2 not-last:border-0 md:not-first:odd:border-b-0 md:odd:border-r-2 xl:not-last:border-0 xl:not-last:border-r-2 2xl:w-[21rem] card-small'>
                <ActiveLink href={card.url} className='w-full h-full space-y-3 place-items-center place-content-center p-6'>
                      <Image
                          className="group-hover:scale-115 transition-all duration-300 ease-in-out"
                          src={card.img}
                          width={105}
                          height={105}
                          alt={card.title}
                          /> 
                      <h3 className='text-[18px]'>{card.title}</h3>
                </ActiveLink>
              </Card>
          ))}
        </section>
    </div>
  )
}
