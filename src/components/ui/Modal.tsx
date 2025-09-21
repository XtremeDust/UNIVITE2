"use client"
import React, {useEffect} from "react"


export interface ModalProps{
    children?: React.ReactNode;
    className?:string;
    state?:boolean;
}

    export function Modal({children,className, state,...props}:ModalProps){ 
        useEffect(() => {
        if (state) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [state]);

        return(
                <div className={`fixed overflow-hidden inset-0 place-content-center place-items-center transition-all ease-in-out duration-500 z-30 
                 ${state===true ? 'backdrop-blur-3xl backdrop-grayscale-75 max-h-screen delay-400': 'delay-100 max-h-0 backdrop-blur-xs backdrop-grayscale-75' }
                  ${className}`} {...props}>
                    {children}
                </div>
        )
    }export default Modal