import { MdOutlineShoppingCart } from "react-icons/md";
import { foodItemsList } from "../../utils/constants";
import CustomButton from "./CustomButton";
import { FaPlus } from "react-icons/fa6";
import { FC } from "react";
import CartItems from "./CartItems";
import { useNavigate } from "react-router";

type FoodItemProps = {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FoodItems: FC<FoodItemProps> = ({ isCartOpen, setIsCartOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray h-[calc(100vh-(96px+75px))] flex flex-col items-center max-[769px]:h-[calc(100vh-(64px+60px))] relative mt-24 ">
      <p className="text-Primary font-poppins font-[700] text-[36px] mt-6">
        Food Items
      </p>
      <div className="flex flex-wrap px-4 justify-around gap-4 mt-2 overflow-y-scroll">
        {foodItemsList.map((item) => (
          <div
            style={{ backgroundImage: `url(${item.img})` }}
            className="flex flex-col text-white h-[200px] w-[200px] rounded-md bg-cover relative max-[426px]:w-[300px] max-[321px]:w-[250px]"
          >
            <div className="h-[200px] w-[200px] bg-black rounded-md opacity-20 max-[426px]:w-[300px] max-[321px]:w-[250px]"></div>
            <div className="p-4 absolute">
              <p className="font-poppins font-[700] text-[16px] text-[#FFFFFF]">
                {item.title}
              </p>
              <p className="font-[400] font-poppins text-[14px] text-[#FFFFFF]">
                {item.price}
              </p>
            </div>
            <div className="absolute bottom-2 right-2 bg-Secondary rounded-full p-2">
              <FaPlus size={20} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-16 py-4 max-[426px]:gap-10 max-[376px]:w-[80%] max-[376px]:mx-auto max-[376px]:gap-4 max-[376px]:items-start">
        <CustomButton
          title="Add Item"
          paddingHorizontal="px-6"
          paddingVertical="py-4"
          fontSize="text-[14px]"
          fontWeight="font-[700]"
          onClick={() => navigate("/additems")}
          className="max-[769px]:px-4 max-[769px]:py-3 max-[321px]:text-[12px] max-[321px]:px-3"
        />
        <CustomButton
          title="Add Categories"
          paddingHorizontal="px-6"
          paddingVertical="py-4"
          fontSize="text-[14px]"
          fontWeight="font-[700]"
          className="max-[769px]:px-4 max-[769px]:py-3 max-[321px]:text-[12px] max-[321px]:px-3"
        />
      </div>
      <div className="min-[769px]:hidden absolute right-8 bottom-3 bg-white rounded-full p-3 hover:text-white hover:bg-Primary max-[426px]:right-2">
        <MdOutlineShoppingCart
          size={30}
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
      </div>

      {isCartOpen && (
        <div className="absolute z-10 bottom-0 top-0 min-[769px]:hidden max-[321px]:px-3 max-[321px]:py-2 max-[321px]:rounded-md">
          <CartItems isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        </div>
      )}
    </div>
  );
};

export default FoodItems;
