import IMG1 from '../assets/ItemsImg/IMG.jpg'
import IMG2 from '../assets/ItemsImg/IMG2.jpg'
import IMG3 from '../assets/ItemsImg/IMG3.jpg'
import IMG4 from '../assets/ItemsImg/IMG4.jpg'
import IMG5 from '../assets/ItemsImg/IMG5.jpg'
import IMG6 from '../assets/ItemsImg/IMG6.jpg'

const Items = [
    {
        id: 1,
        name: "Heart",
        category: "Сережки",
        price: 8559,
        image: `${IMG1}`,
        discount: 0,
        isSale: false,
        mainImg: true,
    },
    {
        id: 2,
        name: "Heart",
        category: "Підвіска",
        price: 4559,
        image: `${IMG2}`,
        discount: 0,
        isSale: false,
        mainImg: false,
    },
    {
        id: 3,
        name: "Heart",
        category: "Підвіска",
        price: 6500,
        image: `${IMG3}`,
        discount: 0,
        isSale: false,
        mainImg: false,
    },
    {
        id: 4,
        name: "Moon",
        category: "Підвіска",
        price: 5699,
        image: `${IMG4}`,
        discount: 1140,
        isSale: true,
        mainImg: false,
    },
    {
        id: 5,
        name: "Moon",
        category: "Каблучка",
        price: 6799,
        image: `${IMG5}`,
        discount: 850,
        isSale: true,
        mainImg: false,
    },
    {
        id: 6,
        name: "Moon",
        category: "Сережки",
        price: 9799,
        image: `${IMG6}`,
        discount: 1250,
        isSale: true,
        mainImg: true,
    },
];

export default Items;
