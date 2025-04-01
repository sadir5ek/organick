import MBean from '../../assets/homeee/Photo (3).svg'
import Brown from '../../assets/homeee/Photo (4).svg'
import Onion from '../../assets/homeee/Photo (5).svg'
import Cabbage from '../../assets/homeee/Photo (6).svg'
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
    userName: 'Brown Hazelnut ',
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