import { Skater } from './skater';
  
export const SKATERS: Skater[] =[
    {
        id:1,
        name:"Hawk",
        surname:"Tony",
        age:54,
        footed:"goofy",
        picture:"https://upload.wikimedia.org/wikipedia/commons/3/36/Skater_Tony_Hawk.jpg",
        information:"Légende du skateboard en rampe",
        sponsor:["Birdhouse"],
        created: new Date()
    },
    {
        id:2,
        name:"Mullen",
        surname:"Rodney",
        age:36,
        footed:"goofy",
        picture:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Rodney_Mullen_PopTech_2013_01_%28cropped%29.jpg",
        information:"Légende du skateboard street",
        sponsor:["Powell","Darkstar", "Matix" ,"Globe"],
        created: new Date()
    },
    {
        id:3,
        name:"Song",
        surname:"Daewon",
        age:41,
        footed:"goofy",
        picture:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Daewonsong.jpg",
        information:"Je vais me passer du commentaire, j'aime faire des kickflip",
        sponsor:["ThankYou","Adidas"],
        created: new Date()
    },
    {
        id:4,
        name:"Caballero",
        surname:"Steve",
        age:35,
        footed:"goofy",
        picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Steve_Caballero_Feb_3_2012.jpg/800px-Steve_Caballero_Feb_3_2012.jpg",
        information:"Ninja tirette...",
        sponsor:["Powell"],
        created: new Date()
    },
    {
        id:5,
        name:"Anderson",
        surname:'Andy',
        age:26,
        footed:"goofy",
        picture:"https://dewtour.com/wp-content/uploads/2021/05/andy_anderson_RESIZED.jpg",
        information:"Le seule regular qui fait rever",
        sponsor:["Powell"],
        created: new Date()
    },
    {
        id:6,
        name:"Bufoni",
        surname:"Leticia",
        age:18,
        footed:"goofy",
        picture:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Skate-leticia-bufoni.jpg",
        information:"Skateuse venat du brezil",
        sponsor:["Nike SB","Volcom"],
        created: new Date()
    },    
    {
        id:7,
        name:"Pudwill",
        surname:"Torey",
        age:32,
        footed:"regular",
        picture:"https://i.ytimg.com/vi/wN7po1cdo5k/maxresdefault.jpg",
        information:"Le regular qui attaque dans le laear",
        sponsor:["Primitive"],
        created: new Date()
    }
];
