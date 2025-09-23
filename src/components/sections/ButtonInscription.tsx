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
                    <ContainModal className="flex flex-col text-black w-md md:w-[68rem] md:h-[54rem] min-w-96 max-w-[64rem] min-h-96 max-h-[64rem]">
                        
                        <HeaderModal className="flex-none" onClose={handleCloseModal}>Registro e Inscripción</HeaderModal>                            

                        <div className="flex-grow main-modal place-content-center space-y-5">

                            <div>
                                Deporte
                                <InputGroup For="Deporte" label="Seleccione el deporte en el cual Va a participar" className="flex flex-wrap"  labelClass="text-[18px]">
                                    {sports.map((card)=>(
                                        <Sports
                                            key={card.id}
                                            card={card}
                                            className="flex w-[16rem] "
                                            state={isSport === card.id}
                                            onClick={()=>handleClickSport(card.id)}
                                        />
                                    ))}
                                </InputGroup>
                            </div>

                            <div>
                                categoria
                            </div>

                            <div className="Email gap-3 flex flex-col items-center">
                                <InputGroup For="Email" label="Correo Institucional" className="items-start"  labelClass="text-[18px]">
                                    <Input className="input-text sm:w-sm" type="text" placeholder="example.1234@unimar.edu.ve"/>
                                </InputGroup>

                                <div className="Seletion flex flex-row space-x-3 sm:w-sm">
                                    <InputGroup For="public" label="Publico" className={`flex flex-row-reverse gap-2 ${isChecked === 'public'? 'text-black':'text-gray-500'}`}>
                                        <Input id="public" type="radio" name="correo" value="public" checked={isChecked === 'public'} onChange={handleChange}/>
                                    </InputGroup>

                                    <InputGroup For="private" label="Anonimo" className={`flex flex-row-reverse gap-2 ${isChecked === 'private'? 'text-black':'text-gray-500'}`}>
                                        <Input id="private" type="radio" name="correo" value="private" checked={isChecked === 'private'} onChange={handleChange}/>
                                    </InputGroup>
                                
                                </div>
                                    <span className={`text-[16px] sm:w-sm text-justify ${isChecked==='public' ? 'flex': 'hidden'}`}>
                                        Su informacion de usuario podra ser vista en la seccion de comentarios
                                    </span>

                                    <span className={`text-[16px] sm:w-sm text-justify ${isChecked==='private' ? 'block': 'hidden'}`}>
                                        Su informacion de usuario no sera vista en la seccion de comentarios
                                    </span>

                            </div>

                            <div className="Coment flex place-content-center">
                                <InputGroup label="Comentario" For="Coment" className="items-start"  labelClass="text-[18px]">
                                    <TextArea className="sm:w-sm h-[12rem]"/>
                                </InputGroup>
                            </div>

                        </div>

                        <FooterModal className="flex-none" BTmain="Next" BTSecond="Cerrar" onClose={handleCloseModal}/>
                            
                        
                    </ContainModal>
                )}
             </Modal>
        </>
    );
}export default ButtonInscription