import { useState } from 'react';
import StaffMembersTab from '../../components/Restaurant/StaffMembersTab';
import AddStaffTab from '../../components/Restaurant/AddStaffTab';

export enum usersTabs {
  Staff = 'Staff',
  AddStaff = 'AddStaff',
}

const Users = () => {
  const [selectedStaffTab, setSelectedStaffTab] = useState<usersTabs>(
    usersTabs.Staff
  );

  return (
    <div className="bg-Secondary  w-full min-h-[calc(100vh-96px)] overflow-y-auto max-[769px]:h-[calc(100vh-64px)] max-[321px]:h-[calc(100vh-56px)] ">
      {selectedStaffTab === usersTabs.Staff ? (
        <StaffMembersTab setSelectedStaffTab={setSelectedStaffTab} />
      ) : (
        <AddStaffTab setSelectedStaffTab={setSelectedStaffTab} />
      )}
    </div>
  );
};

export default Users;
