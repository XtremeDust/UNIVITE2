
export interface card{
    id:number;
    sport:string;
    img:string;
    urlA?:string;
    categoria?:categoria[];
}

export interface categoria{
    id:number;
    category:string;
}

export const pasos=[
    {id:1,paso:"Selecciona tu Evento", content:"Elige el deporte que te apaciona y la categoria en la que quieres participar.", img:"https://res.cloudinary.com/dnfvfft3w/image/upload/v1759086427/seleccione_1_r0ezsw.png"},
    {id:2,paso:"Completa tus Datos", content:"Llena el formulario con la información necesaria para el registro.", img:"https://res.cloudinary.com/dnfvfft3w/image/upload/v1759086426/formularios-de-google_x5vgjo.png"},
    {id:3,paso:"Envia y ¡Listo!", content:"Realiza el envio, espera confirmacion y prepárate para competir", img:"https://res.cloudinary.com/dnfvfft3w/image/upload/v1759086427/seleccione_ftz82y.png"},
]

export const catPredt=[
    {id:1,category:'Masculina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857071/Group_381_rnpdb0.png'},
    {id:2,category:'Femenina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857070/Group_380_mr3n9u.png'},
    {id:3,category:'Mixta', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857071/Group_379_rxuiqt.png'},
]

export const sports=[ 
    {
        id:1,
        sport:'Futbol Sala',
        img:"https://res.cloudinary.com/dnfvfft3w/image/upload/v1758773246/Group_376_ei3l7q.png",
        urlA:"normas",
        categoria:[
            {id:1,category:'Masculina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857071/Group_381_rnpdb0.png'},
            {id:2,category:'Femenina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857070/Group_380_mr3n9u.png'},
    
        ],
    },
        {
        id:2,
        sport:'Basquet',
        img:"https://res.cloudinary.com/dnfvfft3w/image/upload/v1758773246/Group_373_brfhoe.png",
        urlA:"normas",
        categoria:[
            {id:1,category:'Masculina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857071/Group_381_rnpdb0.png'},
            {id:2,category:'Femenina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857070/Group_380_mr3n9u.png'},
        ],
    },
        {
        id:3,
        sport:'Voleibol',
        img:"https://res.cloudinary.com/dnfvfft3w/image/upload/v1758773247/Group_372_ssyllf.png",
        urlA:"normas",
        categoria:[
            {id:31,category:'Masculina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857071/Group_381_rnpdb0.png'},
            {id:32,category:'Femenina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857070/Group_380_mr3n9u.png'},
            {id:33,category:'Mixta', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857071/Group_379_rxuiqt.png'},
        ],
    },
        {
        id:4,
        sport:'Beisbol 5',
        img:"https://res.cloudinary.com/dnfvfft3w/image/upload/v1758773246/Group_375_nwfe8w.png",
        urlA:"normas",
        categoria:[
            {id:41,category:'Masculina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857071/Group_381_rnpdb0.png'},
        ],
    },
        {
        id:5,
        sport:'Tenis de Mesa',
        img:"https://res.cloudinary.com/dnfvfft3w/image/upload/v1758773246/Group_377_vfq98c.png",
        urlA:"normas",
        categoria:[
            {id:33,category:'Mixta', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857071/Group_379_rxuiqt.png'},
        ],
    },
        {
        id:6,
        sport:'kickingball',
        img:"https://res.cloudinary.com/dnfvfft3w/image/upload/v1758773246/Group_374_qy7g7u.png",
        urlA:"normas",
        categoria:[
            {id:62,category:'Femenina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857070/Group_380_mr3n9u.png'},
        ],
    },
        {
        id:7,
        sport:'Karate-Do',
        img:"https://res.cloudinary.com/dnfvfft3w/image/upload/v1758773247/Group_371_dd0lwg.png",
        urlA:"normas",
        categoria:[
            {id:71,category:'Masculina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857071/Group_381_rnpdb0.png'},
            {id:72,category:'Femenina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857070/Group_380_mr3n9u.png'},
            {id:73,category:'Mixta', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857071/Group_379_rxuiqt.png'},            
        ]
    },
    {
        id:8,
        sport:'Softball',
        img:"https://res.cloudinary.com/dnfvfft3w/image/upload/v1758773247/Group_370_zvctx4.png",
        urlA:"normas",
        categoria:[
            {id:81,category:'Masculina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857071/Group_381_rnpdb0.png'},
        ],
    },
    {
        id:9,
        sport:'Pickleball',
        img:"https://res.cloudinary.com/dnfvfft3w/image/upload/v1758773246/Group_378_owx1hq.png",
        urlA:"normas",
        categoria:[
            {id:91,category:'Masculina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857071/Group_381_rnpdb0.png'},
            {id:92,category:'Femenina', img:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1758857070/Group_380_mr3n9u.png'},
    
        ],
    }
]

export const equipos=[
    {id:1,nombre:'Equipo ',img:'/'},
    {id:2,nombre:'Equipo ',img:'/'},
    {id:3,nombre:'Equipo ',img:'/'},
    {id:4,nombre:'Equipo ',img:'/'},
    {id:5,nombre:'Equipo ',img:'/'},
    {id:6,nombre:'Equipo ',img:'/'},
    {id:7,nombre:'Equipo ',img:'/'},
    {id:8,nombre:'Equipo ',img:'/'},
    {id:9,nombre:'Equipo ',img:'/'},
    {id:10,nombre:'Equipo ',img:'/'},
]

export const partidos=[
    {id:1,equipo1:'Equipo 1',img1:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759361303/escudo_kz6svs.png',macador1:'0', equipo2:'Equipo 2',img2:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759361303/escudo_kz6svs.png', marcador2:'0', fecha:'00/00/0000', estado:'En vivo'},
    {id:2,equipo1:'Equipo 3',img1:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759361303/escudo_kz6svs.png',macador1:'0', equipo2:'Equipo 4',img2:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759361303/escudo_kz6svs.png', marcador2:'0', fecha:'00/00/0000', estado:'Proximo'},
    {id:3,equipo1:'Equipo 5',img1:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759361303/escudo_kz6svs.png',macador1:'0', equipo2:'Equipo 6',img2:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759361303/escudo_kz6svs.png', marcador2:'0', fecha:'00/00/0000', estado:'Finalizado'},
    {id:4,equipo1:'Equipo 7',img1:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759361303/escudo_kz6svs.png',macador1:'0', equipo2:'Equipo 8',img2:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759361303/escudo_kz6svs.png', marcador2:'0', fecha:'00/00/0000', estado:'Proximo'},
    {id:5,equipo1:'Equipo 9',img1:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759361303/escudo_kz6svs.png',macador1:'0', equipo2:'Equipo 10',img2:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759361303/escudo_kz6svs.png', marcador2:'0', fecha:'00/00/0000', estado:'Finalizado'},
    {id:6,equipo1:'Equipo 11',img1:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759361303/escudo_kz6svs.png',macador1:'0', equipo2:'Equipo 12',img2:'https://res.cloudinary.com/dnfvfft3w/image/upload/v1759361303/escudo_kz6svs.png', marcador2:'0', fecha:'00/00/0000', estado:'Finalizado'}
]