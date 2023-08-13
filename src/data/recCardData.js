import {
    recCardFour,
    recCardOne,
    recCardThree,
    cardFourPhoto,
    cardFivePhoto,
  } from "../assets";
  
  import { v4 as uniqueID } from 'uuid';



const recCardData = [
    {
        id:uniqueID(),
        title:"Metaverse Dünyası",
        name:"Ruth J Davis | AI Uzmanı",
        views:"200K Dinleme",
        captures:"12 Bölüm",
        photo:cardFourPhoto,
    },
    {
        id:uniqueID(),
        title:"Finansal Özgürlük",
        name:"Joseph W Pitts | Finans Uzmanı",
        views:"80K Dinleme",
        captures:"09 Bölüm",
        photo:recCardOne,
    },
    {
        id:uniqueID(),
        title:"Mind Pump",
        name:"George Milton | Yaşam Koçu",
        views:"190K Dinleme",
        captures:"28 Bölüm",
        photo:recCardThree,
    },
    {
        id:uniqueID(),
        title:"Team Work",
        name:"Stephen M Jones | Finans Uzmanı",
        views:"1.5K Dinleme",
        captures:"05 Bölüm",
        photo:recCardFour,
    },
    {
        id:uniqueID(),
        title:"Crime Junkie",
        name:"Steve J Davis | Finans Uzmanı ",
        views:"30K Dinleme",
        captures:"14 Bölüm",
        photo:cardFivePhoto,
    },
]

export {recCardData};