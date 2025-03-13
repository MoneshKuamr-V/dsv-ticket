import { useState } from 'react';
import { useAppContext } from '../Context/AppContext';
import { generateAssetId } from '../Utils';

const AssetForm = ({ onSubmit, initialData = null }) => {
  const { assetList, setAssetList } = useAppContext();
  const [formData, setFormData] = useState(initialData || {
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (initialData) {
      // Update existing asset
      const updatedList = assetList.map(asset => 
        asset.id === initialData.id ? { ...asset, ...formData } : asset
      );
      setAssetList(updatedList);
    } else {
      // Add new asset
      const newAsset = {
        id: assetList.length + 1,
        ...formData,
      };
      setAssetList([...assetList, newAsset]);
    }
    
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <form className="asset-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Asset Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          required
        />
      </div>
      
      <div className="form-actions">
        <button type="submit" className="submit-button">
          {initialData ? 'Update Asset' : 'Create Asset'}
        </button>
        <button type="button" className="cancel-button" onClick={onSubmit}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AssetForm;
