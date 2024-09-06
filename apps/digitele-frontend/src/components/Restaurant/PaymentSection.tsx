import { FaArrowLeft } from "react-icons/fa6";
import { amountCards, numbersCard, paymentCards } from "../../utils/constants";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { MdOutlineShoppingCart } from "react-icons/md";
import CartItems from "./CartItems";
import LoadingModal from "./Modals/LoadingModal";
import PrintModal from "./Modals/PrintModal";
import { useState } from "react";

type PropsType = {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const PaymentSection = ({
  isCartOpen,
  setIsCartOpen,
  openModal,
  setOpenModal,
}: PropsType) => {
const [openLoaderModal,setOpenLoaderModal ] =  useState<boolean>(false)
const [openPrintModal,setOpenPrintModal ] =  useState<boolean>(false)


  return (
    <>
      {openLoaderModal ? (
        <LoadingModal openLoaderModal={openLoaderModal} setOpenLoaderModal={setOpenLoaderModal} setOpenPrintModal={setOpenPrintModal}/>
      ) : null}
      {openPrintModal ? (
        <PrintModal openPrintModal={openPrintModal} setOpenPrintModal={setOpenPrintModal} />
      ) : null}
      <div className={`flex flex-col items-center `}>
        <div className="flex py-4 mx-auto w-[95%] justify-between ">
          {paymentCards.map((item) => (
            <div
              key={item.id}
              className="h-20 w-48 bg-white rounded-md flex flex-col justify-center items-center max-[1025px]:w-40  "
            >
              <p className="font-poppins font-medium text-base  max-[769px]:text-sm">
                {item.title}
              </p>
              <p className="font-poppins font-medium text-2xl  text-Secondary  max-[769px]:text-xl">
                {item.amount}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white mx-auto w-[90%] p-4 rounded-md flex flex-col mt-2">
          <div className="flex gap-4">
            <div className="basis-1/2 ">
              <p className="font-medium font-poppins text-Primary text-sm mb-3">
                Amount
              </p>
              <CustomInput type="text" placeholder="" borderRadius="md" />
            </div>
            <div className="basis-1/2">
              <p className="font-medium font-poppins text-Primary text-sm mb-3">
                Method
              </p>
              <div className="border-2 border-[#e3d0d0] px-4 py-3 rounded-md">
                <select className="w-full">
                  <option className="text-Primary font-poppins font-medium text-sm">
                    Cash
                  </option>
                  <option className="text-Primary font-poppins font-medium text-sm">
                    Card
                  </option>
                </select>
              </div>
            </div>
          </div>
          <CustomButton
            title="Add another Payment Method"
            fontWeight="font-medium"
            fontSize="text-sm"
            paddingVertical="py-3"
            className="mt-2"
          />
        </div>
        <div className="bg-white mx-auto w-[90%] p-4 rounded-md mt-6">
          <CustomInput
            placeholder="Add Order Note"
            type="text"
            borderRadius="md"
            fontSize="text-sm"
            padding="p-4"
          />
        </div>
        <div className="bg-white mx-auto w-[90%]  rounded-md mt-6 p-4 flex flex-col gap-2 mb-8">
          <div className="flex justify-between">
            {amountCards.map((item) => (
              <div
                key={item}
                className="flex justify-center h-[70px] w-[200px] border border-[#e3d0d0] rounded-md max-[1025px]:w-[140px]"
              >
                <p className="self-center font-medium font-poppins text-sm text-Primary">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="flex justify-between gap-2 flex-wrap basis-[70%] ">
              {numbersCard.map((item) => (
                <div
                  key={item}
                  className="flex justify-center  h-[70px] w-[180px] border border-[#e3d0d0] rounded-md max-[1025px]:w-[130px] "
                >
                  <p className="self-center font-medium font-poppins text-sm text-Primary">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col basis-[30%] gap-2">
              <CustomButton
                title="Clear"
                paddingHorizontal="px-4"
                paddingVertical="py-6"
                bgColor="bg-white"
                textColor="text-[#043258]"
                fontWeight="font-medium"
              />
              <CustomButton
                title=""
                icon={<FaArrowLeft size={35} />}
                paddingHorizontal="px-4"
                paddingVertical="py-4"
                bgColor="bg-white"
                textColor="text-Primary"
                fontWeight="font-medium"
              />
              <CustomButton
                title="Pay"
                paddingHorizontal="px-4"
                paddingVertical="py-6"
                fontWeight="font-medium"
                onClick={() => {
                  setOpenLoaderModal(true), 
                  setOpenPrintModal(false)
                }}
              />
              <CustomButton
                title="Cancel"
                paddingHorizontal="px-4"
                paddingVertical="py-6"
                bgColor="bg-Primary"
                fontWeight="font-medium"
              />
            </div>
          </div>
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
    </>
  );
};

export default PaymentSection;
