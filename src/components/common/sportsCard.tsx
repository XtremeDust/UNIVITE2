import Card from "../ui/Card";
import { card } from "@/types/sports";
import Image from "next/image";

interface SportProps{
    className:string;
    onClick:()=>void;
    card:card;
    state:boolean;
}

export function Sports({className, onClick, state, card, ...props}:SportProps){

    return(
        <Card className={`relative h-[14rem] bg-gray-200 grid grid-row text-black shadow-lg  
                ${state ? `ring-trasparent-unimar ring-4 bg-unimar actual text-white scale-103`:' hover:ring-1 hover:bg-trasparent-unimar hover:scale-102 hover:ring-unimar'}
                 ${className}`} {...props}>
            <a className="absolute inset-0 z-0 place-content-center place-items-center space-y-3" onClick={onClick}>
                <Image
                    className={`transition-all duration-300 ease-in-out ${state ?'scale-115':''}`}
                    src={card.img}
                    width={105}
                    height={105}
                    alt={card.sport}
                /> 
                <h3 className='text-[20px]'>{card.sport}</h3>
            </a>
        </Card>
    );
}export default Sports;