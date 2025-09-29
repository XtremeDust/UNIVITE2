'use client'
import { motion, scale } from "motion/react";
import { Card } from "@/types/ui_components";
import Image from "next/image";
import Navigation from "@/components/common/navigation"
import {Button, Input} from "@/types/ui_components";
import {eventos} from "@/types/eventos"
import { useState } from "react";


export default function Events(){

 const [isHovered, setIsHovered] = useState(false);
     const iconMove = {
        initial: { rotate: 0},
        hover: { 
            rotate: [0,45,-45,0], scale:[0.8,0.9,0.8]
        },
    };
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
                                className="absolute bg-gray-200"
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

            <section className="notificar p-2">
                <motion.div className="relative text-events flex flex-col text-center place-items-center mt-6 md:mt-3 space-y-4 h-94  place-content-center rounded-xl"
                    animate={{
                        backgroundColor:['#0d4564','#0d4e90','#0d4564'],
                    }}
                    transition={{
                            duration:3,
                            ease:"linear",
                            repeat:Infinity
                    }}
                >

                    <div className="z-10 place-items-center space-y-1">
                        <h3  className="title ">¡No te quedes en la banca!</h3>
                        <p className="w-[95%] xl:w-[80%] text-center text-[18px] ">
                        El próximo evento está a la vuelta de la esquina. Se el primero en enterarte de las inscripciones, noticias exclusivas y los detalles de los eventos
                        </p>
                    </div>

                    <div className="z-10 relative bg-white rounded-lg shadow-2xl mt-3 py-6 lg:py-6.5 w-9/10 sm:w-sm md:w-md lg:w-[26rem] ">
                            <Input type="email" placeholder="example.0123@unimar.edu.ve" className="absolute z-10 top-0 inset-0 text-sm md:text-md lg:text-lg text-black rounded-lg sm:pl-5 pr-22.5 sm:pr-33 focus:ring-[1px] ring ring-univita focus:ring-gray-700 focus:outline-none"/>
                            <Button className="absolute contain flex gap-2 cursor-pointer font-semibold z-10 right-1 top-[3px]  bg-unimar text-sm md:text-[15px] px-1 sm:px-2.5 py-2 lg:py-2.5 rounded-lg hover:opacity-95 transition-all duration-300 place-items-center"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <motion.div 
                                    variants={iconMove}
                                    animate={isHovered===true ? "hover" : "initial"}
                                    transition={isHovered?{
                                        duration:1,
                                        ease:"linear",
                                        repeat:Infinity
                                    }:{}}
                                >
                                    <Image
                                        src={'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759070639/el-sonar_cgjz7t.png'}
                                        alt="notificacion"
                                        height={10}
                                        width={26}
                                        objectFit="contain"
                                    />
                                </motion.div >
                                Notificarme
                            </Button>
                    </div>
                    
                </motion.div>   
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