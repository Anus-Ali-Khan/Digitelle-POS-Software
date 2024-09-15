import React from 'react';
import Modal from './Modal';
import { MdOutlineShoppingCart } from 'react-icons/md';

type PropsType = {
  openPrintSlipModal: boolean;
  setOpenPrintSlipModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenPrintModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const PrintSlipModal = ({
  openPrintSlipModal,
  setOpenPrintSlipModal,
  setOpenPrintModal,
}: PropsType) => {
  return (
    <Modal
      openModal={openPrintSlipModal}
      setOpenModal={setOpenPrintSlipModal}
      showPrintButton={false}
      onClick={() => {
        setOpenPrintSlipModal(true), setOpenPrintModal(false);
      }}
      showCancelButton={false}
      modalWidth="w-[100%]"
      classname="shadow-xl "
    >
      <p className="w-full font-semibold">7/30/24, 11:02PM</p>
      <div className="bg-white p-4 rounded-full shadow-2xl ">
        <MdOutlineShoppingCart size={80} />
      </div>

      <p className=" border-t-4 border-b-4 py-2 border-gray border-dashed w-full text-center font-bold text-lg ">
        SALES RECEIPT
      </p>
      <div className="w-full font-poppins">
        <p className="font-bold">
          Order:<span className="font-normal"> #406</span>
        </p>
        <p className="font-bold">
          Date:<span className="font-normal">#406</span>
        </p>
        <p className="font-bold">
          Cashier:<span className="font-normal">#406</span>
        </p>
        <p className="font-bold">
          Customer:<span className="font-normal">#406</span>
        </p>
      </div>
      <table className="w-full font-poppins">
        <thead className="border-t-4 border-b-4 border-gray border-dashed ">
          <tr className="">
            <th className="py-3">Item Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="py-2">Beaf Steak</td>
            <td>$10</td>
            <td>3</td>
            <td>$30.00</td>
          </tr>
          <tr>
            <td>Zinger Burger</td>
            <td>$10</td>
            <td>3</td>
            <td>$30.00</td>
          </tr>
        </tbody>
      </table>
      <p className="font-poppins font-bold text-xl">6 Item(s) Sold</p>
      <div className="flex justify-between w-full border-t-4 border-b-4 border-gray border-dashed py-2 font-poppins font-bold text-lg">
        <p>Total</p>
        <p>$60.00</p>
      </div>
      <div className="flex flex-col  w-full  border-b-4 border-gray border-dashed font-poppins font-medium text-lg pb-2">
        <div className="flex justify-between">
          <p>Tax (Tax)</p>
          <p>$00.00</p>
        </div>
        <div className="flex justify-between ">
          <p>Discount</p>
          <p>0.00</p>
        </div>
      </div>
    </Modal>
  );
};

export default PrintSlipModal;
