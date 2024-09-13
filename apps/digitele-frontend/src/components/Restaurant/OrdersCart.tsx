import Divider from '../../assets/images/divider.png';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { RiArrowGoBackFill } from 'react-icons/ri';

const OrdersCart = () => {
  return (
    <div className="flex flex-col h-full ">
      <p className=" basis-[5%] font-poppins font-semibold text-2xl my-4  mx-8 bg-Primary text-white w-fit h-fit py-2 px-4 rounded-md max-[426px]:mx-6 max-[426px]:text-xl max-[376px]:text-base max-[321px]:mx-4">
        Order #406
      </p>
      <img src={Divider} alt="divider" />
      <div className=" flex flex-col basis-[55%] px-8 py-4 gap-4 overflow-y-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <p className="font-poppins font-normal text-base text-Primary">
              Beaf Steak
            </p>
            <p className="font-poppins text-sm font-normal text-Primary">
              $10.00 x 3
            </p>
          </div>
          <p className="font-poppins text-sm font-normal text-Primary">$10</p>
        </div>
        <img src={Divider} alt="divider" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <p className="font-poppins font-normal text-base text-Primary">
              Zinger Burger
            </p>
            <p className="font-poppins text-sm font-normal text-Primary">
              $10.00 x 3{' '}
            </p>
          </div>
          <p className="font-poppins text-sm font-normal text-Primary">$10</p>
        </div>
        <img src={Divider} alt="divider" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <p className="font-poppins font-normal text-base text-Primary">
              Zinger Burger
            </p>
            <p className="font-poppins text-sm font-normal text-Primary">
              $10.00 x 3{' '}
            </p>
          </div>
          <p className="font-poppins text-sm font-normal text-Primary">$10</p>
        </div>
        <img src={Divider} alt="divider" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <p className="font-poppins font-normal text-base text-Primary">
              Zinger Burger
            </p>
            <p className="font-poppins text-sm font-normal text-Primary">
              $10.00 x 3{' '}
            </p>
          </div>
          <p className="font-poppins text-sm font-normal text-Primary">$10</p>
        </div>
      </div>
      <div className="basis-[40%] border-t-2 border-[#E3E3E3]">
        <div className="px-8 pt-4">
          <div className="flex items-center justify-between font-poppins font-normal text-sm text-[#AEADAD]">
            <p>Subtotal</p>
            <p className="text-Primary">$10</p>
          </div>
          <div className="flex items-center justify-between font-poppins font-normal text-sm text-[#AEADAD]">
            <p>Taxes</p>
            <p className="text-Primary">$0</p>
          </div>
          <div className="flex items-center justify-between font-poppins font-normal text-sm text-[#AEADAD]">
            <p>Discount</p>
            <p className="text-Primary">$0</p>
          </div>
          <div className="flex items-center justify-between font-poppins font-normal text-sm text-[#AEADAD]">
            <p>Applied Coupons</p>
            <p className="text-Primary">$0</p>
          </div>
          <div className="flex items-center justify-between font-poppins mt-2">
            <p className="text-lg font-semibold text-Primary">Total</p>
            <p className="text-Primary">$60</p>
          </div>
          <div className="flex items-center justify-between mb-2 font-poppins font-normal text-sm text-Primary">
            <p>Change</p>
            <p className="text-Primary">$0</p>
          </div>
          <div className="flex items-center justify-between font-poppins font-normal text-sm text-[#AEADAD]">
            <p>Cash</p>
            <p className="text-Primary">$100</p>
          </div>
          <div className="flex items-center justify-between font-poppins font-normal text-sm text-[#AEADAD]">
            <p>Change</p>
            <p className="text-Primary">$40</p>
          </div>
        </div>
        <div className="bg-Primary text-white h-fit  flex items-center justify-center gap-1 py-4 mt-2">
          <MdOutlineShoppingCart size={30} />
          <p className="font-poppins font-bold text-xl max-[376px]:text-base">Print Invoice</p>
        </div>
        <div className=" text-Primary h-fit  flex items-center justify-center gap-1 py-4">
          <RiArrowGoBackFill size={25} />
          <p className="font-poppins font-bold text-xl max-[376px]:text-base">Refund</p>
        </div>
      </div>
    </div>
  );
};

export default OrdersCart;
