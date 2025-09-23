'use client'
import Footer from '@/components/common/MainFooter';
import Header from '@/components/common/MainHeader';
import Banner from '@/components/sections/banner';
import { useEffect, useState } from 'react';

export function events(){
    return(
        <div className='grid grid-rows-[auto_1fr_auto] min-h-dvh bg-white'>
            <Header/>
                <main className='bg-gray-50'>
                    <Banner/>
                    
                </main>
            <Footer/>
        </div>
    );
}export default events;


/*
      const [dolar, setDolar] = useState(null);

  useEffect(() => {
    // Llama a tu API Route para obtener el valor del dólar
    const fetchDolar = async () => {
      try {
        const res = await fetch('/api/taza');
        const data = await res.json();
        setDolar(data.number);
      } catch (error) {
        console.error('Error fetching dolar:', error);
      }
    };

    fetchDolar();
  }, []); // El array vacío asegura que se ejecute solo una vez al cargar la página

  return (
    <div>
      <h1>Valor del dólar</h1>
      {dolar ? (
        <p>El valor del dólar es: ${dolar}</p>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
    );
*/