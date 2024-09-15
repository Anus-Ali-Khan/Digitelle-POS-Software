import { useState } from 'react';
import BottomTab from '../../components/Restaurant/BottomTab';
import CartItems from '../../components/Restaurant/CartItems';
import FoodItems from '../../components/Restaurant/FoodItems';
import AddItems from '../../components/Restaurant/AddItems';
import AddCategories from '../../components/Restaurant/AddCategories';
import PayNow from '../../components/Restaurant/PayNow';

export enum ItemsTabs {
  Items = 'Items',
  AddItem = 'AddItem',
  AddCategories = 'AddCategories',
  PayNow = 'PayNow',
}

const Items = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedItemsTab, setSelectedItemsTab] = useState<ItemsTabs>(
    ItemsTabs.Items
  );

  return (
    <div>
      {selectedItemsTab === ItemsTabs.Items ? (
        <div className="flex justify-between items-between w-full h-[calc(100vh-96px)] ">
          <div className="flex flex-col basis-[70%] justify-between w-full max-[769px]:basis-[100%] max-[769px]:h-[calc(100vh-60px)] max-[321px]:h-[calc(100vh-56px)]">
            <FoodItems
              setIsCartOpen={setIsCartOpen}
              isCartOpen={isCartOpen}
              setSelectedItemsTab={setSelectedItemsTab}
            />
            <BottomTab />
          </div>
          <div className="basis-[30%] max-[769px]:hidden ">
            <CartItems
              isCartOpen={isCartOpen}
              setIsCartOpen={setIsCartOpen}
              setSelectedItemsTab={setSelectedItemsTab}
            />
          </div>
        </div>
      ) : selectedItemsTab === ItemsTabs.PayNow ? (
        <PayNow setSelectedItemsTab={setSelectedItemsTab} />
      ) : selectedItemsTab === ItemsTabs.AddItem ? (
        <AddItems setSelectedItemsTab={setSelectedItemsTab} />
      ) : (
        <AddCategories setSelectedItemsTab={setSelectedItemsTab} />
      )}
    </div>
  );
};

export default Items;
