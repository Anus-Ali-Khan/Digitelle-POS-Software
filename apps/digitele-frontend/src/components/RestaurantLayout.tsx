import { FC, useState } from "react";
import Navbar from "./Restaurant/Navbar";
import { Outlet } from "react-router";

enum tabs {
  Items='Items',
  Stock='Stock',
  Users='Users',
  Orders='Orders',
  Exit='Exit'
}

const RestaurantLayout: FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs.Items)
  return (
    <div className="flex flex-col">
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
};

export default RestaurantLayout;
