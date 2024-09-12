import React from 'react';
import { stockTabs } from '../../pages/Restaurant/Stocks';
import Logo from '../../assets/images/Logo.png';
import Dividerpng from '../../assets/images/divider.png';
import CustomInput from './CustomInput';
import { CiUser } from 'react-icons/ci';
import { LiaCubesSolid } from 'react-icons/lia';
import { IoPricetagOutline } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import CustomButton from './CustomButton';

type PropsType = {
  setSelectedStockTab: React.Dispatch<React.SetStateAction<stockTabs>>;
};

const AddStock = ({ setSelectedStockTab }: PropsType) => {
  return (
    <div className="bg-white h-fit w-[60%] m-auto mt-12 rounded-lg flex flex-col items-center py-4 gap-4 max-[1025px]:w-[80%] max-[769px]:mb-4 max-[769px]:w-[90%]">
        <img src={Logo} alt="logo" />
        <img src={Dividerpng} alt="" />
        <p className="font-bold text-4xl font-poppins">Add Stock</p>
        <p className='ml-36 max-[426px]:hidden'>Add Ingredients</p>
        <div className="flex items-center gap-10 w-[85%] max-[426px]:flex-col max-[426px]:gap-4 ">
          <div className="basis-[50%] max-[769px]:basis-[40%] ">
            <CustomInput
              placeholder="Name"
              type="text"
              icon={<CiUser />}
              borderRadius="md"
              className="border-[#CCCCCC]"
            />
          </div>
          <p className='min-[426px]:hidden'>Add Ingredients</p>
          <div className="flex items-center basis-[50%] gap-4 ">
            <select className="flex items-center font-poppins text-sm py-3 text-[#AEADAD]  gap-2 px-4  border-2 w-full border-[#CCCCCC] max-[769px]:px-2 max-[769px]:py-2 max-[321px]:w-[80%] rounded-md">
              <option>Stock</option>
            </select>
            <div className="text-[#AEADAD] text-sm font-poppins border-2 border-[#CCCCCC] flex items-center py-3 gap-2 px-4 rounded-xl">
              <p>1</p>
            </div>
            <select className="flex items-center text-sm font-poppins py-3 px-2  w-[50%] border-2 text-[#AEADAD]  border-[#CCCCCC] rounded-md max-[426px]:px-1 max-[426px]:w-[70%]">
              <option className="">Kg</option>
            </select>
            <div className="text-white bg-Secondary rounded-full p-2">
              <FaPlus size={20} />
            </div>
          </div>
        </div>
        <div className="flex items-center w-[85%] gap-10">
          <div className="basis-[50%]  max-[769px]:basis-[40%]  max-[426px]:basis-[80%] max-[426px]:m-auto">
            <CustomInput
              placeholder="Quantity"
              type="text"
              borderRadius="lg"
              icon={<LiaCubesSolid />}
              className="max-[321px]:w-full border-[#CCCCCC]"
            />
          </div>
          <div className="flex basis-[50%] gap-8 max-[426px]:hidden">
            <div className="text-[#AEADAD] text-sm w-[50%] font-poppins border-2 border-[#CCCCCC] flex items-center justify-between py-3 gap-2 px-4 rounded-lg  max-[769px]:px-2">
              <p>Carrot 2kg</p>
              <div className="bg-Secondary rounded-full p-1 ">
                <RxCross2 size={16} className="text-white" />
              </div>
            </div>
            <div className="text-[#AEADAD] text-sm w-[50%] font-poppins border-2 border-[#CCCCCC] flex items-center justify-between py-3 gap-2 px-4 rounded-lg max-[769px]:px-2">
              <p>Cheese 1kg</p>
              <div className="bg-Secondary rounded-full p-1 ">
                <RxCross2 size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-[85%] gap-10">
          <div className="basis-[50%]  max-[769px]:basis-[40%] max-[426px]:basis-[80%] max-[426px]:m-auto">
            <CustomInput
              placeholder="Price"
              type="text"
              borderRadius="lg"
              icon={<IoPricetagOutline />}
              className="max-[321px]:w-full border-[#CCCCCC]"
            />
          </div>
          <div className="flex basis-[50%] gap-8 max-[426px]:hidden">
            <div className="text-[#AEADAD] w-[50%] text-sm font-poppins border-2 border-[#CCCCCC] flex items-center justify-between py-3 gap-2 px-4 rounded-lg ">
              <p>Bun 2Pcs</p>
              <div className="bg-Secondary rounded-full p-1 ">
                <RxCross2 size={16} className="text-white" />
              </div>
            </div>
            <div className="text-[#AEADAD] w-[50%] text-sm font-poppins border-2 border-[#CCCCCC] flex items-center justify-between py-3 gap-2 px-4 rounded-lg max-[769px]:px-2">
              <p>Potato 5kg</p>
              <div className="bg-Secondary rounded-full p-1 ">
                <RxCross2 size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      
     
        <div className="h-[0.1rem] bg-[#E3E3E3] w-[50%] mt-4"></div>
        <CustomButton
          title="Add Stock"
          bgColor="bg-Primary"
          className="border-Primary px-6 py-4 font-poppins mb-2"
          onClick={() => setSelectedStockTab(stockTabs.AvailableStocks)}
        />
      
    </div>
  );
};

export default AddStock;
