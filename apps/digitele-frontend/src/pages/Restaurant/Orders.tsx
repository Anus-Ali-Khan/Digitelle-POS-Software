import { useState } from "react";
import BottomTab from "../../components/Restaurant/BottomTab";
import CartItems from "../../components/Restaurant/CartItems";
import FoodItems from "../../components/Restaurant/FoodItems";

const Orders = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-between w-full min-h-[calc(100vh)]">
      <div className="flex flex-col basis-[70%] justify-between w-full max-[769px]:basis-[100%]">
        <FoodItems setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />
        <BottomTab />
      </div>
      <div className="basis-[30%] max-[769px]:hidden ">
        <CartItems isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      </div>
    </div>
  );
};

export default Orders;
