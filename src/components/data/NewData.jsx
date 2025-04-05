import MBean from '../../assets/homeee/pnggg.webp'
import Brown from '../../assets/homeee/vvvvvv.avif'
import Onion from '../../assets/homeee/onnion.jpg'
import Cabbage from '../../assets/homeee/andaco-kapusta-s.png'
import { TiShoppingCart } from "react-icons/ti";

export const NewData = [
  { 
    id: 13,
    name: 'Vegetable',
    card: <TiShoppingCart />,
    userName: 'Mung Bean ',
    price: '$11.00',
    oldPrice: '$20.00',
    img: MBean
  },
  { 
    id: 14, 
    name: 'Vegetable',
    card: <TiShoppingCart />,
    userName: 'Brown Cucember ',
    price: '$12.00', 
    oldPrice: '$20.00',
    img: Brown 
  },
  {
   id: 15,
   name: 'Vegetable',
   card: <TiShoppingCart />,
   userName: 'Onion ',
   price: '$17.00', 
   oldPrice: '$20.00',
   img: Onion 
  },
  {
     id: 16,
     name: 'Vegetable',
     card: <TiShoppingCart />,
     userName: 'Cabbage ',
     price: '$17.00',
     oldPrice: '$20.00',
     img: Cabbage
  },
];