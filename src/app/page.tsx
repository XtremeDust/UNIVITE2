import { Inconsolata, Literata } from "next/font/google";
import Image from "next/image";
import Header from "@/components/common/MainHeader";
import Footer from "@/components/common/MainFooter";
import Banner from "@/components/sections/banner";
import Features from "@/components/sections/featuresSection";
import Comentsection from "@/components/sections/comentSection";
import Univita from "@/components/sections/Univita";


export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh"
    
    >

      {/*Header*/}
      <Header></Header>
      
      {/*content*/}
      <main className="bg-gray-50 text-black space-y-5">          
            <div className="Hero Banner">
            <Banner/>
            </div>
            <div className="features">
              <Features/>
            </div>
            <div className="Univita m-0">
              <Univita/>
            </div>
            <div className="Coments p-3 bg-[#eee8e8] ">
              <Comentsection/>
            </div>
            
      </main>
      {/*Footer*/}
      <Footer></Footer>
    </div>
  );
}
