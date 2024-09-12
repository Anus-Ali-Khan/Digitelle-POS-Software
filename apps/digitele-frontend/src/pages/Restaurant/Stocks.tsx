import React, { useState } from 'react';
import AvailableStocks from '../../components/Restaurant/AvailableStocks';
import AddStock from '../../components/Restaurant/AddStock';

export enum stockTabs {
  AvailableStocks = 'AvailableStocks',
  AddStock = 'AddStock',
}
const Stocks = () => {
  const [selectedStockTab, setSelectedStockTab] = useState<stockTabs>(
    stockTabs.AvailableStocks
  );

  return (
    <div className="bg-Secondary  w-full min-h-[calc(100vh-96px)] overflow-y-auto max-[769px]:h-[calc(100vh-64px)] max-[321px]:h-[calc(100vh-56px)] ">
      {selectedStockTab === stockTabs.AvailableStocks ? (
        <AvailableStocks setSelectedStockTab={setSelectedStockTab} />
      ) : (
        <AddStock setSelectedStockTab={setSelectedStockTab} />
      )}
    </div>
  );
};

export default Stocks;
