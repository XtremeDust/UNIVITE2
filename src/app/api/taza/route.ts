
import { NextResponse } from "next/server";
import {parse} from 'node-html-parser'
export const dynamic = 'force-dynamic';

export async function GET(req: Request){
    try{
        //url pag
        const url = "https://www.bcv.org.ve/";
        console.log("url", url);
        
        //no guardamos cache
        const res = await fetch(url, {cache:"no-store"});        
        console.log("respuesta", res.status);

         if (!res.ok) {
      throw new Error(`Fallo en la petición con el código de estado: ${res.status}`);
    }

    //cargamos html
        const data = await res.text();
        console.log("html", data.length);
        const load = parse(data);

        //buscamos elemento
        const dolarElement = load.querySelector("#dolar field-content recuadrotsmc centrado strong"); 
        
        const dolar = dolarElement.text.trim(); 
        console.log("dolar",dolar);

        
           if (!dolar) {
      throw new Error('No se encontró el elemento con el ID #dollar-bcv-price');
    }
        
        //damos formato (12.12 en vez de 12,12
          const value = parseFloat(dolar.replace(',', '.'));
        
        if (isNaN(value)) {
      throw new Error('El valor extraído no es un número válido.');
    }

        //retornamos elemnto
        return NextResponse.json(
            {number:value},
            {status:200}
        );

    }catch (err:any){
        console.error(err);
        return NextResponse.json(
            {error: "No se pudo encontrar el elemento",detail:err?.message ?? String(err)},
            {status:500}
        );
        
    }
}

/*

    const res = await fetch("https://www.bcv.org.ve");
    const req = await res.text();
    const $ = cheerio.load(req);
    const rate = $('#dolar .centrado strong')
*/