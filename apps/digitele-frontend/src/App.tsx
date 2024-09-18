import KioskRoutes from '../routes/KioskRoutes';
import RestaurantRoutes from '../routes/RestaurantRoutes';

const App = () => {
  return (
    <>
      <RestaurantRoutes />
      <KioskRoutes />
    </>
  );
};

export default App;
