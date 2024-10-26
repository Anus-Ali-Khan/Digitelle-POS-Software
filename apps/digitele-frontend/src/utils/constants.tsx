import React, { ReactNode } from 'react';
import { IoMdRestaurant } from 'react-icons/io';
import { HiUsers } from 'react-icons/hi2';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { RxExit } from 'react-icons/rx';
import Burger from '../assets/images/Burger.png';
import Avo from '../assets/images/Avo.png';
import Rancheros from '../assets/images/Rancheros.png';
import Stock from '../assets/images/stock1.svg';
import ProfilePic from '../assets/images/profile.svg';
import { FaArrowRight } from 'react-icons/fa6';

type navLinksTypes = {
  id: number;
  title: string;
  href: string;
  icon: React.ReactNode;
};

export const navLinks: navLinksTypes[] = [
  {
    id: 1,
    title: 'Items',
    href: '/items',
    icon: (
      <IoMdRestaurant className="h-9 w-9 max-[769px]:h-6 max-[769px]:w-6" />
    ),
  },
  {
    id: 2,
    title: 'Stock',
    href: '/stocks',
    icon: <img src={Stock} alt="stock" className=" max-[769px]:w-6 " />,
  },
  {
    id: 3,
    title: 'Users',
    href: '/users',
    icon: <HiUsers className="h-9 w-9 max-[769px]:h-6 max-[769px]:w-6" />,
  },
  {
    id: 4,
    title: 'Orders',
    href: '/orders',
    icon: (
      <LiaClipboardListSolid className="h-9 w-9 max-[769px]:h-6 max-[769px]:w-6" />
    ),
  },
  {
    id: 5,
    title: 'Exit',
    href: '/login',
    icon: <RxExit className="h-9 w-9 max-[769px]:h-6 max-[769px]:w-6" />,
  },
];

type foodItemsTypes = {
  _id: number;
  name: string;
  price: string;
  quantity: number;
  img?: string;
};

export const foodItemsList: foodItemsTypes[] = [
  {
    _id: 1,
    name: 'Zinger Burger',
    price: '30',
    quantity: 1,
    img: Burger,
  },
  {
    _id: 2,
    name: 'Smashed Avo',
    price: '30',
    quantity: 1,
    img: Avo,
  },
  {
    _id: 3,
    name: 'Huevos Rancheros',
    price: '10',
    quantity: 1,
    img: Rancheros,
  },
  {
    _id: 4,
    name: 'Zinger Burger',
    price: '30',
    quantity: 1,
    img: Burger,
  },
  {
    _id: 5,
    name: 'Smashed Avo',
    price: '30',
    quantity: 1,
    img: Avo,
  },
  {
    _id: 6,
    name: 'Huevos Rancheros',
    price: '10',
    quantity: 1,
    img: Rancheros,
  },
  {
    _id: 7,
    name: 'Zinger Burger',
    price: '30',
    quantity: 1,
    img: Burger,
  },
  {
    _id: 8,
    name: 'Smashed Avo',
    price: '30',
    quantity: 1,
    img: Avo,
  },
  {
    _id: 9,
    name: 'Huevos Rancheros',
    price: '10',
    quantity: 1,
    img: Rancheros,
  },
  {
    _id: 10,
    name: 'Zinger Burger',
    price: '30',
    quantity: 1,
    img: Burger,
  },
  {
    _id: 11,
    name: 'Smashed Avo',
    price: '30',
    quantity: 1,
    img: Avo,
  },
  {
    _id: 12,
    name: 'Huevos Rancheros',
    price: '10',
    quantity: 1,
    img: Rancheros,
  },
];

type PaymentCardTypes = {
  id: number;
  title: string;
  amount: string;
};

export const paymentCards: PaymentCardTypes[] = [
  {
    id: 1,
    title: 'Total Due',
    amount: '$60.00',
  },
  {
    id: 2,
    title: 'Total Paying',
    amount: '$60.00',
  },
  {
    id: 3,
    title: 'Pay Left',
    amount: '$00.00',
  },
  {
    id: 4,
    title: 'Change',
    amount: '$00.00',
  },
];

export const amountCards: string[] = [
  '$90.00',
  '$100.00',
  '$150.00',
  '$200.00',
];

export const numbersCard: string[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '.',
  '00',
];

type StaffListTypes = {
  id: number;
  profilePic: ReactNode;
  name: string;
  icon: ReactNode;
};

export const StaffList: StaffListTypes[] = [
  {
    id: 1,
    profilePic: <img src={ProfilePic} alt="profile" className="h-24" />,
    name: 'David',
    icon: <FaArrowRight />,
  },
  {
    id: 2,
    profilePic: <img src={ProfilePic} alt="profile" className="h-24" />,
    name: 'John',
    icon: <FaArrowRight />,
  },
  {
    id: 3,
    profilePic: <img src={ProfilePic} alt="profile" className="h-24" />,
    name: 'Smith',
    icon: <FaArrowRight />,
  },
  {
    id: 4,
    profilePic: <img src={ProfilePic} alt="profile" className="h-24" />,
    name: 'Allen',
    icon: <FaArrowRight />,
  },
  {
    id: 5,
    profilePic: <img src={ProfilePic} alt="profile" className="h-24" />,
    name: 'Sheena',
    icon: <FaArrowRight />,
  },
  {
    id: 6,
    profilePic: <img src={ProfilePic} alt="profile" className="h-24" />,
    name: 'Joseph',
    icon: <FaArrowRight />,
  },
  {
    id: 7,
    profilePic: <img src={ProfilePic} alt="profile" className="h-24" />,
    name: 'Joseph',
    icon: <FaArrowRight />,
  },
  {
    id: 8,
    profilePic: <img src={ProfilePic} alt="profile" className="h-24" />,
    name: 'Joseph',
    icon: <FaArrowRight />,
  },
  {
    id: 9,
    profilePic: <img src={ProfilePic} alt="profile" className="h-24" />,
    name: 'Joseph',
    icon: <FaArrowRight />,
  },
];

type StockListTypes = {
  id: number;
  item: string;
  price: string;
  date: string;
  quantity: string;
};

export const stockList: StockListTypes[] = [
  {
    id: 1,
    item: 'Sugar',
    price: '$100',
    date: '23-jan-2024',
    quantity: '10kg',
  },
  {
    id: 2,
    item: 'Sugar',
    price: '$100',
    date: '23-jan-2024',
    quantity: '10kg',
  },
  {
    id: 3,
    item: 'Sugar',
    price: '$100',
    date: '23-jan-2024',
    quantity: '10kg',
  },
  {
    id: 4,
    item: 'Sugar',
    price: '$100',
    date: '23-jan-2024',
    quantity: '10kg',
  },
  {
    id: 5,
    item: 'Sugar',
    price: '$100',
    date: '23-jan-2024',
    quantity: '10kg',
  },
  {
    id: 6,
    item: 'Sugar',
    price: '$100',
    date: '23-jan-2024',
    quantity: '10kg',
  },
];

type OrdersListTypes = {
  orderNo: number;
  datenTime: string;
  customerName: string;
  totalPrice: number;
  cartItems: number;
};

export const OrdersList: OrdersListTypes[] = [
  {
    orderNo: 405,
    datenTime: 'July 2,2024 6:53pm',
    customerName: 'David Paul',
    totalPrice: 440.0,
    cartItems: 3,
  },
  {
    orderNo: 406,
    datenTime: 'July 2,2024 6:53pm',
    customerName: 'David Paul',
    totalPrice: 440.0,
    cartItems: 3,
  },
  {
    orderNo: 407,
    datenTime: 'July 2,2024 6:53pm',
    customerName: 'David Paul',
    totalPrice: 440.0,
    cartItems: 3,
  },
  {
    orderNo: 408,
    datenTime: 'July 2,2024 6:53pm',
    customerName: 'David Paul',
    totalPrice: 440.0,
    cartItems: 3,
  },
  {
    orderNo: 409,
    datenTime: 'July 2,2024 6:53pm',
    customerName: 'David Paul',
    totalPrice: 440.0,
    cartItems: 3,
  },
  {
    orderNo: 410,
    datenTime: 'July 2,2024 6:53pm',
    customerName: 'David Paul',
    totalPrice: 440.0,
    cartItems: 3,
  },
  {
    orderNo: 411,
    datenTime: 'July 2,2024 6:53pm',
    customerName: 'David Paul',
    totalPrice: 440.0,
    cartItems: 3,
  },
  {
    orderNo: 412,
    datenTime: 'July 2,2024 6:53pm',
    customerName: 'David Paul',
    totalPrice: 440.0,
    cartItems: 3,
  },
  {
    orderNo: 413,
    datenTime: 'July 2,2024 6:53pm',
    customerName: 'David Paul',
    totalPrice: 440.0,
    cartItems: 3,
  },
  {
    orderNo: 414,
    datenTime: 'July 2,2024 6:53pm',
    customerName: 'David Paul',
    totalPrice: 440.0,
    cartItems: 3,
  },
];

type CartItemsTypes = {
  id: number;
  name: string;
  foodType: string;
  price: string;
};

export const cartItems: CartItemsTypes[] = [
  {
    id: 1,
    name: 'Beaf Steak',
    foodType: 'Fast Food',
    price: '10',
  },
  {
    id: 2,
    name: 'Beaf Steak',
    foodType: 'Fast Food',
    price: '10',
  },
  {
    id: 3,
    name: 'Beaf Steak',
    foodType: 'Fast Food',
    price: '10',
  },
];
