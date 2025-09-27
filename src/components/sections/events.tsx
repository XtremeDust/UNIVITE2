'use client'
import { Card } from "@/types/ui_components";
import Image from "next/image";
import Navigation from "@/components/common/navigation"
import {Button} from "@/types/ui_components";

export default function Events(){
    return(
        <div className="space-y-2 mb-4">
            <section className="text-events flex flex-col text-center place-items-center mt-6 md:mt-3">
                <h3  className="title text-black">Campeonatos y Eventos Deportivos</h3>
                <p className="w-[90%] text-center text-[18px] text-gray-600">Desde aquí, puedes navegar hacia los detalles de cada gran evento

                </p>

            </section>

             <section className="eventos  p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                <Card className="relative bg-amber-200 max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <div className="relative h-52 w-full">
                        <div className="absolute bg-neutral-500 px-2 py-1 rounded-xl top-2 right-2 z-10">
                            Estado
                        </div>
                        <Image
                            className="bg-amber-950"
                            src={'/logounimar-25-aniversario.png'}
                            alt="img"
                            layout="fill" 
                            objectFit="cover"
                        />
                    </div>
                    <div className="flex flex-col flex-grow text-black px-6 py-4 space-y-1">
                        <h3 className="text-lg font-bold">Torneo</h3>
                        <p className=" line-clamp-2 text-gray-800 text-justify text-base">Los mejores equipos de la universidad compiten por la gloria en la cancha</p>
                        <p className="text-center text-gray-8">inicia fecha/ inscripciones abiertas</p>
                    </div>
                </Card>
                <Card className="relative bg-amber-200 max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <div className="relative h-52 w-full">
                        <div className="absolute bg-neutral-500 px-2 py-1 rounded-xl top-2 right-2 z-10">
                            Estado
                        </div>
                        <Image
                            className="bg-amber-950"
                            src={'/logounimar-25-aniversario.png'}
                            alt="img"
                            layout="fill" 
                            objectFit="cover"
                        />
                    </div>
                    <div className="flex flex-col flex-grow text-black px-6 py-4 space-y-1">
                        <h3 className="text-lg font-bold">Torneo</h3>
                        <p className=" line-clamp-2 text-gray-800 text-justify text-base">Los mejores equipos de la universidad compiten por la gloria en la cancha</p>
                        <p className="text-center text-gray-8">inicia fecha/ inscripciones abiertas</p>
                    </div>
                </Card>
                <Card className="relative bg-amber-200 max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <div className="relative h-52 w-full">
                        <div className="absolute bg-neutral-500 px-2 py-1 rounded-xl top-2 right-2 z-10">
                            Estado
                        </div>
                        <Image
                            className="bg-amber-950"
                            src={'/logounimar-25-aniversario.png'}
                            alt="img"
                            layout="fill" 
                            objectFit="cover"
                        />
                    </div>
                    <div className="flex flex-col flex-grow text-black px-6 py-4 space-y-1">
                        <h3 className="text-lg font-bold">Torneo</h3>
                        <p className=" line-clamp-2 text-gray-800 text-justify text-base">Los mejores equipos de la universidad compiten por la gloria en la cancha</p>
                        <p className="text-center text-gray-8">inicia fecha/ inscripciones abiertas</p>
                    </div>
                </Card>
                <Card className="relative bg-amber-200 max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <div className="relative h-52 w-full">
                        <div className="absolute bg-neutral-500 px-2 py-1 rounded-xl top-2 right-2 z-10">
                            Estado
                        </div>
                        <Image
                            className="bg-amber-950"
                            src={'/logounimar-25-aniversario.png'}
                            alt="img"
                            layout="fill" 
                            objectFit="cover"
                        />
                    </div>
                    <div className="flex flex-col flex-grow text-black px-6 py-4 space-y-1">
                        <h3 className="text-lg font-bold">Torneo</h3>
                        <p className=" line-clamp-2 text-gray-800 text-justify text-base">Los mejores equipos de la universidad compiten por la gloria en la cancha</p>
                        <p className="text-center text-gray-8">inicia fecha/ inscripciones abiertas</p>
                    </div>
                </Card>
                <Card className="relative bg-amber-200 max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <div className="relative h-52 w-full">
                        <div className="absolute bg-neutral-500 px-2 py-1 rounded-xl top-2 right-2 z-10">
                            Estado
                        </div>
                        <Image
                            className="bg-amber-950"
                            src={'/logounimar-25-aniversario.png'}
                            alt="img"
                            layout="fill" 
                            objectFit="cover"
                        />
                    </div>
                    <div className="flex flex-col flex-grow text-black px-6 py-4 space-y-1">
                        <h3 className="text-lg font-bold">Torneo</h3>
                        <p className=" line-clamp-2 text-gray-800 text-justify text-base">Los mejores equipos de la universidad compiten por la gloria en la cancha</p>
                        <p className="text-center text-gray-8">inicia fecha/ inscripciones abiertas</p>
                    </div>
                </Card>
                
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