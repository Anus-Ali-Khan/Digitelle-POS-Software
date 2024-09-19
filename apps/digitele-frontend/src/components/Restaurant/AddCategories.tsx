import React from 'react';
import Logo from '../../assets/images/Logo.png';
import Divider from '../../assets/images/divider.png';
import CustomInput from './CustomInput';
import { CiUser } from 'react-icons/ci';
import { BsPaperclip } from 'react-icons/bs';
import CustomButton from './CustomButton';
import { ItemsTabs } from '../../pages/Restaurant/Items';
import { Controller, useForm } from 'react-hook-form';
import { AddCategorySchema } from '../../schema/addCategory.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAddCategoryMutation } from '../../redux/Slices/addcategory.slice';

type PropsType = {
  setSelectedItemsTab: React.Dispatch<React.SetStateAction<ItemsTabs>>;
};

const AddCategories = ({ setSelectedItemsTab }: PropsType) => {
  const [categoryMutation, { isLoading }] = useAddCategoryMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCategorySchema>({ resolver: zodResolver(AddCategorySchema) });

  const onSubmit = async (data: AddCategorySchema) => {
    try {
      const response = await categoryMutation({
        name: data.category,
      });
      // console.log(response.data.data);
      if (response.data) {
        setSelectedItemsTab(ItemsTabs.Items);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="bg-Secondary w-full flex justify-center items-center min-h-[calc(100vh-96px)] overflow-y-auto max-[769px]:h-[calc(100vh-64px)] max-[321px]:h-[calc(100vh-56px)] ">
      <div className="bg-white h-[30rem] w-[30%] rounded-md flex flex-col justify-between items-center py-6 px-8 max-[1025px]:w-[40%] max-[768px]:w-[50%] max-[426px]:w-[80%]">
        <img src={Logo} alt="logo" />
        <img src={Divider} alt="divider" />
        <p className="font-poppins font-bold text-4xl max-[426px]:text-3xl">
          Categories
        </p>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="category"
          render={({ field: { onChange, value } }) => (
            <CustomInput
              placeholder="Name"
              type="text"
              borderRadius="lg"
              icon={<CiUser />}
              className="max-[321px]:w-full border-[#CCCCCC] w-[80%] mt-2 "
              name="category"
              onChange={onChange}
              value={value}
              errors={errors}
            />
          )}
        />

        <CustomInput
          placeholder="Upload Pi"
          type="file"
          borderRadius="lg"
          name="image"
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
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default AddCategories;
