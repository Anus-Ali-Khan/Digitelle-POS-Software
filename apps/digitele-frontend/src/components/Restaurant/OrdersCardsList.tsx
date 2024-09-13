import React from 'react';
import { OrdersList } from '../../utils/constants';
import { IoChevronForward } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa6';

const OrdersCardsList = () => {
  return (
    <div className="flex flex-col gap-4 ">
      {OrdersList.map((order) => (
        <div key={order.orderNo} className="flex items-center justify-between w-full h-fit bg-white border-2 border-Secondary rounded-md shadow-sm px-4 py-2 max-[426px]:flex-col ">
          <div className="flex items-center gap-4">
            <IoChevronForward className='text-Secondary max-[321px]:hidden'/>
            <div className="flex flex-col items-start ">
              <p className='text-Secondary font-poppins font-medium text-lg'>Order#{order.orderNo}</p>
              <div className="flex items-center ">
                <IoMdTime className='h-[10.5px]' />
                <p className='font-poppins font-light text-xs'>{order.datenTime}</p>
              </div>
              <div className="flex items-center">
              <FaRegUser className='h-[10px]'  />
                <p className='font-poppins font-light text-xs'>{order.customerName}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-end '>
            <p className='font-poppins font-medium text-lg text-Secondary'>${order.totalPrice}.00</p>
            <p className='font-poppins font-normal text-sm'>{order.cartItems} Item(s)</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersCardsList;
