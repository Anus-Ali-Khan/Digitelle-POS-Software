import { CiLock, CiUser } from 'react-icons/ci';
import CustomInput from './CustomInput';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsPaperclip } from 'react-icons/bs';
import Dividerpng from '../../assets/images/divider.png';
import CustomButton from './CustomButton';
import { usersTabs } from '../../pages/Restaurant/Users';

type PropsType = {
  setSelectedStaffTab: React.Dispatch<React.SetStateAction<usersTabs>>;
};

const AddStaffTab = ({ setSelectedStaffTab }: PropsType) => {
  return (
    <div className="flex justify-center items-center w-screen h-[calc(100vh-96px)] ">
      <div className=" bg-white w-[50%] h-fit rounded-md shadow-xl max-[769px]:w-[80%] max-[426px]:w-[90%] ">
        <form className="flex flex-col justify-center items-center gap-8 px-4 py-8 max-[321px]:gap-4">
          <p className="font-poppins font-bold text-4xl max-[321px]:text-3xl">
            Add Staff
          </p>
          <img src={Dividerpng} />
          <div className="flex justify-center items-center gap-4 w-[80%] max-[426px]:w-[100%] max-[321px]:flex-col">
            <CustomInput
              placeholder="Name"
              type="text"
              icon={<CiUser />}
              borderRadius="md"
            />
            <CustomInput
              placeholder="Phone"
              type="text"
              icon={<FiPhone />}
              borderRadius="md"
            />
          </div>
          <div className="flex justify-center items-center gap-4 w-[80%] max-[426px]:w-[100%] max-[321px]:flex-col">
            <CustomInput
              placeholder="Email"
              type="text"
              icon={<AiOutlineMail />}
              borderRadius="md"
            />
            <CustomInput
              placeholder="Password"
              type="password"
              icon={<CiLock />}
              borderRadius="md"
            />
          </div>
          <CustomInput
            placeholder="Upload Picture"
            type="file"
            icon={<BsPaperclip />}
            borderRadius="md"
            width="w-[50%] max-[426px]:w-[70%]"
          />
          <CustomButton
            title="Add Staff"
            bgColor="bg-Primary"
            className="border-Primary px-6 py-3 font-poppins mt-4"
            onClick={() => setSelectedStaffTab(usersTabs.Staff)}
          />
          <div className="bg-[#E3E3E3] h-[0.1rem] w-[60%]"></div>
        </form>
      </div>
    </div>
  );
};

export default AddStaffTab;
