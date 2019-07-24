import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ imageUrl, name, price }) => {
  return (
    <div className="item-card">
      <div className="item-image-container">
        <img alt={imageUrl} className="item-image" src={imageUrl} />
        <button className={"card-button"}>Add to cart</button>
      </div>
      <div className="item-bottom">
        <p>{name}</p>
        <p>{price}$</p>
      </div>
    </div>
  );
};

export default CollectionItem;
