import KioskRoutes from "../routes/KioskRoutes";
import RestaurantRoutes from "../routes/RestaurantRoutes";

const App = () => {
  return (
    <div>
      <RestaurantRoutes />
      <KioskRoutes />
    </div>
  );
};

export default App;
