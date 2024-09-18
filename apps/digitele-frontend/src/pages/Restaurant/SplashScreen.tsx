import { useEffect } from 'react';
import Logo from '../../assets/images/splashlogo.svg';
import { useNavigate } from 'react-router';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <img src={Logo} className="h-72" />
    </div>
  );
};

export default SplashScreen;
