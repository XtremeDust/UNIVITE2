'use client'
import Card from "../ui/Card";
import Navigation from "../common/navigation";
import {Button , Modal, HeaderModal, ContainModal} from "@/types/ui_components";
import { use, useState } from "react";
import Image from "next/image";

const filtro =[
    {id:1,title:'Todos'},{id:2,title:'En Equipo'},{id:3,title:'En Duplas'},{id:4,title:'Individual'}
]

const deport = [
    {
        id: 1,
        title: 'Fútbol Sala',
        src: 'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758470460/Lucid_Origin_A_dynamic_wideformat_cinematic_photo_in_the_style_0_qx2poq.jpg',
        descrip: 'Deporte de equipo dinámico y de ritmo rápido, una variante del fútbol que se juega en una cancha dura y más pequeña. Se caracteriza por su énfasis en el control del balón, la técnica y la toma rápida de decisiones, lo que lo convierte en un deporte emocionante y desafiante para jugadores de todos los niveles.',
        content: `
            Equipamiento: Cancha cubierta, balón de fútbol sala, porterías, camisetas de equipo, guantes de portero.
            Niveles de habilidad: Principiante, Intermedio, Avanzado.
            Beneficios: Control mejorado del balón, mayor agilidad, reflejos rápidos, trabajo en equipo, aptitud cardiovascular.
            Reglas clave: Cinco jugadores por equipo, balón más pequeño con menos rebote, sin regla de fuera de juego, sustituciones rodantes, dos tiempos de 20 minutos cada uno.
        `,
        tipo: 'en equipo'
    },
    {
        id: 2,
        title: 'Básquetbol',
        src: 'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758470460/Lucid_Origin_A_dynamic_wideformat_cinematic_photo_in_the_style_0_qx2poq.jpg',
        descrip: 'Un deporte de equipo de ritmo rápido que exige habilidad, agilidad y trabajo en equipo. Los jugadores buscan encestar un balón en una canasta elevada para anotar puntos.',
        content: `
            Equipamiento: Cancha de baloncesto, aro, balón.
            Niveles de habilidad: Principiante, Intermedio, Avanzado.
            Beneficios: Mejora la agilidad, la coordinación y el trabajo en equipo, ideal para el desarrollo de la resistencia.
            Reglas clave: Cinco jugadores por equipo, se juega en cuatro periodos, el balón se avanza botándolo o pasándolo entre compañeros.
        `,
        tipo: 'en equipo'
    },
    {
        id: 3,
        title: 'Voleibol',
        src: 'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758470460/Lucid_Origin_A_dynamic_wideformat_cinematic_photo_in_the_style_0_qx2poq.jpg',
        descrip: 'Deporte de red y balón en el que dos equipos de seis jugadores se enfrentan en un campo dividido por una red. El objetivo es pasar el balón por encima de la red para que caiga en el campo contrario.',
        content: `
            Equipamiento: Red, balón de voleibol, cancha.
            Niveles de habilidad: Principiante, Intermedio, Avanzado.
            Beneficios: Mejora la coordinación, el salto, la agilidad y el trabajo en equipo.
            Reglas clave: Tres toques por equipo para devolver el balón, se juega a sets, no se puede retener el balón.
        `,
        tipo: 'en equipo'
    },
    {
        id: 4,
        title: 'Béisbol 5',
        src: 'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758470460/Lucid_Origin_A_dynamic_wideformat_cinematic_photo_in_the_style_0_qx2poq.jpg',
        descrip: 'Una versión simplificada del béisbol y el sóftbol, ideal para espacios reducidos. Se juega con cinco jugadores por equipo y sin bate ni guantes, haciendo del deporte más accesible.',
        content: `
            Equipamiento: Pelota de goma, base.
            Niveles de habilidad: Principiante, Intermedio, Avanzado.
            Beneficios: Desarrolla la coordinación ojo-mano, la estrategia y la comunicación en equipo.
            Reglas clave: Cinco jugadores por equipo, la pelota se golpea con la mano, el bateador corre a primera base, se juega en cinco entradas.
        `,
        tipo: 'en equipo'
    },
    {
        id: 5,
        title: 'Tenis de Mesa',
        src: 'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758470460/Lucid_Origin_A_dynamic_wideformat_cinematic_photo_in_the_style_0_qx2poq.jpg',
        descrip: 'Deporte de raqueta y pelota en el que dos o cuatro jugadores golpean una pelota ligera de un lado a otro sobre una mesa dividida por una red. Exige rapidez, reflejos y concentración.',
        content: `
            Equipamiento: Paletas, pelota de tenis de mesa, mesa con red.
            Niveles de habilidad: Principiante, Intermedio, Avanzado.
            Beneficios: Mejora la coordinación, los reflejos y la concentración, ideal para el desarrollo de la agilidad mental.
            Reglas clave: Se juega a sets, el servicio se alterna cada dos puntos, el servicio debe rebotar una vez en cada lado de la mesa.
        `,
        tipo: 'individual o en duplas'
    },
    {
        id: 6,
        title: 'Kickingball',
        src: 'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758470460/Lucid_Origin_A_dynamic_wideformat_cinematic_photo_in_the_style_0_qx2poq.jpg',
        descrip: 'Similar al béisbol, pero los jugadores patean una pelota grande en lugar de golpearla con un bate. Es un deporte popular que combina habilidades de fútbol y béisbol.',
        content: `
            Equipamiento: Pelota de goma grande, bases.
            Niveles de habilidad: Principiante, Intermedio, Avanzado.
            Beneficios: Promueve el trabajo en equipo, la coordinación y la aptitud cardiovascular.
            Reglas clave: Similar al béisbol, pero se patea el balón en lugar de batearlo, el corredor debe llegar a la base antes de ser tocado con la pelota.
        `,
        tipo: 'en equipo'
    },
    {
        id: 7,
        title: 'Karate-Do',
        src: 'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758470460/Lucid_Origin_A_dynamic_wideformat_cinematic_photo_in_the_style_0_qx2poq.jpg',
        descrip: 'Un arte marcial japonés que se centra en el desarrollo de la autodefensa y el autocontrol. Combina técnicas de golpes con las manos y los pies, con un fuerte énfasis en la disciplina y el desarrollo del carácter.',
        content: `
            Equipamiento: Uniforme (Karategi), cinturón, protectores (opcional).
            Niveles de habilidad: Principiante, Intermedio, Avanzado.
            Beneficios: Fortalece la disciplina, el autocontrol, la concentración y la forma física general.
            Reglas clave: Se basa en movimientos de kata (forma) y kumite (combate), se sigue un código de honor y respeto.
        `,
        tipo: 'individual'
    },
    {
        id: 8,
        title: 'Softbol',
        src: 'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758470460/Lucid_Origin_A_dynamic_wideformat_cinematic_photo_in_the_style_0_qx2poq.jpg',
        descrip: 'Un deporte de equipo similar al béisbol, pero que se juega con una pelota más grande y un campo más pequeño. Es un deporte de ritmo rápido y exigente que requiere precisión, fuerza y agilidad.',
        content: `
            Equipamiento: Pelota más grande que la de béisbol, guantes, bate, bases.
            Niveles de habilidad: Principiante, Intermedio, Avanzado.
            Beneficios: Promueve el trabajo en equipo, la coordinación y la estrategia.
            Reglas clave: Se lanza la pelota por debajo del brazo, se juega en siete entradas, las bases están más cerca que en el béisbol.
        `,
        tipo: 'en equipo'
    },
    {
        id: 9,
        title: 'Pickleball',
        src: 'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758470460/Lucid_Origin_A_dynamic_wideformat_cinematic_photo_in_the_style_0_qx2poq.jpg',
        descrip: 'Un deporte de raqueta que combina elementos del tenis, bádminton y tenis de mesa. Se juega en una cancha de bádminton con una red modificada y una pelota de plástico perforada, lo que lo hace muy accesible para todas las edades.',
        content: `
            Equipamiento: Paletas de pickleball, pelota de plástico perforada, cancha con red.
            Niveles de habilidad: Principiante, Intermedio, Avanzado.
            Beneficios: Mejora la coordinación, los reflejos y la forma física general, es un deporte de bajo impacto ideal para todas las edades.
            Reglas clave: Se juega en individuales o dobles, el servicio se hace por debajo del brazo, el rebote es obligatorio en el servicio.
        `,
        tipo: 'individual o en duplas'
    },
];
export function offers(){

    const [isModal, setModal] = useState<number|null>(null);

    const handleOpen=(id:number)=>{
        setModal(id);
    }
    const handleCloseModal=()=>{
        setModal(null)
    }

    const selectedModal = deport.find(d => d.id === isModal);

    const [isfiltroB, setfiltroB] = useState<number|null>(1);
    const handlefilt =(id:number)=>{
        setfiltroB(isfiltroB === id ? 1 : id )
    }

    const [isFiltro, setFiltro] = useState('todos');

    const filtrarX = deport.filter((deport=>{
        const lower = deport.tipo.toLocaleLowerCase();

            if(isFiltro==='todos'){
                return true;
            }else if(isFiltro==='en equipo'){
                return lower.includes('en equipo')
            }
            else if(isFiltro==='en duplas'){
                return lower.includes('en duplas')
            }
            else if(isFiltro==='individual'){
                return lower.includes('individual')
            }
             return false;
        })
    )

    return(
        <div className="space-y-3">
            <section className="place-content-center place-items-center">
                <h3 className="title">Ofertas deportivas</h3>
                <p className="text-slate-700">Encuentra la informacion de tu deporte favorito</p>
            </section>
            <section className="place-items-center space-y-3">
                <div className="filtro w-full place-content-center place-items-center p-2">
                    <div className=" bg-slate-300 w-full md:w-xl xl:w-2xl rounded-xl p-1.5 grid grid-flow-col gap-1">
                        {filtro.map((tipo)=>(
                            <Button key={tipo.id} onClick={()=>((handlefilt(tipo.id)),(setFiltro(isfiltroB===tipo.id ?'todos':(tipo.title.toLocaleLowerCase()))))} className={`cursor-pointer px-0.5 md:px-4 py-2 rounded-xl w-full transition-color duration-200 ease-linear place-content-center ${isfiltroB===tipo.id? 'bg-blue-800 text-white':'hover:bg-slate-400 hover:text-slate-200 text-slate-800'}`}>
                                {tipo.title}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="w-[90%] space-y-3">
                    {filtrarX.map((dep)=>(
                        <Card key={dep.id} className="w-full relative bg-amber-800 h-[36rem] 2xl:h-[48rem] rounded-lg overflow-hidden">
                            <>
                            <Image className="bg-amber-950 absolute inset-0" src={dep.src} alt={dep.title} objectFit="cover" layout="fill"/>
                            <div className="absolute inset-0 z-10 bg-black/60"/>
                            <div className="absolute z-20 bottom-10 left-5  md:bottom-10 md:left-10 lg:left-20 lg:bottom-25 space-y-3 text-white">
                                <h4 className="text-[3rem] m-0">{dep.title}</h4>
                                <p className="text-lg line-clamp-1">{dep.descrip}</p>
                                <Button className="px-10 py-4 rounded-2xl hover:opacity-85 hover:scale-103 transition-all duration-300 ease-in-out cursor-pointer bg-unimar"
                                    onClick={()=>(handleOpen(dep.id))}
                                >Ver mas</Button>
                            </div>
                            </>
                        </Card>
                    ))}


                </div>
{/*
<div className="w-[90%] space-y-3">
                    {deport.map((dep)=>(
                        <Card key={dep.id} data-atribute={dep.tipo} className="w-full relative bg-amber-800 h-[36rem] 2xl:h-[48rem] rounded-lg overflow-hidden">
                            <>
                            <Image className="bg-amber-950 absolute inset-0" src={dep.src} alt={dep.title} objectFit="cover" layout="fill"/>
                            <div className="absolute inset-0 z-10 bg-black/60"/>
                            <div className="absolute z-20 bottom-10 left-5  md:bottom-10 md:left-10 lg:left-20 lg:bottom-25 space-y-3 text-white">
                                <h4 className="text-[3rem] m-0">{dep.title}</h4>
                                <p className="text-lg line-clamp-1">{dep.descrip}</p>
                                <Button className="px-10 py-4 rounded-2xl hover:opacity-85 hover:scale-103 transition-all duration-300 ease-in-out cursor-pointer bg-unimar"
                                    onClick={()=>(handleOpen(dep.id))}
                                >Ver mas</Button>
                            </div>
                            </>
                        </Card>
                    ))}


                </div>
*/}
                
            </section>
            <section>

                <Modal state={isModal !==null}>
                    {isModal !==null &&(
                        <>
                        {selectedModal &&(
                            <ContainModal key={selectedModal.id} className="relative grid-flow-row-dense space-y-5 w-sm sm:w-xl max-h-90% min-w-80 min-h-72 overflow-y-auto">
                                <HeaderModal onClose={handleCloseModal} className="flex-none">{selectedModal.title}</HeaderModal>
                                <div className="main-modal flex-grow space-y-3 place-items-center">
                                    {selectedModal.content}
                                </div>
                            </ContainModal>
                        )}
                        
                        </>
                    )}
                </Modal>

                 <Navigation/>
            </section>
        </div>
    );
}export default offers