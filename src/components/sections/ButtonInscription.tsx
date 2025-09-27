'use client'
import {Button, Modal,ContainModal,HeaderModal,Input,InputGroup,TextArea,FooterModal} from "@/types/ui_components";
import Navigation from "@/components/common/navigation"
import { useState } from "react";
import Sports from "@/components/common/sportsCard"
import {sports, catPredt} from "@/types/sports"
import Image from "next/image";

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

    return(
        <>
            <section className=" flex flex-col p-5 space-y-10 ">
                <h2 className=" text-3xl lg:text-justify text-center text-black">Ahora puedes inscribirte en tus eventos deportivos desde el portal web de la universidad.</h2>
                    <div className="gap-5 flex flex-col lg:flex-row lg:justify-around items-center justify-center size-full">
                        <p className="text-black ml-5 text-lg text-center lg:text-justify w-[75%]">¡Tu pasión por el deporte ahora está a un clic de distancia! En Univita, sabemos que tu tiempo es valioso y tu energía es para darlo todo en la cancha. Por eso, hemos optimizado nuestro sistema de registro. Ahora puedes inscribirte en tus eventos deportivos favoritos de manera rápida y sencilla, directamente desde tu teléfono o computadora.</p>
                        <Button onClick={handleOpenModal} className="btn-primary h-[4rem] xl:h-[4rem]   2xl:w-[15%]">¡Quiero inscribirme!</Button>
                    </div>
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