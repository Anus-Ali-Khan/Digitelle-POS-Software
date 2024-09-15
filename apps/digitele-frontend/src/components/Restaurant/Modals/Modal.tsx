import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { RxCross2 } from 'react-icons/rx';

interface propsType extends PropsWithChildren {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  showPrintButton: boolean;
  children: ReactNode | ReactElement;
  buttonTitle?: string;
  icon?: ReactNode;
  onClick?: () => void;
  showCancelButton: boolean;
  modalWidth?: string;
  classname?: string;
}

const Modal = ({
  children,
  openModal,
  setOpenModal,
  showPrintButton = true,
  buttonTitle,
  icon,
  onClick,
  showCancelButton,
  modalWidth,
  classname,
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
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 max-[769px]:pt-16  overflow-auto max-[426px]:pt-36 ">
        {/* The actual dialog panel  */}
        <DialogPanel
          className={`max-w-lg flex flex-col items-center space-y-4 bg-white p-12 rounded-md ${modalWidth} ${classname}`}
        >
          {children}
          <div className="flex gap-4">
            {showPrintButton ? (
              <button
                onClick={onClick}
                className="border border-slate-300 px-6 text-base font-poppins rounded-md py-1 text-Primary flex items-center gap-1 hover:text-white hover:bg-Secondary"
              >
                {icon} {buttonTitle}
              </button>
            ) : (
              <></>
            )}

            {showCancelButton ? (
              <button
                onClick={() => setOpenModal(false)}
                className="border border-slate-300 px-4 text-base font-poppins rounded-md py-1 text-Primary flex items-center gap-1 hover:text-white hover:bg-Secondary"
              >
                <RxCross2 /> Cancel
              </button>
            ) : (
              <></>
            )}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
