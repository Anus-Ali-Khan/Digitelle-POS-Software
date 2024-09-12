import { StaffList } from '../../utils/constants';
import CustomButton from './CustomButton';
import Dividerpng from '../../assets/images/divider.png';
import { usersTabs } from '../../pages/Restaurant/Users';

type PropsType = {
  setSelectedStaffTab: React.Dispatch<React.SetStateAction<usersTabs>>;
};

const StaffMembersTab = ({ setSelectedStaffTab }: PropsType) => {
  return (
    <>
      <div className="flex items-end justify-end pt-8 pr-8 font-bold text-sm max ">
        <CustomButton
          title="Add Staff"
          bgColor="bg-Primary"
          className="border-Primary px-6 py-4 font-poppins mb-2"
          onClick={() => setSelectedStaffTab(usersTabs.AddStaff)}
        />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <p className="font-bold font-poppins text-white text-4xl ">
          Staff Members
        </p>
        <div className=" flex w-[80%] flex-wrap justify-between items-center gap-8 mt-4 mb-8 max-[769px]:justify-around">
          {StaffList.map((item) => (
            <div
              key={item.id}
              className="bg-white h-56 w-56 rounded-md flex flex-col items-center justify-center gap-2 shadow-xl "
            >
              {item.profilePic}
              <img src={Dividerpng} alt="divider" />
              <p className="font-semibold font-poppins text-lg">{item.name}</p>
              <div className="bg-Secondary text-white rounded-full p-2">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaffMembersTab;
