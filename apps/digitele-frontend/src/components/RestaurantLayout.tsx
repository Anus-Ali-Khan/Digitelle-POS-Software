import { FC } from "react";
import Navbar from "./Restaurant/Navbar";
import { Outlet } from "react-router";

const RestaurantLayout: FC = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
};

export default RestaurantLayout;
