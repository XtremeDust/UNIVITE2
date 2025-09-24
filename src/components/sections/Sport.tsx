'use client'
import Sports from "@/components/common/sportsCard";
import {sports} from "@/types/sports"
import { useState } from "react";
import SportInfo from "./sportinfo"
import Navigation from "@/components/common/navigation"
import React from "react";

export function Sport(){

    const [isSport, setSport] = useState<number|null>(null);
    const handleClickSport=(id: number)=>{
        setSport(isSport === id ? null:id);
    };
    const CardA = sports.find(c=> c.id === isSport);

    return(
        <>
            <div className=" text-[20px] md:text-3xl text-black font-medium flex flex-col gap-1 px-5">
                <h2 className="lg:text-4xl font-mono">Normativas, guias y reglamentos</h2>
                <span className="ml-5 text-justify text-[16px] md:text-[18px]">
                    Toda gran experiencia deportiva y cultural se construye sobre bases sólidas. Aquí podrás consultar las normativas, guías y reglamentos que orientan nuestra comunidad, asegurando un entorno justo, organizado y transparente donde cada participación suma al espíritu universitario.
                </span>
            </div>

            <div className="place-items-center place-content-center px-2 py-2 flex flex-wrap gap-2 sm:gap-3 md:gap-5 ">
                {sports.map((card)=>(
                   <React.Fragment key={card.id}>
                        <Sports 
                            key={card.id}
                            card={card}
                            className=" w-sm sm:w-[70%] md:w-[30%] md:h-[12rem] h-[14rem] xl:w-[30%] 2xl:w-2/11"
                            state={isSport === card.id}
                            onClick={()=>handleClickSport(card.id)}
                        />

                        <div className={` transition-all duration-500 place-content-center place-items-center ${CardA && isSport === card.id ? ' max-h-screen opacity-100 block  md:hidden p-4':'max-h-0 opacity-0 md:hidden'}`}>
                            <SportInfo
                                card={card}
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>

            <div className={` transition-all place-content-center place-items-center duration-700 ease-in-out ${CardA ? ' max-h-screen opacity-100 hidden md:block':'hidden md:block max-h-0 opacity-0'}`}>
                { CardA &&(
                    <SportInfo
                    card={CardA}
                    />
                )}
            </div>

            <Navigation/>  
        </>
    );
}export default Sport