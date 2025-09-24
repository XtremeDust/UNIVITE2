'use client'
import {Button, Modal,ContainModal,HeaderModal,Input,InputGroup,TextArea,FooterModal} from "@/types/ui_components";
import Navigation from "@/components/common/navigation"
import { useState } from "react";
import Sports from "@/components/common/sportsCard"
import {sports} from "@/types/sports"

export function ButtonInscription(){
        const [OpenModal, setModal] = useState(false);
    
        const handleOpenModal=()=>{
            setModal(true)  
              
        };
    
        const handleCloseModal=()=>{
            setModal(false)    
        };
    
        const [isChecked, setIsChecked] = useState("public");
    
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setIsChecked(event.target.value);
        };

            const [isSport, setSport] = useState<number|null>(null);
            const handleClickSport=(id: number)=>{
                setSport(isSport === id ? null:id);
            };
            const CardA = sports.find(c=> c.id === isSport);

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
                    <ContainModal className="flex flex-col text-black w-md sm:w-[40rem] md:w-[68rem] md:h-[54rem] min-w-96 max-w-[64rem] min-h-96 max-h-[64rem] space-y-3">
                        
                        <HeaderModal className="flex-none" onClose={handleCloseModal}>Registro e Inscripción</HeaderModal>                            

                        <div className="flex-grow main-modal place-content-center space-y-2">

                            <section className="flex flex-col items-start gap-2">
                                <h3 className="ml-15 text-[1.2rem]">Seleccione el deporte en el cual va a participar</h3>
                                    <div className="flex flex-wrap p-2 gap-5 place-content-center">
                                            {sports.map((card)=>(
                                                <Sports
                                                    key={card.id}
                                                    card={card}
                                                    className="w-[7rem] sm:w-[10rem] md:w-[15rem] h-[9rem] "
                                                    classImg="w-[4rem] md:w-[5rem]"
                                                    state={isSport === card.id}
                                                    onClick={()=>handleClickSport(card.id)}
                                                />
                                            ))}
                                    </div>
                            </section>

                            <section className="flex flex-col gap-2">
                                <h3 className="ml-15  items-start text-start text-[1.2rem]">Seleccione la Categoria en la que va a jugar</h3>
                                <div className="flex flex-wrap gap-5 place-content-center">
                                    <Button className="btn-primary">Masculino</Button>
                                    <Button className="btn-secondary">Feminino</Button>
                                    <Button className="btn-secondary">Mixto</Button>
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