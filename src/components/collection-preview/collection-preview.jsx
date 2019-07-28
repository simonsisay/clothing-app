import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./collection-preview.styles.scss";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, history }) => (
  <div className="collection-preview">
    <h1 onClick={() => history.push(`shop/${title.toLowerCase()}`)}>
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
