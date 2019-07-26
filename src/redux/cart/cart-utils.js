export const addItemToCart = (cartItems, cartItem) => {
  console.log(cartItems, cartItem);
  const existing = cartItems.find(item => item.id === cartItem.id);
  if (existing) {
    return cartItems.map(item =>
      item.id === cartItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : cartItem
    );
  } else return [...cartItems, { ...cartItem, quantity: 1 }];
};
