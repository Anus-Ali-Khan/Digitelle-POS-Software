import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Restaurant/Login';
import Welcome from '../src/pages/Restaurant/Welcome';
import Items from '../src/pages/Restaurant/Items';
import RestaurantLayout from '../src/components/RestaurantLayout';
import Users from '../src/pages/Restaurant/Users';
import Stocks from '../src/pages/Restaurant/Stocks';
import Orders from '../src/pages/Restaurant/Orders';
import SplashScreen from '../src/pages/Restaurant/SplashScreen';

const RestaurantRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route element={<RestaurantLayout />}>
          <Route path="/items" element={<Items />} />
          <Route path="/users" element={<Users />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RestaurantRoutes;
