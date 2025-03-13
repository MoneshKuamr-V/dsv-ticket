import { useState } from 'react';
import { useAppContext } from '../Context/AppContext';
import { filterAssets } from '../Utils';

const SearchPage = () => {
  const { assetList } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const results = filterAssets(assetList, searchTerm);
    setSearchResults(results);
    setHasSearched(true);
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <h2>Advanced Search</h2>
        <div className="search-controls">
          <input 
            type="text" 
            placeholder="Search assets..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input-large"
          />
          <button onClick={handleSearch} className="search-button-large">Search</button>
        </div>
      </div>
      
      {hasSearched && (
        <div className="search-results">
          <h3>Search Results ({searchResults.length})</h3>
          {searchResults.length > 0 ? (
            <table className="asset-table">
              <thead>
                <tr>
                  <th className="asset-form-col">Asset Form</th>
                  <th className="description-col">Description</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((asset, index) => (
                  <tr key={asset.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                    <td className="asset-form-col">{asset.name}</td>
                    <td className="description-col">{asset.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage