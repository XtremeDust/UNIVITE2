import React, { ReactElement } from "react";
import {Button} from "@/types/ui_components";

export interface PropsModal{
    BTmain:string;
    //onSumit:()=>void;
    BTSecond:string;
    onClose:()=>void;
}

 export function FooterModal({BTmain, BTSecond,onClose,...props}:PropsModal){
    return(
        <div className="footer-modal space-x-[28rem]" {...props}>

            <Button variant={"btn-secondary"} onClick={onClose}>
                {BTSecond}
            </Button>

            <Button variant={'btn-primary'}>
                {BTmain}
            </Button>
        </div>
    );
 }