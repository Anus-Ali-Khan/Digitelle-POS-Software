import { useState } from 'react';
import BottomTab from '../../components/Restaurant/BottomTab';
import CartItems from '../../components/Restaurant/CartItems';
import FoodItems from '../../components/Restaurant/FoodItems';
import { useOutletContext } from 'react-router';
import { tabs } from '../../components/RestaurantLayout';

const Orders = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedTab] = useOutletContext<string>();

  return (
    <div>
      {selectedTab === tabs.Items && (
        <div className="flex justify-between items-between w-full h-[calc(100vh-96px)] ">
          <div className="flex flex-col basis-[70%] justify-between w-full max-[769px]:basis-[100%] max-[769px]:h-[calc(100vh-60px)] max-[321px]:h-[calc(100vh-56px)]">
            <FoodItems setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />
            <BottomTab />
          </div>
          <div className="basis-[30%] max-[769px]:hidden ">
            <CartItems isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
