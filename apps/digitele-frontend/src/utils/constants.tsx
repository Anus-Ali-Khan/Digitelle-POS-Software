import React from "react";
import { IoMdRestaurant } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import { LiaClipboardListSolid } from "react-icons/lia";
import { RxExit } from "react-icons/rx";
import Burger from "../assets/images/Burger.png";
import Avo from "../assets/images/Avo.png";
import Rancheros from "../assets/images/Rancheros.png";
import Stock from '../assets/images/stock1.svg'

type navLinksTypes = {
  id: number;
  title: string;
  icon: React.ReactNode;
};

export const navLinks: navLinksTypes[] = [
  {
    id: 1,
    title: "Items",
    icon: (
      <IoMdRestaurant className="h-9 w-9 max-[769px]:h-6 max-[769px]:w-6" />
    ),
  },
  {
    id: 2,
    title: "Stock",
    icon: (
      <img src={Stock} className=" max-[769px]:w-6 " />
    ),
  },
  {
    id: 3,
    title: "Users",
    icon: <HiUsers className="h-9 w-9 max-[769px]:h-6 max-[769px]:w-6" />,
  },
  {
    id: 4,
    title: "Orders",
    icon: (
      <LiaClipboardListSolid className="h-9 w-9 max-[769px]:h-6 max-[769px]:w-6" />
    ),
  },
  {
    id: 5,
    title: "Exit",
    icon: <RxExit className="h-9 w-9 max-[769px]:h-6 max-[769px]:w-6" />,
  },
];

type foodItemsTypes = {
  title: string;
  price: string;
  img: string;
};

export const foodItemsList: foodItemsTypes[] = [
  {
    title: "Zinger Burger",
    price: "$30",
    img: Burger,
  },
  {
    title: "Smashed Avo",
    price: "$30",
    img: Avo,
  },
  {
    title: "Huevos Rancheros",
    price: "$10",
    img: Rancheros,
  },
  {
    title: "Zinger Burger",
    price: "$30",
    img: Burger,
  },
  {
    title: "Smashed Avo",
    price: "$30",
    img: Avo,
  },
  {
    title: "Huevos Rancheros",
    price: "$10",
    img: Rancheros,
  },
  {
    title: "Zinger Burger",
    price: "$30",
    img: Burger,
  },
  {
    title: "Smashed Avo",
    price: "$30",
    img: Avo,
  },
  {
    title: "Huevos Rancheros",
    price: "$10",
    img: Rancheros,
  },
  {
    title: "Zinger Burger",
    price: "$30",
    img: Burger,
  },
  {
    title: "Smashed Avo",
    price: "$30",
    img: Avo,
  },
  {
    title: "Huevos Rancheros",
    price: "$10",
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
    title: "Total Due",
    amount: "$60.00",
  },
  {
    id: 2,
    title: "Total Paying",
    amount: "$60.00",
  },
  {
    id: 3,
    title: "Pay Left",
    amount: "$00.00",
  },
  {
    id: 4,
    title: "Change",
    amount: "$00.00",
  },
];

export const amountCards: string[] = [
  "$90.00",
  "$100.00",
  "$150.00",
  "$200.00",
];

export const numbersCard: string[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "00",
];
