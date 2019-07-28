import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop-selector";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);
