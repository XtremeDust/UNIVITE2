import React, { ReactElement } from "react";
import {Button} from "@/types/ui_components";

export interface PropsModal{
    BTmain:string;
    className:string;
    //onSumit:()=>void;
    BTSecond:string;
    onClose:()=>void;
}

 export function FooterModal({BTmain, BTSecond, className ,onClose,...props}:PropsModal){
    return(
        <div className={`ooter-modal flex justify-between ${className}`} {...props}>

            <Button variant={"btn-secondary"} onClick={onClose}>
                {BTSecond}
            </Button>

            <Button variant={'btn-primary'}>
                {BTmain}
            </Button>
        </div>
    );
 }