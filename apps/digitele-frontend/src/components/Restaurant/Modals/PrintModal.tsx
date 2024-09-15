import Modal from './Modal';
import { Description } from '@headlessui/react';
import { FiPrinter } from 'react-icons/fi';

type PropsType = {
  openPrintModal: boolean;
  setOpenPrintModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenPrintSlipModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const PrintModal = ({
  openPrintModal,
  setOpenPrintModal,
  setOpenPrintSlipModal,
}: PropsType) => {
  return (
    <Modal
      openModal={openPrintModal}
      setOpenModal={setOpenPrintModal}
      showPrintButton={true}
      icon={<FiPrinter />}
      buttonTitle="Print"
      showCancelButton={true}
      onClick={() => {
        setOpenPrintModal(false), setOpenPrintSlipModal(true);
      }}
    >
      <Description>Print Receipt</Description>

      <p className="font-poppins font-medium  text-Primary">
        Order #406 is completed
      </p>
    </Modal>
  );
};

export default PrintModal;
