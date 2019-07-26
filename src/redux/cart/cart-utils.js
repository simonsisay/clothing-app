export const addItemToCart = (cartItems, cartItem) => {
  const existing = cartItems.find(item => item.id === cartItem.id);
  if (existing) {
    return cartItems.map(item => {
      return item.id === cartItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  } else return [...cartItems, { ...cartItem, quantity: 1 }];
};
