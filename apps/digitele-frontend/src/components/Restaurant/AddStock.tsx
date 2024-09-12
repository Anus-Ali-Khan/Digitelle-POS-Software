import React from 'react';
import { stockTabs } from '../../pages/Restaurant/Stocks';

type PropsType = {
  setSelectedStockTab: React.Dispatch<React.SetStateAction<stockTabs>>;
};

const AddStock = ({ setSelectedStockTab }: PropsType) => {
  return <div>AddStock</div>;
};

export default AddStock;
