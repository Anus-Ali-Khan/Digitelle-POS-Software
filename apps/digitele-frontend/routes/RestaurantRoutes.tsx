import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Restaurant/Login";
import Welcome from "../src/pages/Restaurant/Welcome";
import Orders from "../src/pages/Restaurant/Orders";
import RestaurantLayout from "../src/components/RestaurantLayout";
import PayNow from "../src/pages/Restaurant/PayNow";
import AddItems from "../src/pages/Restaurant/AddItems";

const RestaurantRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route element={<RestaurantLayout />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/paynow" element={<PayNow />} />
          <Route path="/additems" element={<AddItems />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RestaurantRoutes;
