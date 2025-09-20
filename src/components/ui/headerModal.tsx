import React from "react"
import {Button} from "@/types/ui_components"

 export interface PropsModal {
    children: React.ReactNode;
    onClose:()=>void;
}

 export function HeaderModal({children,onClose,...props}:PropsModal){
    return(
        <div className="flex flex-col header-modal items-end justify-center" {...props}>
            <Button variant={"btn-danger"} className="rounded-full" onClick={onClose}>X</Button>                            
            <div className="text-center w-full">
                {children}
            </div>                            
        </div>
    );
 }export default HeaderModal