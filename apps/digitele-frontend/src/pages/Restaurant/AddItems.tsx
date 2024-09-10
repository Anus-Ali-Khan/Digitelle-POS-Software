import { CiUser } from "react-icons/ci";
import Logo from "../../assets/images/Logo.png";
import Divider from "../../assets/images/divider.png";
import CustomInput from "../../components/Restaurant/CustomInput";
import { LiaCubesSolid } from "react-icons/lia";
import { IoPricetagOutline } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
import { BsPaperclip } from "react-icons/bs";
import CustomButton from "../../components/Restaurant/CustomButton";

const AddItems = () => {
  return (
    <div className="bg-Secondary min-h-screen max-h-fit w-screen flex items-center justify-center ">
      <form className="bg-white h-fit w-[32rem] rounded-xl flex flex-col items-center justify-center py-6 max-[768px]:w-[26rem] max-[769px]:my-6 max-[426px]:w-[22rem] max-[321px]:w-[18rem]">
        <img src={Logo} alt="logo" className="max-[768px]:h-14 max-[321px]:h-12" />
        <img src={Divider} alt="divider" className="mt-4" />
        <h1 className="text-4xl font-bold  font-poppins mt-4 max-[768px]:text-2xl">
          Add Item
        </h1>
        <div className="flex flex-col mt-8 w-[65%] gap-4 h-full max-[768px]:mt-4 max-[426px]:w-[80%] ">
          <CustomInput
            placeholder="Name"
            type="text"
            borderRadius="lg"
            icon={<CiUser />}
            className="max-[321px]:w-full "
          />
          <CustomInput
            placeholder="Quantity"
            type="text"
            borderRadius="lg"
            icon={<LiaCubesSolid />}
            className="max-[321px]:w-full"
          />
          <CustomInput
            placeholder="Sale Price"
            type="text"
            borderRadius="lg"
            icon={<IoPricetagOutline />}
            className="max-[321px]:w-full"
          />
          <div className="flex items-center py-3 gap-2 px-4 rounded-lg border-2 w-full border-[#e3d0d0] max-[769px]:px-2 max-[769px]:py-2  max-[321px]:w-full">
            <TbCategoryPlus />
            <select className="text-[#AEADAD] w-full">
              <option>Choose Category</option>
            </select>
          </div>

          <CustomInput
            placeholder="Upload Pi"
            type="file"
            borderRadius="lg"
            icon={<BsPaperclip />}
            className="max-[321px]:w-full"
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
        />
      </form>
    </div>
  );
};

export default AddItems;
