import { MdOutlineMail } from "react-icons/md";
import CustomInput from "../../components/Restaurant/CustomInput";
import { CiLock } from "react-icons/ci";
import CustomButton from "../../components/Restaurant/CustomButton";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router";
import LoginFrame from '../../assets/images/LoginFrame.png'
import Logo from '../../assets/images/Logo.png'

const Login = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/welcome");
  };

  return (
    <div className=" bg-gradient-to-r from-[#02A0B9] to-[#043258] h-[100vh]">
      <div className="flex justify-center items-center gap-[10%]  m-auto w-[80%] h-[100%] max-[1024px]:w-[90%]">
        <div className="basis-[40%]  max-[1024px]:basis-[45%] max-[321px]:hidden max-[426px]:hidden max-[596px]:hidden">
          <img src={LoginFrame} className="w-100 h-100" />
        </div>
        <div className="basis-[40%]  max-[1024px]:basis-[50%] max-[426px]:basis-[100%] max-[321px]:basis-[100%] max-[596px]:basis-[80%]">
          <div className="bg-white h-fit rounded-lg flex flex-col  items-center">
            <img
              src={Logo}
              className="max-[769px]:h-[120px] my-8"
            />
            <form className="w-full flex flex-col items-center gap-12">
              <p className="font-bold font-poppins text-[36px] leading-[54px] text-Primary">
                Login
              </p>
              <div className="w-full flex flex-col gap-5 items-center  ">
                <CustomInput
                  placeholder="Email"
                  type="text"
                  icon={<MdOutlineMail size={18} />}
                  width="w-[70%]"
                />
                <CustomInput
                  placeholder="Password"
                  type="password"
                  icon={<CiLock size={18} />}
                  width="w-[70%]"
                />
              </div>
              <div className="flex items-center justify-between gap-4 mx-auto w-[70%] max-[321px]:w-[80%]">
                <CustomButton
                  title="Submit"
                  fontSize="text-[14px]"
                  fontWeight="font-[700]"
                  onClick={handleNavigate}
                  borderRadius="full"
                  paddingHorizontal="px-8"
                  paddingVertical="py-4"
                  className="max-[769px]:px-4 max-[769px]:py-2 max-[769px]:font-normal"
                />
                <p className="font-poppins font-normal text-[14px] text-[#043258] underline max-[769px]:text-[12px]">
                  Forgot Your Password?
                </p>
              </div>
            </form>
            <div className="bg-[#F5F5F5] h-[10%] w-full mt-8 p-6 rounded-b-lg  ">
              <div className="mx-auto w-[70%] flex items-center gap-2 max-[321px]:w-[80%]">
                <p className=" text-[#043258] text-[13px] font-[400] font-poppins">
                  Create your account here
                </p>
                <IoChevronForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
