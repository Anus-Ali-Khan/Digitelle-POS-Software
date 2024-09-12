import React from 'react';
import CustomButton from './CustomButton';
import { stockTabs } from '../../pages/Restaurant/Stocks';
import Logo from '../../assets/images/Logo.png';
import Dividerpng from '../../assets/images/divider.png';
import { stockList } from '../../utils/constants';

type PropsType = {
  setSelectedStockTab: React.Dispatch<React.SetStateAction<stockTabs>>;
};

const AvailableStocks = ({ setSelectedStockTab }: PropsType) => {
  return (
    <div>
      <div className=" flex items-end justify-end pt-8 pr-8 font-bold text-sm max">
        <CustomButton
          title="Add Stock"
          bgColor="bg-Primary"
          className="border-Primary px-6 py-4 font-poppins mb-2"
          onClick={() => setSelectedStockTab(stockTabs.AddStock)}
        />
      </div>
      <div className="bg-white flex flex-col gap-2  py-6 px-4 items-center h-[35rem] w-[40%] m-auto rounded-lg shadow-xl mb-4 max-[769px]:w-[50%] ">
        <img src={Logo} alt='logo'/>
        <img src={Dividerpng} alt='' />
        <p className="font-bold text-4xl font-poppins">Stock</p>
        <table className="h-[20rem] overflow-y-scroll w-[85%] max-[769px]:w-[95%]   ">
          <thead className="">
            <tr className=" border border-[#CCCCCC] font-poppins font-normal text-sm">
              <th className="py-2 ">Item</th>
              <th className="py-2">Price</th>
              <th className="py-2">Date</th>
              <th className="py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {stockList.map((stock, index) => (
              <tr
                key={stock.id}
                className={`self-center text-center font-poppins font-normal text-sm  ${
                  index !== stockList.length - 1
                    ? 'border-b border-[#E3E3E3]'
                    : ''
                } `}
              >
                <td>{stock.item}</td>
                <td>{stock.price}</td>
                <td>{stock.date}</td>
                <td>{stock.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="h-[0.1rem] w-[80%] bg-[#E3E3E3] mt-3"></div>
        <CustomButton
          title="Download"
          bgColor="bg-Primary"
          className="border-Primary px-6 py-4 font-poppins mb-2"
          onClick={() => setSelectedStockTab(stockTabs.AddStock)}
        />
      </div>
    </div>
  );
};

export default AvailableStocks;
