import { FC, useState } from 'react';
import Navbar from './Restaurant/Navbar';
import { Outlet } from 'react-router';

const RestaurantLayout: FC = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RestaurantLayout;
