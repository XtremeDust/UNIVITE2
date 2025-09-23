import Image from "next/image";
import {Card} from '@/types/ui_components'
import {univita} from '@/types/univita'
import {ActiveLink} from "@/components/ui/Router";
import { usePathname } from "next/navigation";

export function navigate(){
        const ruta = usePathname();
    return(
        <section className=" text-center space-y-5 mb-5">
                <h2 className="text-[1.9rem] font-mono text-black">Quizas te interece</h2>
                <div className="flex flex-wrap place-items-center place-content-center gap-3">
                {univita.map((card)=>(
                            <Card key={card.id} className={`relative bg-unimar transition-all duration-500 ease-in-out  h-[12rem] w-9/12  lg:h-[10rem] md:w-5/11 xl:w-[24rem] 2xl:w-[28rem] ${ruta===card.url ? 'hidden':'visible hover:scale-103'}`}>
                                <ActiveLink href={card.url} className='lg:flex absolute inset-0 z-0 click gap-5 place-items-center place-content-center'>
                                        <div className="p-4 bg-gray-300 rounded-full">
                                    <Image
                                        className=" transition-all duration-300 ease-in-out"
                                        src={card.img}
                                        width={100}
                                        height={100}
                                        alt={card.title}
                                        /> 

                                        </div>
                                    <h3 className='text-[18px]'>{card.title}</h3>
                                </ActiveLink>
                            </Card>
                        ))}
                </div>
            </section>
    );
}export default navigate;