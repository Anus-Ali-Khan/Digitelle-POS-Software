import { useOutletContext } from 'react-router';
import { tabs } from '../../components/RestaurantLayout';

const Users = () => {
  const [selectedTab] = useOutletContext<string>();
  return (
    <div className="bg-Secondary">
      {selectedTab === tabs.Users && (
        <div className="bg-Secondary flex justify-between items-between w-full h-[calc(100vh-96px)] ">
          <p>Add Staff</p>
        </div>
      )}
    </div>
  );
};

export default Users;
