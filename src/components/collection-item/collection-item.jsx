import React from "react";
import "./collection-item.styles.scss";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart-actions";

const CollectionItem = ({ item, addToCart }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="item-card">
      <div className="item-image-container">
        <img alt={imageUrl} className="item-image" src={imageUrl} />
        <button className={"card-button"} onClick={() => addToCart(item)}>
          Add to cart
        </button>
      </div>
      <div className="item-bottom">
        <p>{name}</p>
        <p>{price}$</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
