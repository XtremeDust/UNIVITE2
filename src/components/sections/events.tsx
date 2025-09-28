'use client'
import { Card } from "@/types/ui_components";
import Image from "next/image";
import Navigation from "@/components/common/navigation"
import {Button, Input} from "@/types/ui_components";
import {eventos} from "@/types/eventos"

export default function Events(){
    return(
        <div className="space-y-3 mb-4">
            <section className="text-events flex flex-col text-center place-items-center mt-6 md:mt-3">
                <h3  className="title text-black">Campeonatos y Eventos Deportivos</h3>
                <p className="w-[90%] text-center text-[18px] text-gray-600">Desde aquí, puedes navegar hacia los detalles de cada gran evento

                </p>

            </section>

             <section className="eventos p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                
                {eventos.slice(0,4).map((card)=>(
                    <Card key={card.id} className="relative bg-white max-w-sm cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="relative h-52 w-full">
                            <div className={`absolute px-2 py-1 rounded-xl top-2 right-2 z-10 
                                ${card.estado==='Activo'?'bg-green-500':(card.estado==='Finalizado'?'bg-red-500':'bg-orange-500')}`}>
                               {card.estado}
                            </div>
                            <Image
                                className="bg-gray-200"
                                src={card.img}
                                alt="img"
                                layout="fill" 
                                objectFit="cover"
                            />
                        </div>
                        <div className="flex flex-col flex-grow text-black px-6 py-4 space-y-1">
                            <h3 className="text-lg font-bold line-clamp-1">{card.title}</h3>
                            <p className=" line-clamp-2 text-gray-600 text-justify text-base">{card.contenido}</p>
                            <p className="text-center text-gray-8">{card.fecha}</p>
                        </div>
                    </Card>
                ))}
                
                
             </section>

            <section className="relative text-events flex flex-col text-center place-items-center mt-6 md:mt-3 space-y-2 h-98 place-content-center">
                

                <div className="z-10">
                    <h3  className="title text-black">¿Listo para la competencia?</h3>
                    <p className="w-[95%] text-center text-[18px] text-gray-600">
                        Se el primero en enterarte de los proximos campeonatos, recibe notificaciones sobre las proximas inscripciones
                    </p>
                </div>

                <div className="z-10 relative bg-white rounded-lg shadow-2xl mt-3 py-6 lg:py-6.5 w-9/10 sm:w-sm md:w-md lg:w-[26rem] ">
                        <Input type="email" placeholder="example.0123@unimar.edu.ve" className="absolute z-10 top-0 inset-0 input text-sm md:text-md lg:text-lg text-black rounded-lg sm:pl-5 pr-22.5 sm:pr-33"/>
                        <Button className="absolute cursor-pointer z-10 right-1 top-1.5 lg:top-1 bg-unimar text-sm md:text-lg lg:text-lg px-3 sm:px-6 py-2 rounded-lg hover:opacity-95 hover:scale-102 transition-all duration-300">
                           Notificar
                        </Button>
                </div>
                
                
            </section>   
             <Navigation/>
        </div>
    );
}

{/*
    para navegar dentro de eventos
                    <div className={`flex flex-col md:flex-row gap-1 bg-gray-300 p-2 rounded-full transition-all duration-300 w-full sm:w-[75%] md:w-auto`}>
                        <Button className={`flex gap-2 place-items-center md:place-content-center transition-all duration-300 ease-in-out text-[17px] btn bg-transparent text-gray-500`}>
                         todos
                        </Button>
                        <Button className={`flex gap-2 place-items-center md:place-content-center transition-all duration-300 ease-in-out text-[17px] btn bg-transparent text-gray-500`}>
                         futbol
                        </Button>
                        <Button className={`flex gap-2 place-items-center md:place-content-center transition-all duration-300 ease-in-out text-[17px] btn bg-transparent text-gray-500`}>
                         Basquet
                        </Button>
                        <Button className={`flex gap-2 place-items-center md:place-content-center transition-all duration-300 ease-in-out text-[17px] btn bg-transparent text-gray-500`}>
                         Voleibal
                        </Button>
                        <Button className={`flex gap-2 place-items-center md:place-content-center transition-all duration-300 ease-in-out text-[17px] btn bg-transparent text-gray-500`}>
                         Tenis de Mesa
                        </Button>
                </div>

    */}