import { useEffect } from "react";
import Modal from "./Modal";
import { Description } from "@headlessui/react";
import { Commet } from "react-loading-indicators";

type PropsType = {
  openLoaderModal: boolean;
  setOpenLoaderModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenPrintModal:React.Dispatch<React.SetStateAction<boolean>> 
};

const LoadingModal = ({ openLoaderModal, setOpenLoaderModal, setOpenPrintModal }: PropsType) => {
  useEffect(() => {
    setTimeout(() => {
      setOpenLoaderModal(false);
      setOpenPrintModal(true)
    }, 2000);
  }, []);

  return (
    <>
      <Modal
        openModal={openLoaderModal}
        setOpenModal={setOpenLoaderModal}
        showPrintButton={false}
      >
        <Description>
          <Commet color="#02A0B9" size="medium" text="" textColor="" />
        </Description>
       
          <p className="font-poppins font-medium text-2xl text-Primary">
            Present Card
          </p>
        
      </Modal>
    </>
  );
};

export default LoadingModal;
