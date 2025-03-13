import { useAppContext } from '../Context/AppContext';
import '../../index.css';

const ServiceDirectory = () => {
  const { assetList } = useAppContext();

  return (
    <div className="service-directory">
      <div className="asset-table-container">
        <table className="asset-table">
          <thead>
            <tr>
              <th className="asset-form-col">Asset Form</th>
              <th className="description-col">Description</th>
            </tr>
          </thead>
          <tbody>
            {assetList.map((asset, index) => (
              <tr key={asset.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td className="asset-form-col">{asset.name}</td>
                <td className="description-col">{asset.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceDirectory;