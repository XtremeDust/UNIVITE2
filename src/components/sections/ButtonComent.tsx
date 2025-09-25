import React,{useState} from "react";
import {Button, Modal, ContainModal, Input, InputGroup, TextArea, HeaderModal, FooterModal} from "@/types/ui_components";


export default function Comment() {
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

    return(


        <div className=" flex flex-wrap text-[24px] items-center justify-center lg:space-y-12 space-y-2 p-3  lg:gap-5 ">                        
            <div className="flex flex-col lg:w-3/5 space-y-3">
                <h2 className=" lg:text-4xl text-center lg:text-justify">¿Listo Para Elevar el nivel de la Experiencia Deportiva?</h2>
                <p className="text-[20px]  text-center lg:text-justify">Queremos crecer contigo. Cada idea, cada comentario y cada experiencia compartida nos ayuda a perfeccionar Univita para que refleje lo mejor de nuestra comunidad universitaria.</p>
            </div>
            <Button onClick={handleOpenModal} className="btn-primary">               
                    Dejanos Tu Comentario               
            </Button>

                <Modal state={OpenModal}>
                    {OpenModal &&(
                        <ContainModal className="flex flex-col space-y-10 w-sm sm:w-xl max-h-5/6 min-w-80 min-h-72">
                            
                            <HeaderModal onClose={handleCloseModal} className="flex-none">Buzon de Comentarios</HeaderModal>                            

                            <div className="main-modal flex-grow space-y-3 place-items-center">

                                <div className="Email flex items-center gap-2 md:gap-3 flex-col">
                                    <InputGroup For="Email" label="Correo Institucional" labelClass="text-[18px] text-start">
                                        <Input id="Email" className="input-text w-[18rem] sm:w-sm" type="text" placeholder="example.1234@unimar.edu.ve"/>
                                    </InputGroup>

                                    <div className="Seletion flex flex-row space-x-3  w-[18rem] sm:w-sm">
                                        <InputGroup For="public" label="Publico" className={`flex flex-row-reverse gap-2 ${isChecked === 'public'? 'text-black':'text-gray-500'}`}>
                                            <Input id="public" type="radio" name="correo" value="public" checked={isChecked === 'public'} onChange={handleChange}/>
                                        </InputGroup>

                                        <InputGroup For="private" label="Anonimo" className={`flex flex-row-reverse gap-2 ${isChecked === 'private'? 'text-black':'text-gray-500'}`}>
                                            <Input id="private" type="radio" name="correo" value="private" checked={isChecked === 'private'} onChange={handleChange}/>
                                        </InputGroup>
                                    
                                    </div>
                                        <span className={`text-[16px] w-[18rem] sm:w-sm text-justify ${isChecked==='public' ? 'flex': 'hidden'}`}>
                                            Su informacion de usuario podra ser vista en la seccion de comentarios
                                        </span>

                                        <span className={`text-[16px] w-[18rem] sm:w-sm text-justify ${isChecked==='private' ? 'block': 'hidden'}`}>
                                            Su informacion de usuario no sera vista en la seccion de comentarios
                                        </span>

                                </div>

                                <div className="Coment flex items-start md:items-center">
                                    <InputGroup label="Comentario" For="Coment" labelClass="text-[18px] text-start ">
                                        <TextArea id="Coment" className="w-[18rem] sm:w-sm h-[12rem]"/>
                                    </InputGroup>
                                </div>

                            </div>

                           <FooterModal BTmain="Enviar" BTSecond="Cerrar" onClose={handleCloseModal} className="flex-none"/>
                                
                           
                        </ContainModal>
                    )}
                </Modal>
           
        </div>
    )
}