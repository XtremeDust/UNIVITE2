'use client'
import {Avatar} from "@/types/ui_components"
import { Coment} from "@/types/comentarios"

interface ComentProps{
    coment:Coment
    index:number
}

    export default function ComentarsCard({coment, index}:ComentProps){
        return(
            <div className="flex flex-row place-content-center gap-5 h-[13rem]  group">
                
                    <div  className={`overflow-hidden w-[24rem] ring-2 rounded-lg hover:scale-105 opacity-100 group-hover:opacity-50 hover:opacity-100 transition-all duration-300 border-2 ${index % 2 ===0 ?'bg-unimar text-white ring-gray-400':'bg-gray-50 border-blue-400 ring-unimar'} `}>
                            <div key={coment.id} className={`h-full p-2 space-y-3  flex flex-col items-center`}>
                                <div className="flex flex-row space-x-3 items-center w-full px-2 ">
                                    <div className={` bg-gray-400 size-12 rounded-full overflow-hidden flex place-content-center-safe items-center`}>
                                        <Avatar email={coment.email}/>                      
                                    </div>
                                    <div className="flex flex-col space-x-2">
                                        <h3 className="font-bold">{(coment.name ==='null' ? 'Anonimo' : coment.name)}</h3>
                                        <span className="opacity-70">{coment.date}</span>
                                    </div>
                                </div>                
                                <p className="line-clamp-5 w-[20rem] text-justify">{coment.content.contenido}</p>
                            </div> 
                    </div>   
            </div>
        )
    }