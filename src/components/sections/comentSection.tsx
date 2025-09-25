 "use client"
import Btcomment from "@/components/sections/ButtonComent";
import ComentCard from "@/components/sections/comentCard";
import { coments } from "@/types/comentarios";

 export default function comenSection(){
    const commentsSubset = coments.slice(0, 6);
    const duplicatedComments = [...commentsSubset, ...commentsSubset];
    return(
        <section className="comenSection grid "> 
            <section className="comentarios flex flex-col w-full m-0 place-items-center text-center place-content-center space-y-5 overflow-hidden p-1">
                <div className="text-[20px] md:text-2xl font-medium flex flex-col gap-1">
                    <h3  className="lg:text-3xl ">Tu opinión tambien importa</h3>
                    <p className="ml-5 text-[16px] text-justify">Tu voz es la energía que mueve este proyecto. Cada opinión, cada comentario y cada experiencia compartida nos ayuda a crecer contigo y a construir un deporte universitario más vibrante y lleno de vida.</p>                
                </div>

                <div className="relative overflow-hidden group w-full">
                    <div className=" flex p-2 gap-5 animate-scroll-rigth flex-shrink-0">
                           {duplicatedComments.map((coment, index) => (
                            <ComentCard 
                                key={index} 
                                coment={coment} 
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                
            </section>
            <div className="btComen">
                {/*deja tu comentario*/}
                <Btcomment/>
            </div>  
            
        </section>
    )
 }