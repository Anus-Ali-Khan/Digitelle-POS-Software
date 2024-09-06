
import Modal from "./Modal";
import { Description } from "@headlessui/react";

type PropsType = {
  openPrintModal: boolean;
  setOpenPrintModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const PrintModal = ({openPrintModal,setOpenPrintModal}: PropsType) => {
 
  return (
    <>
      <Modal
        openModal={ openPrintModal}
        setOpenModal={setOpenPrintModal}
        showPrintButton={true}
      >
        <Description>Print Receipt</Description>
        <p>
          <p className="font-poppins font-medium  text-Primary">
            Order #406 is completed
          </p>
        </p>
      </Modal>
    </>
  );
};

export default PrintModal;
