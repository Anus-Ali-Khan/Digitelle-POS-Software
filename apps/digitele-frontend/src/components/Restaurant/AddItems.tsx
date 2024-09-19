import { CiUser } from 'react-icons/ci';
import Logo from '../../assets/images/Logo.png';
import Divider from '../../assets/images/divider.png';
import CustomInput from '../../components/Restaurant/CustomInput';
import { LiaCubesSolid } from 'react-icons/lia';
import { IoPricetagOutline } from 'react-icons/io5';
import { TbCategoryPlus } from 'react-icons/tb';
import { BsPaperclip } from 'react-icons/bs';
import CustomButton from '../../components/Restaurant/CustomButton';
import { ItemsTabs } from '../../pages/Restaurant/Items';
import { Controller, useForm } from 'react-hook-form';
import { AddItemSchema } from '../../schema/addItem.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGetAllCategoriesQuery } from '../../redux/Slices/addcategory.slice';
import { CategoryType } from '../../types/apiSlices/category';
import { useAddItemMutation } from '../../redux/Slices/foodCart.slice';

type PropsType = {
  setSelectedItemsTab: React.Dispatch<React.SetStateAction<ItemsTabs>>;
};

const AddItems = ({ setSelectedItemsTab }: PropsType) => {
  const { data: allCategories } = useGetAllCategoriesQuery({});
  const [ItemMutation, { isLoading }] = useAddItemMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddItemSchema>({ resolver: zodResolver(AddItemSchema) });

  const onSubmit = async (data: AddItemSchema) => {
    try {
      const response = await ItemMutation({
        name: data.name,
        price: data.price,
        categoryId: data.category,
      });
      if (response.data) {
        console.log(response.data.data);
        setSelectedItemsTab(ItemsTabs.Items);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-Secondary min-h-screen max-h-fit w-screen flex items-center justify-center ">
      <form className="bg-white h-fit w-[32rem] rounded-xl flex flex-col items-center justify-center py-6 max-[768px]:w-[26rem] max-[769px]:my-6 max-[426px]:w-[22rem] max-[321px]:w-[18rem]">
        <img
          src={Logo}
          alt="logo"
          className="max-[768px]:h-14 max-[321px]:h-12"
        />
        <img src={Divider} alt="divider" className="mt-4" />
        <h1 className="text-4xl font-bold  font-poppins mt-4 max-[768px]:text-2xl">
          Add Item
        </h1>
        <div className="flex flex-col mt-8 w-[65%] gap-4 h-full max-[768px]:mt-4 max-[426px]:w-[80%] ">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="name"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                placeholder="Name"
                type="text"
                borderRadius="lg"
                icon={<CiUser />}
                className="max-[321px]:w-full"
                name="name"
                onChange={onChange}
                value={value}
                errors={errors}
              />
            )}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="quantity"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                placeholder="Quantity"
                type="text"
                borderRadius="lg"
                icon={<LiaCubesSolid />}
                className="max-[321px]:w-full"
                name="quantity"
                onChange={onChange}
                value={value}
                errors={errors}
              />
            )}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="price"
            render={({ field: { onChange, value } }) => (
              <CustomInput
                placeholder="Sale Price"
                type="text"
                borderRadius="lg"
                icon={<IoPricetagOutline />}
                className="max-[321px]:w-full"
                name="price"
                onChange={onChange}
                value={value}
                errors={errors}
              />
            )}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="category"
            render={({ field: { onChange, value } }) => (
              <>
                <div className="flex items-center py-3 gap-2 px-4 rounded-lg border-2 w-full border-[#e3d0d0] max-[769px]:px-2 max-[769px]:py-2  max-[321px]:w-full">
                  <TbCategoryPlus />
                  <select
                    className="text-[#AEADAD] w-full"
                    value={value}
                    onChange={onChange}
                    defaultValue="default"
                  >
                    <option disabled value="default">
                      Choose Category
                    </option>
                    {allCategories?.data?.map((item: CategoryType) => (
                      <option value={item._id} key={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="text-red-600 font-poppins text-sm">
                  {errors ? errors.category?.message : ''}
                </p>
              </>
            )}
          />
          <CustomInput
            placeholder="Upload Pic"
            type="file"
            borderRadius="lg"
            icon={<BsPaperclip />}
            className="max-[321px]:w-full"
            name="picture"
          />
        </div>
        <div className="h-[0.1rem] bg-slate-200 w-[80%] mt-8"></div>
        <CustomButton
          title="Add Stock"
          bgColor="bg-Primary"
          paddingHorizontal="px-6"
          paddingVertical="py-4"
          borderRadius="xl"
          className="mt-4"
          onClick={handleSubmit(onSubmit)}
        />
      </form>
    </div>
  );
};

export default AddItems;
