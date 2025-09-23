'use client'
import Sports from "@/components/common/sportsCard";
import {sports} from "@/types/sports"
import { useState } from "react";
import SportInfo from "./sportinfo"
import Navigation from "@/components/common/navigation"

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
                    Mantente informado sobre los partidos y eventos deportivos incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </span>
            </div>

            <div className="place-items-center place-content-center px-2 py-2 flex flex-wrap gap-5 mb-3 ">
                {sports.map((card)=>(
                    <Sports 
                        key={card.id}
                        card={card}
                        className="xl:w-[30%] 2xl:w-2/11 w-sm sm:w-9/12 md:w-5/11 h-[14rem]"
                        state={isSport === card.id}
                        onClick={()=>handleClickSport(card.id)}
                    />
                ))}
            </div>

            <div className={` transition-all duration-500 place-content-center place-items-center ${CardA ? 'h-15 ':'h-0'}`}>
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