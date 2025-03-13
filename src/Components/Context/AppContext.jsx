import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [assetList, setAssetList] = useState([
    { id: 1, name: 'Bulk Item', description: 'This is an asset application user to store item details.' },
    { id: 2, name: 'Infrastructure Asset', description: 'Infrastructure Asset' },
    { id: 3, name: 'Rack Asset', description: 'Rack Asset' }
  ]);

  return (
    <AppContext.Provider value={{ selectedAsset, setSelectedAsset, assetList, setAssetList }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);