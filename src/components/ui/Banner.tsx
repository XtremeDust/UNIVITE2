import Image from "next/image";

export interface IMGProps{
    SRC:string,
    ALT:string
}

  export default function Banner({SRC, ALT, ...props}:IMGProps){
    return(
        <div className=" relative w-full aspect-video sm:h-80 md:h-96 overflow-hidden bg-gray-400 ">   
            <Image 
                className="absolute top-0 left-0 object-cover w-full h-full"
                {...props}
                src={SRC}
                alt={ALT}
            />
        </div>
    );
  }
