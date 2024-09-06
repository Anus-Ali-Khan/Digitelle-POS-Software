import BurgerBottom from '../../assets/images/burgerbottom.svg'
import Salad from '../../assets/images/salad.png'
import Sandwiches from '../../assets/images/sandwiches.svg'
import Beef from '../../assets/images/beef.svg'



const BottomTab = () => {
  return (
    <div className="  h-[75px] flex items-center justify-between mx-auto w-[90%] max-[769px]:h-[60px]   ">
      <div className="flex flex-col items-center">
        <img
          src={BurgerBottom}
          className="w-[42px] h-[35px] max-[769px]:w-[35px]  "
          alt='burgerBottom'
        />
        <p className="font-[500] text-[10px] font-poppins text-Primary">
          Burgers
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={Salad}
          className="w-[42px] h-[35px] max-[769px]:w-[35px] "
          alt='salad'
        />
        <p className="font-[500] text-[10px] font-poppins text-Primary">
          Salad
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={Sandwiches}
          alt='sandwiches'
          className="w-[42px] h-[35px] max-[769px]:w-[35px] "
        />
        <p className="font-[500] text-[10px] font-poppins text-Primary">
          Sandwiches
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={Beef}
          alt='beef'
          className="w-[42px] h-[35px] max-[769px]:w-[35px]"
        />
        <p className="font-[500] text-[10px] font-poppins text-Primary">Beef</p>
      </div>
    </div>
  );
};

export default BottomTab;
