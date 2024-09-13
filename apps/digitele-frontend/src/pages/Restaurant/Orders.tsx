import React from 'react';
import OrdersCardsList from '../../components/Restaurant/OrdersCardsList';
import OrdersCart from '../../components/Restaurant/OrdersCart';

const Orders = () => {
  return (
    <div className="flex h-[calc(100vh-96px)] max-[769px]:h-[calc(100vh-64px)] max-[321px]:h-[calc(100vh-56px)]">
      <div className="basis-[65%] bg-gray overflow-y-auto py-4 px-4 max-[426px]:basis-[50%]">
        <OrdersCardsList />
      </div>
      <div className="basis-[35%] max-[426px]:basis-[50%]">
        <OrdersCart />
      </div>
    </div>
  );
};

export default Orders;
