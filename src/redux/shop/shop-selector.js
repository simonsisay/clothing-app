import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  ({ collections }) => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = urlParam =>
  createSelector(
    [selectShop],
    ({ collections }) => {
      return collections[urlParam];
    }
  );
