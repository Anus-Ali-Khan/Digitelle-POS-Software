import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { FiPrinter } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

interface propsType extends PropsWithChildren {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  showPrintButton: boolean;
  children: ReactNode | ReactElement;
}

const Modal = ({
  children,
  openModal,
  setOpenModal,
  showPrintButton = true,
}: propsType) => {
  return (
    <Dialog
      open={openModal}
      onClose={() => setOpenModal(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <DialogPanel className="max-w-lg flex flex-col items-center space-y-4 bg-white p-12 rounded-md">
          {children}
          <div className="flex gap-4">
            {showPrintButton ? (
              <button
                onClick={() => setOpenModal(false)}
                className="border border-slate-300 px-6 text-base font-poppins rounded-md py-1 text-Primary flex items-center gap-1 hover:text-white hover:bg-Secondary"
              >
                <FiPrinter /> Print
              </button>
            ) : (
              <></>
            )}
            <button
              onClick={() => setOpenModal(false)}
              className="border border-slate-300 px-4 text-base font-poppins rounded-md py-1 text-Primary flex items-center gap-1 hover:text-white hover:bg-Secondary"
            >
              <RxCross2 /> Cancel
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
