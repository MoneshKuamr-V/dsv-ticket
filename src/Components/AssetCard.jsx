import { Link } from 'react-router-dom';

const AssetCard = ({ asset }) => {
  return (
    <div className="asset-card">
      <h3>{asset.name}</h3>
      <p>{asset.description}</p>
      <Link to={`/asset/${asset.id}`} className="view-details">View Details</Link>
    </div>
  );
};

export default AssetCard;