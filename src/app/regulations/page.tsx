import Footer from "@/components/common/MainFooter";
import Header from "@/components/common/MainHeader";

import Banner from "@/components/sections/banner";
import Sport from "@/components/sections/Sport";

export default function reglamentos(){
    return(
        <div className='grid grid-rows-[auto_1fr_auto] min-h-dvh bg-white'>
            <Header/>
                <main className='bg-gray-50 space-y-4'>
                    <Banner/>
                    <Sport/>
                </main>                
            <Footer/>
        </div>
    );
}