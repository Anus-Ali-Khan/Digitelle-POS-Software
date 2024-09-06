import { FaPlus } from "react-icons/fa6";
import CustomButton from "./CustomButton";
import { BsDash } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router";
import Cart from '../../assets/images/cart.svg'
import Divider from '../../assets/images/divider.png'
import Ticket from '../../assets/images/ticket.svg'
import Coupon from '../../assets/images/coupon.svg'
import Discount from '../../assets/images/discount.svg'
import Hold from '../../assets/images/hold.svg'

type CartItemProps = {
  isCartOpen?: boolean;
  setIsCartOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartItems = ({ isCartOpen, setIsCartOpen }: CartItemProps) => {
  const navigate = useNavigate();

  const handleNavigateToPayNow = () => {
    navigate("/paynow");
  };
  return (
    <div
      className={`flex flex-col mt-12 justify-between h-full bg-white max-[321px]:rounded-md`}
    >
      {isCartOpen && (
        <RxCross2
          size={25}
          className="hover:text-red-600 cursor-pointer absolute right-4 "
          onClick={() => setIsCartOpen?.(false)}
        />
      )}
      <div className="basis-1/2  overflow-y-auto ">
        <div className="flex flex-col ">
          <div className="flex items-center justify-center py-6 gap-2 ">
            <img
              src={Cart}
              className="h-[42px] w-[42px]"
            />
            <p className="font-poppins font-[600] text-Primary text-[28px] ">
              Cart Items
            </p>
          </div>
          <img src={Divider}/>
        </div>
        <div className="flex flex-col ">
          <div className="flex justify-around mt-6 items-center gap-6max-[1025px]:gap-4 max-[1025px]:px-2">
            <div className="flex flex-col justify-center">
              <p className="font-poppins text-Primary text-[16px] font-[400]">
                Beaf Steak
              </p>
              <CustomButton
                title="Fast Food"
                fontSize="text-[10px]"
                fontWeight="font-[500]"
                borderRadius="full"
                paddingHorizontal="px-1"
                paddingVertical="py-1"
              />
            </div>
            <div className="flex items-center justify-center gap-6 max-[1025px]:gap-2">
              <div className="flex items-center gap-1">
                <img
                  src={Ticket}
                  className="h-[17px] w-[17px]"
                />
                <p>$10</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="  bg-Primary rounded-full p-1 ">
                  <FaPlus size={10} className="text-white" />
                </div>
                <p className="font-poppins font-[400] text-[22px] text-[#AEADAD] border rounded-sm px-4 py-2">
                  1
                </p>
                <div className="bg-[#FF0000] rounded-full">
                  <BsDash size={16} className="text-white  " />
                </div>
                <div className="bg-[#FF0000] rounded-full p-1 ">
                  <RxCross2 size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around mt-6 items-center gap-6 max-[1025px]:gap-4 max-[1025px]:px-2">
            <div className="flex flex-col justify-center">
              <p className="font-poppins text-Primary text-[16px] font-[400]">
                Beaf Steak
              </p>
              <CustomButton
                title="Fast Food"
                fontSize="text-[10px]"
                fontWeight="font-[500]"
                borderRadius="full"
                paddingHorizontal="px-1"
                paddingVertical="py-1"
              />
            </div>
            <div className="flex items-center justify-center gap-6 max-[1025px]:gap-2">
              <div className="flex items-center gap-1">
                <img
                  src={Ticket}
                  className="h-[17px] w-[17px]"
                />
                <p>$10</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="  bg-Primary rounded-full p-1 ">
                  <FaPlus size={10} className="text-white" />
                </div>
                <p className="font-poppins font-[400] text-[22px] text-[#AEADAD] border rounded-sm px-4 py-2">
                  1
                </p>
                <div className="bg-[#FF0000] rounded-full">
                  <BsDash size={16} className="text-white  " />
                </div>
                <div className="bg-[#FF0000] rounded-full p-1 ">
                  <RxCross2 size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around mt-6 items-center gap-6 max-[1025px]:gap-4 max-[1025px]:px-2">
            <div className="flex flex-col justify-center">
              <p className="font-poppins text-Primary text-[16px] font-[400]">
                Beaf Steak
              </p>
              <CustomButton
                title="Fast Food"
                fontSize="text-[10px]"
                fontWeight="font-[500]"
                borderRadius="full"
                paddingHorizontal="px-1"
                paddingVertical="py-1"
              />
            </div>
            <div className="flex items-center justify-center gap-6 max-[1025px]:gap-2">
              <div className="flex items-center gap-1">
                <img
                  src={Ticket}
                  className="h-[17px] w-[17px]"
                />
                <p>$10</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="  bg-Primary rounded-full p-1 ">
                  <FaPlus size={10} className="text-white" />
                </div>
                <p className="font-poppins font-[400] text-[22px] text-[#AEADAD] border rounded-sm px-4 py-2">
                  1
                </p>
                <div className="bg-[#FF0000] rounded-full">
                  <BsDash size={16} className="text-white  " />
                </div>
                <div className="bg-[#FF0000] rounded-full p-1 ">
                  <RxCross2 size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col border-t border-[#E3E3E3]">
        <div className="flex flex-col  mx-auto w-[80%] py-6 max-[1025px]:w-[85%] ">
          <div className="flex justify-between items-center">
            <p className="font-[400] font-poppins text-[14px] text-[#AEADAD]">
              Subtotal
            </p>
            <p className="font-[400] font-poppins text-[14px] text-Primary">
              $20
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-[400] font-poppins text-[14px] text-[#AEADAD]">
              Taxes
            </p>
            <p className="font-[400] font-poppins text-[14px] text-Primary">
              $0
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-[400] font-poppins text-[14px] text-[#AEADAD]">
              Discount
            </p>
            <p className="font-[400] font-poppins text-[14px] text-Primary">
              $0
            </p>
          </div>
          <div className="flex justify-between items-center  ">
            <p className="font-[400] font-poppins text-[14px] text-[#AEADAD]">
              Applied Coupon
            </p>
            <p className="font-[400] font-poppins text-[14px] text-Primary">
              $0
            </p>
          </div>
          <div className="flex mt-6 justify-between">
            <div className="flex flex-col border border-[#AEADAD] rounded-md items-center px-6 py-3 gap-1 max-[1025px]:px-2 ">
              <img
                src={Coupon}
                className="h-[26px] w-[26px]"
              />
              <p className="font-poppins text-[14px] text-Primary font-[400]">
                Coupon
              </p>
            </div>
            <div className="flex flex-col border border-[#AEADAD] rounded-md items-center px-6 py-3 gap-1 max-[1025px]:px-2 ">
              <img
                src={Discount}
                className="h-[26px] w-[26px]"
              />
              <p className="font-poppins text-[14px] text-Primary font-[400]">
                Discount
              </p>
            </div>
            <div className="flex flex-col border border-[#AEADAD] rounded-md items-center px-4 py-3 gap-1 max-[1025px]:px-1 ">
              <img
                src={Hold}
                className="h-[26px] w-[26px]"
              />
              <p className="font-poppins text-[14px] text-Primary font-[400]">
                Hold Order
              </p>
            </div>
          </div>
        </div>
        <div
          className="h-[75px] bg-Secondary  max-[321px]:rounded-b-md cursor-pointer"
          onClick={handleNavigateToPayNow}
        >
          <div className="flex justify-between items-center mx-auto w-[80%] h-full ">
            <p className="font-poppins font-[700] text-[22px] text-white">
              Pay Now
            </p>
            <p className="font-poppins font-[600] text-[22px] text-white">
              $20
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
