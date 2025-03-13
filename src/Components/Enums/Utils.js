export const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  export const generateAssetId = () => {
    return `ASSET-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  };
  
  export const filterAssets = (assets, searchTerm) => {
    if (!searchTerm) return assets;
    
    return assets.filter(asset => 
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      asset.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };