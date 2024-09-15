import { useState } from 'react';
import CartItems from './CartItems';
import PaymentSection from './PaymentSection';
import { ItemsTabs } from '../../pages/Restaurant/Items';

type PropsType = {
  setSelectedItemsTab: React.Dispatch<React.SetStateAction<ItemsTabs>>;
};

const PayNow = ({ setSelectedItemsTab }: PropsType) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center w-full ">
      <div className="basis-[70%] w-full bg-[#DADADA] h-[calc(100vh)] overflow-y-auto max-[769px]:basis-[100%] max-[769px]:h-[calc(100vh-64px)]">
        <PaymentSection
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          openModal={openModal}
          setOpenModal={setOpenModal}
          setSelectedItemsTab={setSelectedItemsTab}
        />
      </div>
      <div className="basis-[30%] h-[calc(100vh-96px)] w-full max-[769px]:hidden">
        <CartItems
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          setSelectedItemsTab={setSelectedItemsTab}
        />
      </div>
    </div>
  );
};

export default PayNow;
