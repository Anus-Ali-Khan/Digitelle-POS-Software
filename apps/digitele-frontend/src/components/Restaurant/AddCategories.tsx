import React from 'react';
import Logo from '../../assets/images/Logo.png';
import Divider from '../../assets/images/divider.png'
import CustomInput from './CustomInput';
import { CiUser } from 'react-icons/ci';
import { BsPaperclip } from 'react-icons/bs';
import CustomButton from './CustomButton';
import { ItemsTabs } from '../../pages/Restaurant/Items';

type PropsType ={
  setSelectedItemsTab : React.Dispatch<React.SetStateAction<ItemsTabs>>
}

const AddCategories = ({setSelectedItemsTab}:PropsType) => {
  return (
    <div className="bg-Secondary w-full flex justify-center items-center min-h-[calc(100vh-96px)] overflow-y-auto max-[769px]:h-[calc(100vh-64px)] max-[321px]:h-[calc(100vh-56px)] ">
      <div className="bg-white h-[30rem] w-[30%] rounded-md flex flex-col justify-between items-center py-6 px-8 max-[1025px]:w-[40%] max-[768px]:w-[50%] max-[426px]:w-[80%]">
        <img src={Logo} alt="logo" />
        <img src={Divider} alt='divider'/>
        <p className='font-poppins font-bold text-4xl max-[426px]:text-3xl'>Categories</p>
        <CustomInput
            placeholder="Name"
            type="text"
            borderRadius="lg"
            icon={<CiUser />}
            className="max-[321px]:w-full border-[#CCCCCC] w-[80%] mt-2 "
            
          />
           <CustomInput
            placeholder="Upload Pi"
            type="file"
            borderRadius="lg"
            icon={<BsPaperclip />}
            className="max-[321px]:w-full border-[#CCCCCC] w-[80%]"
          />
          <div className="h-[0.1rem] bg-slate-200 w-[100%] mt-2"></div>
        <CustomButton
          title="Add Category"
          bgColor="bg-Primary"
          paddingHorizontal="px-6"
          paddingVertical="py-4"
          borderRadius="lg"
          onClick={() => setSelectedItemsTab(ItemsTabs.Items)}
        />

      </div>
    </div>
  );
};

export default AddCategories;
