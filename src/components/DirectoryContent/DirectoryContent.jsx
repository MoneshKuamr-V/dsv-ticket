import './DirectoryContent.css';

function DirectoryContent() {
  const assetData = [
    { id: 1, form: 'Bulk Item', description: 'This is an assert application user to store item details.' },
    { id: 2, form: 'Infrastructure Asset', description: 'Infrastructure Asset' },
    { id: 3, form: 'Rack Asset', description: 'Rack Asset' }
  ];

  return (
    <div className="directory-content">
      <div className="asset-form-header">Asset Form</div>
      <table className="asset-table">
        <thead>
          <tr>
            <th>Asset Form</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {assetData.map((asset, index) => (
            <tr key={asset.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td className={asset.form.includes('Infrastructure') ? 'highlight' : ''}>
                {asset.form}
              </td>
              <td>{asset.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DirectoryContent;
