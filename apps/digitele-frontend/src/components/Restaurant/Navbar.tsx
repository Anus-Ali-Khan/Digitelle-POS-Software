import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "../../utils/constants";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Sobo from "../../assets/images/sobo.svg";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="bg-white px-4 shadow-2xl border-b h-24 fixed w-full max-[1025px]:px-2 max-[769px]:py-1 max-[769px]:h-16 max-[426px]:px-1">
      <div className="flex items-center justify-between relative ">
        <img
          src={Logo}
          className="h-[67px] w-[286px] max-[769px]:h-[50px] max-[769px]:w-[200px] max-[321px]:w-[100px] max-[321px]:h-[20px] max-[321px]:hidden"
        />
        <div className="flex items-center gap-10 max-[1025px]:gap-2 max-[769px]:hidden">
          {navLinks.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center h-24 w-24"
            >
              {item.icon}
              <p className="text-[12px] font-poppins text-Primary font-[700]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 w-fit max-[321px]:w-full max-[321px]:justify-between ">
          <div className="flex items-center gap-2 max-[1025px]:gap-1 ">
            <img
              src={Sobo}
              className="h-15 w-15 max-[769px]:h-12 max-[426px]:h-10 "
            />
            <p className="font-poppins text-[18px] font-[700] max-[769px]:text-[16px] max-[426px]:text-[14px] max-[321px]:text-[12px]">
              Sobo Restaurant
            </p>
          </div>
          <div className="">
            {!open ? (
              <GiHamburgerMenu
                size={25}
                className="text-Primary min-[769px]:hidden "
                onClick={() => setOpen((prev) => !prev)}
              />
            ) : (
              <RxCross2
                size={25}
                className="hover:text-red-600 cursor-pointer "
                onClick={() => setOpen(false)}
              />
            )}
          </div>
        </div>
        {open ? (
          <div className=" min-[769px]:hidden w-[250px] px-3 py-2 rounded-md absolute top-12 -right-2 bg-white z-10 ">
            <div className="flex flex-col gap-2 mt-2  ">
              {navLinks.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2  border-b border-[#AEADAD] py-2 px-1 hover:text-white hover:bg-Primary cursor-pointer"
                >
                  {item.icon}
                  <p className="text-[12px] font-poppins text-Primary font-[700] hover:text-white">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
