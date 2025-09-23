import Footer from '@/components/common/MainFooter';
import Header from '@/components/common/MainHeader';
import Banner from '@/components/sections/banner';

export default function events(){
    return(
        <div className='grid grid-rows-[auto_1fr_auto] min-h-dvh bg-white'>
            <Header/>
                <main className='bg-gray-50'>
                    <Banner/>
                    
                </main>
            <Footer/>
        </div>
    );
}