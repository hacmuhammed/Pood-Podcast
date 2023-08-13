
import { cardOnePhoto,cardTwoPhoto,cardThreePhoto,cardFourPhoto,cardFivePhoto } from '../assets';
import { avatarOne,avatarTwo,avatarThree,avatarFour,avatarFive } from '../assets';
import { v4 as uniqueID } from 'uuid';
const cardsDetail = [
    {
        id:uniqueID(),
        name :"George Milton",
        specific:"Yaşam Koçu",
        avatar:avatarOne,
        gridPos:"1 / 1 / 4 / 4",
        bg:cardOnePhoto,
        podName:"Mind Pump",
        podInfo:"Sağlık ve Fitness | 00:36 | İngilizce",
    },
    {
        id:uniqueID(),
        name :"Joseph W Pitts",
        specific:"Finans Uzmanı",
        avatar:avatarThree,
        gridPos:"4 / 1 / 7 / 4",
        bg:cardTwoPhoto,
        podName:"Para güçtür",
        podInfo:"finans | 00:23 | Türkçe",
    },
    {
        id:uniqueID(),
       
        name :"Jason B Hudson",
        specific:"Gazeteci",
        avatar:avatarTwo,
        gridPos:"1 / 4 / 4 / 6",
        bg:cardThreePhoto,
        podName:"The Daily",
        podInfo:"haberler | 00:46 | İngilizce",
    },
    {
        id:uniqueID(),
        name :"Ruth J Davis",
        specific:"AI Uzmanı",
        avatar:avatarFour,
        gridPos:"4 / 4 / 7 / 6",
        bg:cardFourPhoto,
        podName:"Metaverse ",
        podInfo:"Teknoloji | 00:18 | Türkçe",
    },
    {
        id:uniqueID(),
        name :"Stephen M Jones",
        specific:"Finans Uzmanı",
        avatar:avatarFive,
        gridPos:"1 / 6 / 7 / 9",
        bg:cardFivePhoto,
        podName:"Crime Junkie",
        podInfo:"Finans | 00:54 | İngilizce",
    }
]

export {cardsDetail};