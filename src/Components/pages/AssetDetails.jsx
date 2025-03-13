import { useParams } from 'react-router-dom';
import { useAppContext } from '../Context/AppContext';

const AssetDetails = () => {
  const { id } = useParams();
  const { assetList } = useAppContext();
  const asset = assetList.find(asset => asset.id === parseInt(id));

  if (!asset) {
    return <div className="asset-details">Asset not found</div>;
  }

  return (
    <div className="asset-details">
      <h2>{asset.name}</h2>
      <p>{asset.description}</p>
      {/* Additional asset details would go here */}
    </div>
  );
};

export default AssetDetails;