
import React from 'react';
import './Asset.css'

const AssetItem = ({ image, description, direction }) => {
  return (
    <div className={`asset ${direction}`}>
      <div className="asset-card">
        <img src={image} alt="Asset" className="asset-image" />
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AssetItem;
