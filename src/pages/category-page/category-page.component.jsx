import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selector";
import CollectionItem from "../../components/collection-item/collection-item";

import "./category-page.styles.scss";

const CategoryPage = ({ collections, match }) => {
  const { title, items } = collections;
  return (
    <div className="category-page">
      <h2>{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.category)(state)
});

export default connect(mapStateToProps)(CategoryPage);
