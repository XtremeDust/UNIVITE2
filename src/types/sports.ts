
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