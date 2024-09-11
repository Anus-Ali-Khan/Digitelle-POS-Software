import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Restaurant/Login';
import Welcome from '../src/pages/Restaurant/Welcome';
import Orders from '../src/pages/Restaurant/Orders';
import RestaurantLayout from '../src/components/RestaurantLayout';
import PayNow from '../src/pages/Restaurant/PayNow';
import AddItems from '../src/pages/Restaurant/AddItems';
import Users from '../src/pages/Restaurant/Users';
import Stocks from '../src/pages/Restaurant/Stocks';

const RestaurantRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route element={<RestaurantLayout />}>
          <Route path="/items" element={<Orders />} />
          <Route path="/paynow" element={<PayNow />} />
          <Route path="/additems" element={<AddItems />} />
          <Route path="/users" element={<Users />} />
          <Route path="/stocks" element={<Stocks />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RestaurantRoutes;
