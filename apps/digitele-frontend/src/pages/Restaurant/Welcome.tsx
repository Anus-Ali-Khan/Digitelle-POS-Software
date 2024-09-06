import { useNavigate } from "react-router";
import CustomButton from "../../components/Restaurant/CustomButton";
import DineIn from '../../assets/images/Dinein.png'
import Takeaway from '../../assets/images/takeaway.png'

const Welcome = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/orders");
  };
  return (
    <div className=" bg-gradient-to-r from-[#02A0B9] to-[#043258] h-[100vh]">
      <div className="flex flex-col justify-center gap-10 items-center h-[100vh]">
        <CustomButton
          title="Dine in"
          fontSize="text-[36px]"
          fontWeight="font-[700]"
          paddingHorizontal="px-32"
          paddingVertical="py-2"
          icon={
            <img
              src={DineIn}
              className="w-15 h-15 max-[376px]:w-10 max-[376px]:h-8"
            />
          }
          className="border-Secondary max-[426px]:px-20 max-[376px]:px-14 max-[376px]:text-[20px]"
          onClick={handleNavigate}
        />
        <div className="h-[0.1rem] bg-white w-[30%] max-[426px]:w-[80%] max-[376px]:w-[60%]" />
        <CustomButton
          title="Takeaway"
          fontSize="text-[36px]"
          fontWeight="font-[700]"
          paddingHorizontal="px-24"
          paddingVertical="py-2"
          className="border-Secondary max-[426px]:px-12 w-15 h-15  max-[376px]:text-[20px] max-[376px]:px-10"
          icon={
            <img
              src={Takeaway}
              className="w-15 h-15 max-[376px]:w-10 max-[376px]:h-8"
            />
          }
          onClick={handleNavigate}
        />
      </div>
    </div>
  );
};

export default Welcome;
