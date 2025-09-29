'use client'
import {Button, Modal,ContainModal,HeaderModal,FooterModal, Card} from "@/types/ui_components";
import Navigation from "@/components/common/navigation"
import { useState } from "react";
import Sports from "@/components/common/sportsCard"
import {sports, catPredt, pasos} from "@/types/sports"
import Image from "next/image";
import { motion } from "motion/react";
import Banner from "@/components/ui/Banner";

export function ButtonInscription(){
        const [OpenModal, setModal] = useState(false);
        const handleOpenModal=()=>{
            setModal(true)  
              
        };
        const handleCloseModal=()=>{
            setModal(false)    
        };
    
        const [isSport, setSport] = useState<number|null>(null);
        const handleClickSport=(id: number)=>{
            setSport(isSport === id ? (null): (id));
            if(isSport===id){
                setSelectCat(null);
            }else{
                setSelectCat(null);
            }
        };

        const [SelectCat, setSelectCat] = useState<number|null>(null);
        const handleCatChange = (id:number) => {
            setSelectCat(SelectCat === id ? null:id)    
        };
        
        const categoria = sports.find((c=> c.id === isSport));
        const enlistada = categoria?.categoria[0].id;

         const [isHovered, setIsHovered] = useState(false);
        const iconMove = {
            initial: { rotate: 0},
            hover: { 
                rotate: [65,0,180,70],
            },
        };

    return(
        <>
            <Banner
                SRC="https://res.cloudinary.com/dnfvfft3w/image/upload/v1758470460/Lucid_Origin_A_dynamic_wideformat_cinematic_photo_in_the_style_0_qx2poq.jpg"
                ALT="banner"
            >
                <>
                    <div className="absolute inset-0 z-10 backdrop-blur-md bg-black/40"/>
                    <section className="flex flex-col space-y-1 absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h2 className=" title text-center  font-bold">Inscríbete en tus eventos deportivos</h2>
                        <div className="gap-5 flex flex-col items-center justify-center size-full">
                            <p className=" text-lg text-center w-[75%]">Tu pasión por el deporte ahora está a un clic de distancia. Inscribrete de manera rápida y secilla.</p>
                            <Button className="btn-primary h-[3rem] xl:h-[4rem] flex place-items-center group not-hover:gap-0 hover:gap-3 transition-all"
                                onClick={handleOpenModal} 
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                ¡Quiero inscribirme!
                                <motion.div className="m-0 group-hover:w-6 h-full relative"
                                    variants={iconMove}
                                    animate={isHovered?'hover':'inicial'}
                                >
                                    <Image
                                        src={'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759090778/seleccion_wlilfg.png'}
                                        alt="pointer"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </motion.div>    
                            </Button>
                        </div>
                    </section>
                </>
            </Banner>

            <section className=" flex flex-col p-5 space-y-10 ">
                <section className="flex flex-col p-3 space-y-12 text-black place-content-center place-items-center text-center m-0">
                    <div className="mb-5 place-content-center place-items-center">
                        <h3 className='title text-gray-800'>Optimiza tu Tiempo, Maximiza tu Energía</h3>
                        <p className="text-sm md:text-lg w-sm text-gray-600 text-center">Nuestro proceso de Inscripción esta diseñado para que dediques menos tiempo al papeleo y más a lo que amas: competir y entrenar</p>
                    </div>
                     
                     <div className=" flex flex-col lg:flex-row w-full justify-evenly gap-3">
                        {pasos.map((en)=>(
                            <Card key={en.id} 
                                className="block place-items-center place-content-center text-center gap-3 m-0">
                                <motion.div
                                    className=" place-items-center"
                                    animate={{scale:0.9}}
                                    whileHover={{scale:1.0}}
                                    transition={{
                                        duration:0.3,
                                        ease:"easeInOut",
                                    }}
                                >
                                     <div className=" ring-blue-300 ring-8 p-4 bg-univita bg mb-4 w-[9rem] rounded-full overflow-hidden">
                                        <Image
                                            className=" transition-all duration-300 ease-in-out p-2 md:p-0 scale-70"
                                            src={en.img}
                                            alt={en.paso}
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{en.id}.{en.paso}</h3>
                                        <p className="text-sm md:text-lg text-gray-600 w-sm">{en.content}</p>
                                    </div>
                                </motion.div>
                            </Card>
                        ))}
                     </div>
                </section>
                <Navigation/>
            </section>

             <Modal state={OpenModal}>
                {OpenModal &&(
                    <ContainModal className="grid-flow-row-dense md:flex md:flex-col md:place-content-center text-black w-sm h-[50rem] sm:w-[40rem] md:w-[54rem] xl:w-[64rem] md:h-[54rem] min-w-96 max-w-[64rem] min-h-96 max-h-90% space-y-3 overflow-y-auto">
                        <HeaderModal className="flex-none" onClose={handleCloseModal}>Registro e Inscripción</HeaderModal>
                        <div className="flex-grow main-modal place-content-center space-y-2">

                            <section className="flex flex-col ">
                                <h3 className="md:ml-15 text-[1.2rem] text-center md:text-start">Seleccione el deporte en el cual va a participar</h3>
                                    <div className="flex flex-wrap p-2 gap-3 place-content-center">
                                            {sports.map((card)=>(
                                                <Sports
                                                    key={card.id}
                                                    card={card}
                                                    className="w-[8rem] sm:w-[10rem] md:w-[15rem] h-[9rem]"
                                                    classImg="w-[4rem] md:w-[5rem]"
                                                    state={isSport === card.id}
                                                    onClick={()=>handleClickSport(card.id)}
                                                />
                                            ))}
                                    </div>
                            </section>

                            <section className="flex flex-col gap-2 transition-all">
                                <h3 className="md:ml-15 text-center items-start md:text-start text-[1.2rem]">Seleccione la Categoria en la que va a jugar</h3>
                                <div className="flex flex-wrap gap-5 place-content-center group">
                                    {categoria &&(
                                        <div className={`flex flex-col md:flex-row gap-1 bg-gray-300 p-2 rounded-xl transition-all duration-300 w-full sm:w-[75%] md:w-auto`}>
                                        {categoria.categoria?.map((cat)=>(
                                                <Button
                                                    key={cat.category} 
                                                    onClick={()=>handleCatChange(cat.id)}
                                                    className={`flex gap-2 place-items-center md:place-content-center transition-all duration-300 ease-in-out text-[17px] btn 
                                                        ${SelectCat === cat.id? ' shadow-md bg-unimar text-white': 
                                                            ( SelectCat ===null && cat.id===enlistada)?'shadow-md bg-unimar text-white':' bg-transparent hover:bg-gray-100 hover:text-black text-gray-600'}`}
                                                >
                                                    <Image
                                                        className={` transition-all duration-300 ease-in-out ring-white ring-4 rounded-full `}
                                                        src={cat.img}
                                                        width={35}
                                                        height={35}
                                                        alt={cat.category}
                                                    /> 
                                                    {cat.category}
                                                </Button>
                                            ))}
                                        </div>
                                    )}
                                    
                                    {!categoria &&(
                                    <div className={`flex flex-col md:flex-row gap-1 bg-gray-300 p-2 rounded-xl transition-all duration-300 w-full sm:w-[75%] md:w-auto`}>
                                            {catPredt.map((cat)=>(
                                                <Button
                                                    key={cat.category} 
                                                    className={`flex gap-2 place-items-center md:place-content-center transition-all duration-300 ease-in-out text-[17px] btn bg-transparent text-gray-500`}
                                                >
                                                    <Image
                                                        className={`transition-all duration-300 ease-in-out ring-white ring-4 rounded-full `}
                                                        src={cat.img}
                                                        width={35}
                                                        height={35}
                                                        alt={cat.category}
                                                    /> 
                                                    {cat.category}
                                                </Button>
                                            ))}
                                        </div>                                        
                                    )}
                                </div>
                            </section>
                        </div>

                        <FooterModal className="flex-none" BTmain="Next" BTSecond="Cerrar" onClose={handleCloseModal}/>
                            
                        
                    </ContainModal>
                )}
             </Modal>
        </>
    );
}export default ButtonInscription